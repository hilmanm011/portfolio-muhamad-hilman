'use client'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"


type Props = {}

type Inputs = {
    name: string
    email: string
    subject: string,
    message: string
  }
  
  
const ContactMe = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:muhamadhilman885@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
      }
    
    
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-sm hidden">
            Contact
        </h3>
        
        <div className="flex flex-col space-y-10">
            {/* <h4 className="text-4xl font-semibold text-center">
                I have got just what you need.{" "}
                <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
            </h4> */}

            <div className='space-y-10'>
                <div className='flex items-center justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>+62 896 8413 0569</p>
                </div>

                <div className='flex items-center justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>muhamadhilman885@gmail.com</p>
                </div>

                <div className='flex items-center justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>Jakarta - Indonesia</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />

                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe