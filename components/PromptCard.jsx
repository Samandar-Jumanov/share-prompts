"use client";
import React , { useState } from 'react'
import Image from 'next/image';
import { usePathname , useRouter  } from 'next/navigation'
import { useSession } from 'next-auth/react';

const PromptCard = ( { post , handlTagClick, handleEdit , handleDelete }) => {
    const [ isCopied , setIsCopied ] = useState(false);
    const pathName = usePathname();
    const { data : session } = useSession();

    const handleCopy = () =>{
        navigator.clipboard.writeText(post.prompt);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

   
    
  return (
    <div className='prompt_card'>
        <div className='flex justify-between items-start gap-5'>
              <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                  <Image
                   src={post.creator.image}
                   width={40}
                   height={40}
                   alt='creator_image'
                   className='rounded-full object-contain'
                  />

                <div className="flex flex-col">
                  <h3 className='font-semibold text-grey-900'> { post.creator.username }</h3>
                   <p className='text-sm text-grey-500'> {post.creator.email }</p>
                </div>

              </div>

              <div className="copy_btn">
                 <Image  
                   src={!isCopied ? "/assets/icons.tick.svg" :"/assets/icons.copy.svg"}
                   width={12}
                   height={12}
                   onClick={handleCopy}
                 />
              </div>

        </div>
              <p className='text-sm text-grey-700 my-4'>{post.prompt}</p>
              <p className='text-sm blue_gradient cursor-pointer' onClick={() => handlTagClick && handlTagClick(post.tag)}>{post.tag}</p>
              {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default PromptCard