import React from 'react'
import { contactInfo } from '../constants/contact'

const Footer = () => {
  return (
    <section className='w-auto flex flex-col items-center justify-center bg-slate-900 dark:bg-slate-800 pt-16 mt-24'>
        <h1 className='text-3xl font-bold text-white'>My Company</h1>
        <div className='flex gap-4 mt-8 border-t border-white py-10 mx-12'>
            <div className='flex items-start justify-center gap-24 text-white'>
                <div className='flex flex-col flex-start align-start gap-8'>
                    <h4 className='text-md font-medium'>Reach us</h4>
                    {contactInfo.map((contact, index) => (
                        <div key={index} className='flex items-center gap-8'>
                            <img className='' src={contact.icon} alt={contact.alt} />
                            <p className='text-white text-sm font-light'>
                                {contact.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col flex-start align-start gap-8'>
                    <h4 className='text-md font-medium'>Company</h4>
                    <p className='text-sm font-light'>About Us</p>
                    <p className='text-sm font-light'>Contact Us</p>
                    <p className='text-sm font-light'>Blog</p>
                </div>
                <div className='flex flex-col flex-start align-start gap-8'>
                    <h4 className='text-md font-medium'>Legal</h4>
                    <p className='text-sm font-light'>Privacy Policy</p>
                    <p className='text-sm font-light'>Terms & Services</p>
                    <p className='text-sm font-light'>Terms of Use</p>
                    <p className='text-sm font-light'>Refund Policy</p>
                </div>
                <div className='flex flex-col flex-start align-start gap-8'>
                    <h4 className='text-md font-medium'>Quick Links</h4>
                    <p className='text-sm font-light'>Gallery</p>
                    <p className='text-sm font-light'>Downloads</p>
                    <p className='text-sm font-light'>Forum</p>
                </div>
                <div className='flex flex-col flex-start align-start gap-8 max-w-[300px]'>
                    <h4 className='text-md font-medium'>Join Our Newsletter</h4>
                    <div className='flex items-center'>
                        <input type="text" placeholder="Enter your email" className='w-full py-2 px-4 rounded-l-sm bg-white dark:bg-slate-900 text-black dark:text-white outline-none basis-3/4 bg-gray-300 text-xs' />
                        <a className='w-full py-2 px-4 rounded-r-sm bg-slate-800 dark:bg-slate-950 text-white dark:text-white outline-none border-slate-900 basis-1/4 dark:bg-slate-700 bg-slate-900 text-xs cursor-pointer'>Subscribe</a>
                    </div>

                    <p className='text-sm font-light text-gray-400'>Subscribe to our newsletter to stay up to date with our latest news and offers.</p>   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer