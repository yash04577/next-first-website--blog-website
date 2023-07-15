import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useState, useEffect } from 'react';


const blog = () => {

    const [allblogs, setAllBlogs] = useState([]);
  
  const getBlogs = async () => {
    let data2 = await fetch("http://localhost:3000/api/get-all-blogs")
    let data = await data2.json();
    setAllBlogs(data.data);
  }


  useEffect(() => {
    getBlogs();
  }, [])


    return (
        <div className='max-w-[1080px] mx-auto'>

            <div className='max-w-[1080px] mx-auto'>
                <section>
                    <h1 className='text-4xl font-bold mt-4'>All Blogs</h1>

                    <div className='flex flex-col gap-6'>

                        {
                            allblogs.map((blog) => {
                                return (
                                    <div className=''>
                                        <h2 className='text-2xl font-bold mt-4'>{blog.title}</h2>
                                        <p className='my-2'>{blog.content}</p>
                                        <Link href={`/blog/${blog.filename}`} className='bg-black text-white rounded-md text-sm p-1'>Read More </Link>
                                    </div>
                                )

                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default blog