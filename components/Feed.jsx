"use client"

import React , { useState , useEffect} from 'react'

const Feed = () => {

  const [prompts, setPrompts] = useState([]);
  const [searchValue , setSearchValue ] = useState(undefined);

  const handleSearch = async (e) =>{
    e.preventDefault();
    setSearchValue(e.target.value)
  };


  useEffect(() => {
     
    const fetchPrompts = async () =>{
      const response = await  fetch('api/prompts')
      const data = await response.json();
      setPrompts(data);
      console.log(data)
    }
    fetchPrompts();

  }, []);




  return (
    <section className='feed'>
        <form className='relative w-full flex-center'>
             <input 
             type="text"
              value={searchValue}
              onChange={handleSearch}
              placeholder='enter username or tag'
              className='search_input_peer'
              required
             />
        </form>

        <PromptList
           data={prompts}
           handlTagClick={() => {}}
        />

    </section>
  )
}

export default Feed


import PromptCard from './PromptCard'

export function PromptList({ data, handlTagClick }) {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((each) => (
        <PromptCard
          key={each._id}
          post={each}
          handlTagClick={handlTagClick}
        />
      ))}
    </div>
  )
}
