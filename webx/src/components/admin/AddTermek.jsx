import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { GiCloudUpload } from "react-icons/gi";
import toast from "react-hot-toast"
const AddTermek = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles)
            setUploadedFiles(acceptedFiles);
        },
    })
    const [termeknev,settermeknev]= useState();
    const [termekleiras,settermekleiras]= useState();
    const [ar,setar]= useState();
    const [akcios,setakcios]= useState();
    const [akciosar,setakciosar]= useState();
    let akc=0;
    const felvisz = async()=>{
        if (uploadedFiles == [] || uploadedFiles.length==0) {
            toast.error("A kép feltöltése kötelező!")
            return;
        }
        if (termeknev == null || termeknev.length == 0 || termekleiras == null || termekleiras.length == 0 || ar == null || ar.length == 0) {
            toast.error("Minden mező kitöltése kötelező")
        }
        if (akcios == null) {
            toast.error("Adja meg, hogy akciós-e ")
            return
        }
        if (akciosar == null) {
            toast.error("Adja meg az akció értékét!")
        }
        if (akcios==true) {
            akc=1
        }
        const termekfel= await fetch("http://localhost:8000/admin/addproduct",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nev: termeknev,
                leiras: termekleiras,
                ar: Number(ar),
                akcios: Boolean(akc),
                akciosar: akciosar
            })
        })
        const data= await termekfel.json();
        console.log(data)
        const termekid= data.id;
        const formdata = new FormData()
        Array.from(uploadedFiles).map((file) => {
          formdata.append('file',file)
        })
        
        const keptotermek= await fetch("http://localhost:8000/upload",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TmkID: termekid,
                image: uploadedFiles
            })
        })
        console.log("halo")
        const res= await keptotermek.json();
        console.log(res);
    }
    return (
        <div className='w-full flex flex-col p-2 m-5 h-full'>
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
                <div {...getRootProps()} className='text-black mt-2 cursor-pointer flex flex-col justify-center items-center bg-white text-center z-0 rounded-lg p-5 w-92 h-96'>
                    <input {...getInputProps()} />
                    <GiCloudUpload className='w-36 h-36' />
                    <p>Drag and drop files here or click to browse.</p>
                    <ul>
                        {uploadedFiles.map((file) => (
                            <li key={file.name}>{file.name}</li>
                        ))}
                    </ul>
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