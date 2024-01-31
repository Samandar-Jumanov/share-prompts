"use client"

import Profile from "@components/Profile"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import axios from "axios"

const MyProfile =  () =>{
  const router = useRouter();

  const [userPosts , setUserPosts] = useState([]);
  const { data : session } = useSession();



  useEffect(() => {
     const  fetchUserPosts = async  () => {
           const response = await axios.get(`api/users/${session?.user.id}/posts`);
           const data = response.data;
           setUserPosts(data);
           console.log(data);
      };
      
      if(session?.user.id) fetchUserPosts();
  } , []);


    const handleEdit = (post) =>{
        // router.push(`/update-prompt?id=${post._id}`);
        console.log({postId : post._id})
    };

    const handleDelete = (post) =>{
        
    };

    return(
        
           <Profile  
              name="My"
              desc ="Welcome to your personolized profile"
              data = {userPosts}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
           />
    )
}

export default MyProfile


