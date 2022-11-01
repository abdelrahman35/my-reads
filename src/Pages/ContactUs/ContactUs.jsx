import React from "react";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-3 gap-5 m-5">
      <div className="border-r-2 border-blackColor pr-5">
        <img src="./assets/contact.jpg" alt="" />
      </div>
      <div className="col-span-2">
        <h2 className="font-Montserrat italic text-xl text-center mt-3">
          we are thrilled to here from you!{" "}
        </h2>
        <form>
          <label className="block p-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-Ubuntu text-blackColor">
              Name
            </span>
            <input
              type="text"
              name="name"
              className="placeholder:italic placeholder:text-darkGrey w-full border-b-2	 border-darkGrey  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:none  sm:text-sm"
              placeholder="Full Name"
            />
          </label>
          <label className="block p-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-Ubuntu text-blackColor">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="placeholder:italic placeholder:text-darkGrey w-full border-b-2	 border-darkGrey  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:none  sm:text-sm"
              placeholder="you@example.com"
            />
          </label>
          <label className="block p-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-Ubuntu text-blackColor">
              Phone Number
            </span>
            <input
              type="text"
              name="phoneNumber"
              className="placeholder:italic placeholder:text-darkGrey w-full border-b-2	 border-darkGrey  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:none  sm:text-sm"
              placeholder="Phone Number"
            />
          </label>
          <label className="block p-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-lg font-Ubuntu text-blackColor">
              Your Message
            </span>
            <textarea
              type="text"
              name="message"
              className="placeholder:italic placeholder:text-darkGrey w-full border-b-2	 border-darkGrey  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:none  sm:text-sm"
            ></textarea>
          </label>
          <div className="border-b-2 border-darkGrey text-darkGrey m-3 w-36 hover:border-blackColor hover:text-blackColor font-Ubuntu duration-300 ease-in-out">
            <button className="p-1 mr-4 hover:mr-6 ease-in duration-200">
              Send
            </button>
            <i className="fa fa-arrow-right"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
