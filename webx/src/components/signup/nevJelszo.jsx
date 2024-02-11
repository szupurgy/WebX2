import React from 'react'

const NevJelszoIn = ({prevStep,nextStep,handleChange,values}) => {
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        nextStep();
    }

    const NevJelszoCheck=()=>{
        const nev=values.username;
        const jelszo=values.password;
        const jelszo2=values.password2;
        if (jelszo!=jelszo2 || nev=="" || nev==null || jelszo=="" || jelszo==null || jelszo.length<8) {
            alert("Nem valós adatok!");
            return;
        }
        Continue();
    };

  return (
    <>
        <div className='h-screen w-screen bg-slate-50 flex justify-center items-center'>
        <div className='bg-gray-50 m-6 p-10 w-screen flex flex-col h-screen sm:h-auto sm:w-3/6 rounded-md border-stone-950 border-2 shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]'>
            <form action="" className='gap-5 inline-flex w-full'>
                <div className='w-full h-full mb-12 gap-5 flex flex-col'>
                    <label className='p-2 text-4xl mb-4'>Felhasználónév:</label>
                        <input 
                            className='border text-lg w-full rounded-md p-2.5 shadow-md'
                            type="text" 
                            placeholder="Név" 
                            value={values.username} 
                            onChange={handleChange('username')}
                        />
                    <label className='p-2 text-4xl mb-4'>Jelszó:</label>
                        <input 
                            className='border text-lg w-full rounded-md p-2.5 shadow-md'
                            type="password" 
                            placeholder="Jelszó" 
                            value={values.password} 
                            onChange={handleChange('password')}
                        />
                    <label className='p-2 text-4xl mb-4'>Jelszó újra:</label>
                        <input 
                            className='border text-lg w-full rounded-md p-2.5 shadow-md'
                            type="password" 
                            placeholder="Jelszó újra" 
                            value={values.password2} 
                            onChange={handleChange('password2')}
                        />
                    </div>
                    
            </form>
            <div className='flex w-full gap-4'>
                <button className='border bg-indigo-600 rounded-md text-white p-2.5 text-lg font-bold shadow-md w-full'  onClick={ Previous }>Vissza</button>
                <button className='border bg-indigo-600 rounded-md text-white p-2.5 text-lg font-bold shadow-md w-full'  onClick={ NevJelszoCheck }>Következő</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default NevJelszoIn