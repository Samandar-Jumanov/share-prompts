"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState , useEffect } from 'react';
import { signIn , useSession , getProviders , signOut } from 'next-auth/react';

const Nav = () => {
    
    const { data : session} = useSession();
    
    const [providers , setProviders] = useState(null);
    const [toggleDropDown , setToggleDropDown] = useState(false);

    useEffect(() => {
        const setUpProvider = async () =>{
            const response = await getProviders();
            setProviders(response)
        }
        setUpProvider()
    }, []);

  return (
   <nav className='flex-between  w-full mb-16 pt-3'>
    <Link  
    href="/" 
    className='flex gap-2 flex-center'>
    <Image 
     src='/assets/images/logo.svg'
      width={30}
      height={30}
      alt='Prompropia logo'
      className='object-contain' 
    
    />
     <p  className='logo_text'> Promptopia </p>
    </Link>

    {/* Desktop  Navigation */}

    <div className="sm:flex hidden">
        {session?.user ? 
         <div className='flex gap-3 md:gap-5'> 
           <Link 
             href="/create-prompt"
             className='black_btn'>
              Create post 
           </Link>

           <button 
           className='outline_btn' 
           onClick={signOut}  
           type='button'
           >
              Sign out
           </button>
         
         <Link href='/profile'>

         <Image
           width={37}
           height={37}
           src='/assets/images/logo.svg'
           className='rounded-full'
           alt='profile'
         />

         </Link>
         </div>

         :

         <>
            {providers && Object.values(providers).map(( provider) =>(
                <button 
                key={provider.name}
                className='black_btn'
                onClick={() => signIn(provider.id)}
                type='button'
                >
                    Sign in 
                </button>
            ))}
         </>
        }

    </div>


    {/* Mobile Navigation  */}

    <div className="sm:hidden flex relative">

{  session?.user ?
 <div className='flex'> 
     <Image
           width={37}
           height={37}
           src='/assets/images/logo.svg'
           className='rounded-full'
           alt='profile'
           onClick={()=>setToggleDropDown(prev => !prev)}
         />

         {toggleDropDown && <div className='dropdown'>

         <button 
              href="/profile"
              className='dropdown_link'
              onClick={() => setToggleDropDown(false)}
            >

                My profile
            </button>

            <Link 
              href="/profile"
              className='dropdown_link'
              onClick={() => setToggleDropDown(false)}
            >

                Create prompt
            </Link>

            <button 
              href="/profile"
              className='mt-5 w-full black_btn'
              onClick={() => {
                  setToggleDropDown(false)
                  signOut();
              }}
            >
               Sign out 
            </button>
            </div>
            
        }

</div>
: 
<>
            {providers && Object.values(providers).map(( provider) =>(
                <button 
                key={provider.name}
                className='black_btn'
                onClick={() => signIn(provider.id)}
                type='button'
                >
                    Sign in 
                </button>
            ))}
         </>

}
    </div>


   </nav>
  )
}

export default Nav