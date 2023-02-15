import React from 'react'
import Header from '../comp/Header'
// import Footer from '../comp/Footer'

export const Blogpost = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <Header />
      <p className="absolute w-[246px] h-[60px] ml-[140px] mt-[160px] font-Mulish font-extrabold text-5xl leading-[60px] flex align-center">Blog posts</p>
      <div className='absolute w-[480px] h-[29px] ml-[140px] mt-[240px] font-Mulish font-semibold text-[18px] leading-[29px] flex align-center'>Our latest updates and blogs about managing your team</div>
      {/* <Footer /> */}
    </div>
  )
}
