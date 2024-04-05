import React from 'react'

const Contact = () => {
    return (
        <>
            <div id='ContactP' className=" mx-auto px-20 xs:px-0 sm:px-20  m-10 mb-20">
                <h2 className="text-2xl text-[#212529] font-semibold mb-6">Contact Us</h2>
                <form className="space-y-4 ">
                    <div>
                        <label htmlFor="name" className="text-[#212529] block mb-1 text-left">Name</label>
                        <input placeholder='Your Name' type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-400" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-[#212529] block mb-1 text-left">Email addres</label>
                        <input placeholder='Your Email Address' type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-400" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-[#212529] block mb-1 text-left">Message</label>
                        <textarea placeholder='Your Message' id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-400"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="float-left bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact
