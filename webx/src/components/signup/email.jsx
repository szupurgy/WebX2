import React from 'react'
import toast from 'react-hot-toast';
const EmailIn = ({nextStep,handleChange,values}) => {
    const Continue = e => {
        nextStep();
      }
    const EmailCheck=async()=>{
        const email=values.email;
        if (email=="" || email==null ||email.includes("@")==false || email.includes(".")==false) {
            toast.error("Valódi email címet adj meg!");
            return;
        }
        const response=await fetch('http://localhost:8000/user/emailCheck',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email})
        })
        const data=await response.json();
        if(data.message){
            toast.error(data.message);
            return;
        }
        if(data.success){
            Continue();
        }
        
    }
  return (
    <>
    <div className='h-screen w-screen bg-slate-50 sm:flex justify-center items-center'>
    <div className='bg-gray-50 sm-6 p-10 w-screen flex flex-col h-screen sm:h-auto md:w-3/6 rounded-md border-stone-950 border-2 shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]'>
            <form action="" className='gap-5 inline-flex w-full'>
                <div className='w-full h-full mb-12 gap-5 flex flex-col'>
                    <label className='p-2 text-4xl mb-4'>E-mail cím:</label>
                    <input 
                    className='border text-lg w-full rounded-md p-2.5 shadow-md'
                    type="text" 
                    placeholder="email cím" 
                    value={values.email} 
                    onChange={handleChange('email')}
                    />
                    
                </div>
            </form>
            <a href="login" className='text-blue-600'>Bejelentkezés</a>
            <button className='border bg-indigo-600 rounded-md text-white p-2.5 text-lg font-bold shadow-md' onClick={ EmailCheck }>Következő</button>
        </div>
    </div>
    </>
  )
}

export default EmailIn