import React from 'react'
import { contactInfo } from '../constants/contact'
import SocialMediaButton from '../components/SocialMediaButton'
import Input from '../components/Input'

const Content = () => {
  return (
    <section className='min-h-screen max-w-7xl mx-auto flex flex-col relative'>
        <h1 className='text-4xl font-bold text-center md:mt-40 mt-28 text-black dark:text-white'>
            Contact Us
        </h1>
        <p className='text-lg text-center mt-4 mb-4 text-black dark:text-white px-4'>
            If you have any questions or feedback, please feel free to reach out to us.
        </p>
        
        <div className='max-w-7xl mx-auto w-full px-4 my-4 md:my-8'>
            <div className='flex flex-col md:flex-row gap-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-2 md:p-8 w-full h-auto lg:h-[650px]'>
                <div className='flex bg-gradient-to-br from-0% to-75% from-black to-slate-700 dark:from-[#4b749f] dark:to-transparent flex-row px-12 pt-10 pb-6 md:rounded-lg rounded-md h-auto basis-[45%]'>
                    <div className='flex flex-col justify-between h-full gap-10'>
                        <div>
                            <h3 className='text-2xl font-medium text-white'>
                                Contact Information
                            </h3>
                            <p className='text-white font-light'>
                                Contact us for any inquiries or feedback.
                            </p>
                        </div>
                        <div className='flex flex-col gap-10'>
                            {contactInfo.map((contact, index) => (
                                <div key={index} className='flex items-center gap-6'>
                                    <img className='' src={contact.icon} alt={contact.alt} />
                                    {/* <img className='hidden dark:block' src={contact.darkIcon} alt={contact.alt} /> */}
                                    <p className='text-white font-light'>
                                        {contact.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-row gap-4'>
                            <SocialMediaButton icon="/assets/twitter.svg" href="https://twitter.com/" alt="twitter" />
                            <SocialMediaButton icon="/assets/instagram.svg" href="https://www.instagram.com/" alt="instagram" />
                            <SocialMediaButton icon="/assets/discord.svg" href="https://discord.com/" alt="discord" />
                        </div>
                    </div>
                </div>

                <div className='flex grow p-10 basis-[55%]'>
                    <form className='flex flex-col grow gap-8'>
                        <Input label="Name" placeholder="Enter your name" />
                        <Input label="Email" placeholder="Enter your email" />
                        <Input label="Subject" placeholder="Enter the subject" />
                        <Input label="Message" placeholder="Write your message" textarea />
                        <a className='group bg-slate-700 dark:bg-inverse text-white text-center py-4 px-8 rounded-md md:self-end md:min-w-[160px] hover:min-w-[200px] hover:pr-12 hover:bg-slate-600 dark:hover:inverse transition-all cursor-pointer'>
                            Send Message <span className="opacity-0 absolute transition-all group-hover:opacity-100 transform group-hover:translate-x-3 translate-x-8 duration-300">➤</span>
                        </a>
                    </form>
                </div>

            </div>
          {/* <form onSubmit={handleSubmit} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'>
          </form> */}
        </div>
    </section>
  )
}

export default Content