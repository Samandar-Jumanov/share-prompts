import React from 'react'
import Link from 'next/link';

const Form = ({ post, setPost, handleCreatePost, submitting, type }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post </span>
      </h1>
      <p className='desc text-left max-w-md'>{type} and share amazing prompts</p>

      <form
        action='create'
        onSubmit={handleCreatePost}
        className='mt-10 w-full max-width-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span>Your ai powered prompt</span>
          <textarea
            value={post?.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className='form_textarea'
            required
            placeholder='Enter your prompt ...'
          />
        </label>

        <label>
          <span>
            Tag
            <span>(#web , #ai , #simple)</span>
          </span>
          <input
            value={post?.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className='form_input'
            required
            placeholder='Enter your tag ...'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-grey-500 text-sm'>
            Cancel post
          </Link>

          <button
            type='submit'
            disabled={submitting}
            // className='px-5 py-1.5 text-sm big-primary-orange rounded-full text-white'
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form