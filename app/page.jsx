import React from 'react'
import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>Discover & Share 
            <br  className='max-md:hidden'/>
            <span className='orange_gradient text-center'> AI powered prompts</span>
            <p className="desc text-center">
            Generate a creative and engaging paragraph describing a futuristic cityscape.
            Imagine a world where advanced technology and nature seamlessly coexist. 
            Picture towering skyscrapers adorned with vibrant gardens, 
            holographic displays projecting colorful images into the sky
            and autonomous vehicles smoothly navigating above bustling streets. 
            </p>
            </h1>
           <Feed/>
    </section>
  )
}

export default Home