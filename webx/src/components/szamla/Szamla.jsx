import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";

const Szamla = (termekid) => {
  const navigate = useNavigate()
  const [szamla, setSzamla] = useState()
  useEffect(() => {
    getrendelesdata()
  }, [])
  
  const getrendelesdata = async () => {
    const rendelesek = await fetch("http://localhost:8000/order/GetOrder/" + termekid.id, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await rendelesek.json()
    setSzamla(data)
    console.log(data)
    if (data === null) {
      toast.error("Nem található ilyen rendelés")
      navigate('/home')
    }
    
    const props=setPfdProps(data)
    letoltes(props)
  }

  const letoltes = (props)=>{
    const pdfObject = jsPDFInvoiceTemplate(props);
  }

  const setPfdProps=(szamla)=>{
    var props = {
      outputType: OutputType.Save,
      returnJsPDFDocObject: true,
      fileName: `${szamla?.rendelesazonosito}`,
      orientationLandscape: false,
      compress: true,
      logo: {
        src: "/logo.png",
        type: 'PNG',
        width: 53.33, 
        height: 26.66,
        margin: {
          top: 0, 
          left: 0 
        }
      },
  
      business: {
        name: "WebX",
        address: "5600 Békéscsaba Puskin tér 1",
        phone: "(+36) 31 785 6067",
        email: "feketekaroly@taszi.hu",
        email_1: "karcsirichi@gmail.com",
        website: "www.webx.com",
      },
      contact: {
        label: "vevő információi:",
        name: `${szamla?.Felhasznalo.felhasznalonev}`,
        address: `${szamla?.Cim.Orszag}, ${szamla?.Cim.varos}, ${szamla?.Cim.utca},${szamla?.Cim.hazszam}`,
        phone: `${szamla?.Felhasznalo.telszam}`,
        email: `${szamla?.Felhasznalo.email}`,
      },
      invoice: {
        label: "Számla: ",
        num: `${szamla?.rendelesazonosito}`,
        invDate: `Rendelés dátuma: 06`,
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          {
            title: "#",
            style: {
              width: 10
            }
          },
          {
            title: "Termék neve",
            style: {
              width: 30
            }
          },
          {
            title: "Leírás",
            style: {
              width: 80
            }
          },
          { title: "Ár" },
          { title: "Mennyiség" },
          { title: "Teljes ár" }
        ],
        table: Array.from(Array(10), (item, index) => ([
          index + 1,
          "There are many variations ",
          "Lorem Ipsum is simply dummy text dummy text ",
          200.5,
          4.5,
          400.5
        ])),
        additionalRows: [{
          col1: 'Végösszeg:',
          col2: '145,250.50',
          col3: 'Ft',
          style: {
            fontSize: 14
          }
        },
        {
          col1: 'ÁFA:',
          col2: '27',
          col3: '%',
          style: {
            fontSize: 10
          }
        },
        {
          col1: 'Részösszeg:',
          col2: '116,199.90',
          col3: 'Ft',
          style: {
            fontSize: 10
          }
        }],
        invDescLabel: "Invoice Note",
        invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      footer: {
        text: "A számlát kérjük őrizze meg.",
      },
      pageEnable: true,
      pageLabel: "Oldal",
    };
    return props;
  }
  
  return (

    <div className='w-screen h-screen overflow-hidden bg-gray-100'>
      <div className='h-full'>
        <div className='h-24'></div>
        <div className='h-5/6 mt-5'>
          <div className='px-5 h-full bg-white mx-auto w-10/12 border '>
            <div className='mt-3 flex'>
              <div className='h-24'>
                <img src="/logo.png" className='w-28 h-24' />
              </div>
              <div className='sm:flex hidden w-full justify-between'>
                <div className='flex justify-center flex-col'>
                  <h1>WEBX kft.</h1>
                  <h1>5600 Békéscsaba Puskin tér 1.</h1>
                  <h1>Shop for fun</h1>
                </div>
                <div className='flex mr-5 justify-center items-end flex-col'>
                  <h1>+36 31 785 6067</h1>
                  <h1>feketekaroly@taszi.hu</h1>
                  <h1>webx.com</h1>
                </div>
              </div>
            </div>
            <hr className='mx-5' />
            <div>
              <div>
                <h1 className='flex justify-center items-center text-4xl mt-3 font-bold'>Számla</h1>
              </div>
              <div className='flex justify-between mb-2 mx-10 bg-gray-50 p-2'>
                <h1>Számla azonosító:</h1>
                <h1>{szamla?.rendelesazonosito}</h1>
              </div>
            </div>
            <hr className='mx-5' />
            <div className='mx-5 p-5'>
              <div>
                <h1>Vevő adatai:</h1>
              </div>
              <div>
                <h1 className='flex flex-col'>
                  <span className='font-bold text-4xl'>{szamla?.Felhasznalo.felhasznalonev}</span>
                  <div className='flex gap-2'>
                    <span>{szamla?.Cim.iranyitoszam}</span>
                    <span>{szamla?.Cim.orszag}</span>
                    <span>{szamla?.Cim.varos}</span>
                    <span>{szamla?.Cim.utca}</span>
                    <span>{szamla?.Cim.hazszam}</span>
                  </div>
                </h1>
              </div>
            </div>
            <hr className='mx-5' />
            <div>
              <div className='bg-gray-50 flex justify-between mt-4 border-b mx-5'>
                <div>Termék</div>
                <div>Egységár</div>
                <div>Mennyiség</div>
                <div>Bruttó ár</div>
              </div>
              <div className=' flex justify-between mx-5'>
                <div>{szamla?.Termek.nev}</div>
                <div>{szamla?.Termek.ar}Ft</div>
                <div>{szamla?.mennyiseg}</div>
                <div>{((szamla?.jelenlegiar * szamla?.mennyiseg) * 0.27) + (szamla?.jelenlegiar * szamla?.mennyiseg)}Ft</div>
              </div>
            </div>
            <div>
              <div>
                <h1 className='mx-5 mt-3'>A termékek árai tartalmazzák az áfát!</h1>
              </div>
            </div>
            <div>
              <div className='bg-gray-50 mx-5 border-t border-b'>
                <div className='flex justify-between'>
                  <h1>ÁFA összesítő</h1>
                  <h1>Nettó</h1>
                  <h1>Áfa</h1>
                  <h1>Bruttó</h1>
                </div>
                <div className='flex justify-between'>
                  <h1>27% áfa</h1>
                  <h1>{szamla?.jelenlegiar * szamla?.mennyiseg}Ft</h1>
                  <h1>{(szamla?.jelenlegiar * szamla?.mennyiseg) * 0.27}Ft</h1>
                  <h1>{((szamla?.jelenlegiar * szamla?.mennyiseg) * 0.27) + (szamla?.jelenlegiar * szamla?.mennyiseg)}Ft</h1>
                </div>
              </div>
            </div>
            <div>
              <div className='flex justify-end text-3xl'>
                <h1>Fizetendő végösszeg: </h1>
                <h1>{((szamla?.jelenlegiar * szamla?.mennyiseg) * 0.27) + (szamla?.jelenlegiar * szamla?.mennyiseg)}Ft</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Szamla