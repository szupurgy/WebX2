import React, { useContext, useEffect, useState } from 'react'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";
import arContext from '../../context/ArContext';
const Szamla = (termekid) => {
  const navigate = useNavigate()
  const [szamla, setSzamla] = useState()
  const [rendelesazon, setRendelesAzon] = useState()
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
    console.log(data)
    if (data == null || data.length==0) {
      toast.error("Nem található ilyen rendelés")
      navigate('/home')
    }
    setSzamla(data)
    setRendelesAzon(data[0].rendelesazonosito)
    const {cart, ar, setAr, setCart } = useContext(arContext);
    setCart(prev => {
      return prev.filter((item, i) => i !== index)
  })
  

  }

  const letoltes = () => {
    const props = setPfdProps(szamla)
    const pdfObject = jsPDFInvoiceTemplate(props);
  }

  const setPfdProps = (szamla) => {
    let vegosszeg = 0;
    szamla.map((item, index) => {
      let ar = item.Termek.akcios ? item.Termek.ar - (item.Termek.ar * (item.Termek.akciosar / 100)) : item.Termek.ar
      vegosszeg += Number(ar) * Number(item.mennyiseg)
    })
    var props = {
      outputType: OutputType.Save,
      returnJsPDFDocObject: true,
      fileName: `${szamla[0]?.rendelesazonosito}`,
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
        name: `${szamla[0]?.Felhasznalo.felhasznalonev}`,
        address: `${szamla[0]?.Cim.orszag}, ${szamla[0]?.Cim.varos}, ${szamla[0]?.Cim.utca},${szamla[0]?.Cim.hazszam}`,
        phone: `${szamla[0]?.Felhasznalo.telszam}`,
        email: `${szamla[0]?.Felhasznalo.email}`,
      },
      invoice: {
        label: "Számla: ",
        num: `${szamla[0]?.rendelesazonosito}`,
        invDate: `Rendelés dátuma: ${szamla[0]?.datum}`,
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
        table: Array.from(Array(szamla.length), (item, index) => ([
          index + 1,
          `${szamla[index].Termek.nev}`,
          `${szamla[index].Termek.leiras}`,
          `${szamla[index].jelenlegiar}`,
          `${szamla[index].mennyiseg}`,
          `${szamla[index].jelenlegiar * szamla[index].mennyiseg}`
        ])),
        additionalRows: [{
          col1: 'Végösszeg:',
          col2: `${Math.round(vegosszeg + ((vegosszeg * 0.73) / 100))}`,
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
          col1: 'Bruttó ár:',
          col2: `${vegosszeg}`,
          col3: 'Ft',
          style: {
            fontSize: 10
          }
        }],
        invDescLabel: "Megjegyzés:",
        invDesc: "Ez a vevő számára kiállított nyomtatvány, amely tartalmazza az árakat bruttó illetve nettó összegét az ÁFA törvény XIII. törvénye alapján lettek számítva. Minden jog fenttartva. Panasz esetén a fenti elérhetőségen teheti meg a megfelelő lépéseket.  ",
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

    <div className='w-screen h-screen overflow-hidden text-xl bg-gray-100'>
      <div className='h-full'>
        <div className='h-24'></div>
        <div className='h-5/6 mt-5'>
          <div className='px-5 h-full bg-white mx-auto w-10/12 border '>
            <h1 className='text-4xl flex justify-center items-center'>Sikeres megrendelés!</h1>
            <div>
              <div className='flex justify-center flex-col'>
                <h1>Rendelés azonosítója:</h1>
                <span>{rendelesazon}</span>
              </div>
            </div>
            <div>
              <p>Rendeléséhez csatolt számlát a következő gombra kattintva érheti el:</p>
            </div>
            <div className='flex gap-5 w-full'>
              <button onClick={letoltes} className='bg-gray-300 w-full md:w-auto rounded p-3 text-black font-bold text-xl'>Számla letöltése</button>
              <button onClick={() => { navigate('/home') }} className='bg-gray-300 w-full md:w-auto rounded p-3 font-bold text-xl'>Tovább vásárolok</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Szamla