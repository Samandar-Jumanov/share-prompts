"use client"

import React , { useState} from 'react'
import  Form  from '@components/Form'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import axios from 'axios';

const CreatePrompt = () => {
  const [submitting , setSubmitting ] = useState(false);
  const [post , setPost ] = useState();


  const createPost = async  (e) =>{
    e.preventDefault();
    setSubmitting(true);
      try {
        const res = await axios.post('/api/prompts', {
          propmt : post?.propmt,
          tag : post?.tag,
          userId : session?.user.id
        });

        if(res.ok){
             setSubmitting(false);
             setPost(null);
             router.push('/');
        };
        
        router.push('/');
      } catch (error) {
        console.log(error?.message)
      } finally{
        setSubmitting(false);

      }
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