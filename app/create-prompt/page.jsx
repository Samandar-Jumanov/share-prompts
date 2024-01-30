"use client"

import React , { useState} from 'react'
import  Form  from '@components/Form'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

const CreatePrompt = () => {
  const [submitting , setSubmitting ] = useState(false);
  const [post , setPost ] = useState();


  const createPost = (e) =>{
    e.preventDefault();
    setSubmitting(true);

  }
  return (
    <div>
      <Form 
       type="Create"
       post={post}
       setPost={setPost}
       submitting={submitting}
       handleCreatePost={createPost}
      />
       </div>
  )
}

export default CreatePrompt