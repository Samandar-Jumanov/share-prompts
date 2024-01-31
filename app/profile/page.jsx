"use client"

import Profile from "@components/Profile"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import axios from "axios"
const MyProfile = async () =>{
  const router = useRouter();

  const [userPosts , setUserPosts] = useState([]);
  const { data : session } = useSession();



  useEffect(() => {
      async function fetchUserPosts (){
           const response = await axios.get(`api/users/${session?.user.id}/posts`);
           const data = response.json();
           setUserPosts(data);
      }
      
      if(session?.user.id) fetchUserPosts();
  } , []);


    const handleEdit = () =>{

    };

    const handleDelete = () =>{

    };

    return(
        <div>
           <Profile  
              name="My"
              desc ="Welcome to your personolized profile"
              posts = {[]}
              handleEdit
              handleDelete
           />
        </div>
    )
}

export default MyProfile


