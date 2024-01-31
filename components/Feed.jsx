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
    fetch('http://localhost:3000/api/prompts')
      .then(res => res.json())
      .then(prompts => setPrompts(prompts));
      
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
           handleOnclick={() => {}}
        />
    </section>
  )
}

export default Feed



import PromptCard from './PromptCard'


function PromptList( { data , handleOnclick}){
   
  return (
    <div className='mt-16 prompt_layout'>
           {data.map((each) =>{
                <PromptCard
                  key={each._id}
                  post={each}
                  handleOnclick={handleOnclick}
                />
           })}
    </div>
  )
}