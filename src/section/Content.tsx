import React from 'react'
import { contactInfo } from '../constants/contact'
import SocialMediaButton from '../components/SocialMediaButton'

const Content = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <h1 className='text-4xl font-bold text-center mt-40 text-black dark:text-white'>
            Contact Us
        </h1>
        <p className='text-lg text-center mt-4 mb-12 text-black dark:text-white'>
            If you have any questions or feedback, please feel free to reach out to us.
        </p>
        
        <div className='max-w-6xl mx-auto w-full px-4'>
            <div className='flex sm:grid-rows-2 gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full'>
                <div className='flex mb-4 bg-gradient-to-br from-black to-slate-700 dark:from-gray-200 dark:to-[#fbfbfb] flex-row p-8 flex-initial rounded-lg h-[500px]'>
                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            <h3 className='text-2xl font-medium text-white dark:text-slate-900 dark:font-bold'>
                                Contact Information
                            </h3>
                            <p className='text-white font-light dark:text-slate-900'>
                                Contact us for any inquiries or feedback.
                            </p>
                        </div>
                        <div className='flex flex-col gap-10'>
                            {contactInfo.map((contact, index) => (
                                <div key={index} className='flex items-center gap-6'>
                                    <img className='block dark:hidden' src={contact.icon} alt={contact.alt} />
                                    <img className='hidden dark:block' src={contact.darkIcon} alt={contact.alt} />
                                    <p className='text-white font-light dark:text-slate-900'>
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

                <div className='flex flex-col gap-4 flex-initial'>

                </div>

            </div>
          {/* <form onSubmit={handleSubmit} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'>
          </form> */}
        </div>
    </section>
  )
}

export default Content