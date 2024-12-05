import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";




const Email = () => {
     return (
          <div className="my-24">
               <h1 className="text-center text-3xl">Connect with Me</h1>
               <form className="card-body lg:w-1/2 mx-auto">
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Name</span>
                         </label>
                         <input type="text" placeholder="name" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Email</span>
                         </label>
                         <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Message</span>
                         </label>
                         <textarea className="textarea textarea-bordered" placeholder="Write Your Message"></textarea>

                    </div>
                    <div className="form-control mt-6">
                         <button className="btn border-[#9E9ABF] hover:bg-[#9E9ABF]"><MdAttachEmail /> Send Email</button>
                    </div>
                    <div className="form-control">
                         <p className="text-center">or</p>
                    </div>
                    <div className="form-control">
                         <button className="btn border-[#9E9ABF] hover:bg-[#9E9ABF]"><FaWhatsapp />Message on Whatsapp </button>
                    </div>
               </form>
          </div>
     );
};

export default Email;