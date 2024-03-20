import React, { useEffect, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { GiCloudUpload } from "react-icons/gi";
import toast from "react-hot-toast"
const AddTermek = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [termeknev,settermeknev]= useState();
    const [termekleiras,settermekleiras]= useState();
    const [ar,setar]= useState();
    const [akcios,setakcios]= useState();
    const [akciosar,setakciosar]= useState();
    useEffect(()=>{
        console.log(akcios)
    },[akcios])

    const felvisz = async()=>{
        // let akc=0;
        // if (termeknev == null || termeknev.length == 0 || termekleiras == null || termekleiras.length == 0 || ar == null || ar.length == 0) {
        //     toast.error("Minden mező kitöltése kötelező")
        // }
        // if (akcios == null) {
        //     toast.error("Adja meg, hogy akciós-e ")
        //     return
        // }
        // if (akciosar == null) {
        //     toast.error("Adja meg az akció értékét!")
        // }
        // if (akcios=="true") {
        //     akc=1
        // }
        // const termekfel= await fetch("http://localhost:8000/admin/addproduct",{
        //     method:"POST",
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body: JSON.stringify({
        //         nev: termeknev,
        //         leiras: termekleiras,
        //         ar: Number(ar),
        //         akcios: Boolean(akc),
        //         akciosar: akciosar
        //     })
        // })
        // const data= await termekfel.json();
        // const termekid= data.id;
        // console.log(termekid)
        
        kepfel()
    }
    const kepfel=async()=>{
        console.log("zsa")
        console.log(uploadedFiles)
        const keptotermek= await fetch("http://localhost:8000/upload",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TmkID: 1,
                image: uploadedFiles[0]
            })
        })
        console.log("halo")
        const res= await keptotermek.json();
        console.log(res);
    }
    return (
        <div className='w-full flex overflow-scroll flex-col p-2 m-5 h-full'>
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl'>Termék hozzáadása</h1>
            </div>
            <div className='bg-stone-400 text-black w-fit p-5 m-5'>
                <table>
                    <tr>
                        <td>Termék neve:</td>
                        <td>
                            <input type="text" onChange={()=>{settermeknev(event.target.value)}} placeholder='Termék neve' />
                        </td>
                    </tr>
                    <tr>
                        <td>Termék leírása:</td>
                        <td>
                            <textarea type="text" onChange={()=>{settermekleiras(event.target.value)}} placeholder="Termék leírása" />
                        </td>
                    </tr>
                    <tr>
                        <td>Termék ára:</td>
                        <td>
                            <input type="number" onChange={()=>{setar(event.target.value)}} placeholder="Ár" />
                        </td>
                    </tr>
                    <tr>
                        <td>Akciós:</td>
                        <td className='flex'>
                            <input type="radio" onChange={()=>{setakcios(event.target.value)}} className='bg-stone-600 w-full text-xl' value={true} name='akcios' />
                            <label className='flex justify-center items-center'>Akciós</label>
                            <input type="radio" onChange={()=>{setakcios(event.target.value)}} className='bg-stone-600 w-full text-xl' value={false} name='akcios' />
                            <label className='flex justify-center items-center'>Nem akciós</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Akció mértéke: %</td>
                        <td>
                            <input type="text" onChange={()=>{setakciosar(event.target.value)}} placeholder='Akció mértéke' />
                        </td>
                    </tr>
                </table>
                <div  className='text-black mt-2 flex flex-col justify-center items-center bg-white text-center z-0 rounded-lg p-5 w-92 h-96'>
                    <input type='file' onChange={()=>{setUploadedFiles(event.target.files)}} id='fileupload' className='hidden'/>
                    <label htmlFor="fileupload" className='w-full cursor-pointer h-full'><GiCloudUpload className='w-full h-full' /></label>
                </div>
                <div className='flex mt-5 justify-center items-center'>
                    <button onClick={felvisz} className='bg-gray-500 rounded p-3 text-3xl'>
                        Termék hozzáadása
                    </button>
                </div>
            </div>
            <div className='mb-36'></div>
        </div>
    )
}

export default AddTermek