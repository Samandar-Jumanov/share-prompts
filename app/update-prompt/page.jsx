"use client";

import { useState , useEffect } from "react";
import { useRouter  , useSearchParams } from "next/navigation";
import Form from "@components/Form";
import axios from "axios";
import { useSession } from "next-auth/react";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const promptId = searchParams.get("id")
  const { data : session} = useSession()
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  useEffect(() =>{
      const getPrompt =  async () =>{
          const response = await axios.get(`api/prompts/${promptId}`);
          const data = response.data
          setPost({
             prompt : data.prompt,
             tag : data.tag
          })
      };

      if(promptId) getPrompt();

  } , [promptId]);




  const updatePrompt = async () => {
    try {
       const response = await axios.patch(`api/prompts/${promptId}`, {
        prompt: post.prompt,
        tag: post.tag,
      });
      const data = response.data;
      router.push('/profile');
    } catch (error) {
      console.error('Error updating prompt:', error.response.data);
    }
  };

  return (
    <Form
      type='Update'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt