"use client"

import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({ name , data, desc , handleEdit , handleDelete}) => {
  return (
    <section className='w-full'>
       <h1 className='head_text text-left'>
               <span className='blue_gradient'> {name} Profile</span>
        </h1>
         <p className='desc text-left'>{desc}</p>

         <div className='mt-16 prompt_layout'>
      {data.map((each) => (
          <PromptCard
              key={each._id}
              post={each}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
          />
      ))}
    </div>

    </section>
  )
}

export default Profile