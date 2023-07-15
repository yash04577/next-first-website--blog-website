// 'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  
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
    <div className='max-w-[1080px] mx-auto '>

      <div className='flex flex-col items-center'>
        <Image
          src="/homeimg.jfif"
          width={200}
          height={200}
          className='rounded-[50%]'
          alt="Picture of the author"
        />

        <h1 className='text-3xl font-bold mt-4'>HuntingCoder</h1>

      </div>

      <section>
        <h1 className='text-4xl font-bold mt-4'>Latest Blogs</h1>



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
  )
}
