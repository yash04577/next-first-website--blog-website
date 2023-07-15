import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const blog = () => {

  const router = useRouter();

  const [blogg, setBlog] = useState({});

  const getBlogs = async () => {
  
    let data2 = await fetch(`http://localhost:3000/api/get-blog?id=${router.query.slug}`)
    let data = await data2.json();
    setBlog(data.data)
  
  }


  useEffect(() => {
    getBlogs();
  }, [])


  return (

    <div className='max-w-[1080px] mx-auto'>

      {


        blogg ?
          <>
            <div className=''>
              <h2 className='text-2xl font-bold mt-4'>{blogg.title}</h2>
              <p className='my-2'>{blogg.content}</p>
            </div>
          </> :
          <>
            <p>Internal server error</p>
          </>

      }

    </div>
  )
}

export default blog