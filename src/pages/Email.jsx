import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";



const Email = () => {

     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs
               .sendForm('service_xh2736r', 'template_xj3bhzo', form.current, {
                    publicKey: 'aK9JT0xLIQ5v1cdGq',
               })
               .then(
                    () => {
                         form.current.reset(); 
                         toast.success('Email Successfully Sent')
                    },
                    (error) => {
                         console.log('FAILED...', error.text);
                         toast.error('Something is wrong')
                    },
               );
     };



     return (
          <div className="my-24">
               <h1 className="text-center text-3xl">Connect with Me</h1>
               <form className="card-body lg:w-1/2 mx-auto" ref={form} onSubmit={sendEmail}>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Name</span>
                         </label>
                         <input type="text" name="user_name" placeholder="name" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Email</span>
                         </label>
                         <input type="email" name="user_email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Message</span>
                         </label>
                         <textarea className="textarea textarea-bordered" name="message" placeholder="Write Your Message"></textarea>

                    </div>
                    <div className="form-control mt-6">
                         <button type="submit" className="btn border-[#9E9ABF] bg-[#0F172A] hover:bg-[#9E9ABF]"><MdAttachEmail /> Send Email</button>
                    </div>
                    <div className="form-control">
                         <p className="text-center">or</p>
                    </div>
                    <div className="form-control">
                         <a href="https://api.whatsapp.com/send?phone=8801630844517" target="blank"><button className="btn bg-[#0F172A] border-[#9E9ABF] hover:bg-[#9E9ABF]"><FaWhatsapp />Message on Whatsapp </button></a>
                         
                    </div>
               </form>
          </div>
     );
};

export default Email;