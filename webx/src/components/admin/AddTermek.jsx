import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { GiCloudUpload } from "react-icons/gi";
const AddTermek = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles)
            setUploadedFiles(acceptedFiles);
        },
    })
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
                            <input type="text" placeholder='Termék neve' />
                        </td>
                    </tr>
                    <tr>
                        <td>Termék leírása:</td>
                        <td>
                            <textarea type="text" placeholder="Termék leírása" />
                        </td>
                    </tr>
                    <tr>
                        <td>Termék ára:</td>
                        <td>
                            <input type="number" placeholder="Ár" />
                        </td>
                    </tr>
                    <tr>
                        <td>Akciós:</td>
                        <td className='flex'>
                            <input type="radio" className='bg-stone-600 w-full text-xl' value={true} name='akcios' />
                            <label className='flex justify-center items-center'>Akciós</label>
                            <input type="radio" className='bg-stone-600 w-full text-xl' value={false} name='akcios' />
                            <label className='flex justify-center items-center'>Nem akciós</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Akció mértéke: %</td>
                        <td>
                            <input type="text" placeholder='Akció mértéke' />
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
                    <button className='bg-gray-500 rounded p-3 text-3xl'>
                        Termék hozzáadása
                    </button>
                </div>
            </div>
            <div className='mb-36'></div>
        </div>
    )
}

export default AddTermek