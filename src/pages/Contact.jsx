import logo from "/logo.png";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Accordion from "../components/Accordion";
const kurl = ` ${import.meta.env.VITE_KAPI_URL}/mail/query`;
function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    query: "",
    mobile: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const kquery = await axios.post(`${kurl}`, {
        name: formData.name,
        email: formData.email,
        query: formData.query,
        mobile: formData.mobile,
      });
      toast.success(kquery.data.message);
    } catch (error) {
      console.error(
        "Query submission Failed:",
        error.response?.data?.message || error.message
      );
      toast.error(
        error.response?.data?.message ||
          "Query submission failed. Please try again."
      );
    } finally {
      setFormData({
        email: "",
        name: "",
        query: "",
        mobile: "",
      });
    }
  };
  return (
    <>
      <div className="flex font-sans min-h-screen justify-center items-center w-full bg-gray-900 text-white  bg-[url(/oceanbg.webp)]  bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12 lg:px-20 w-full h-full">
          <div className="w-full max-w-lg p-6 backdrop-blur-md bg-cyan-300 bg-opacity-20 rounded-xl">
            <p className="text-2xl font-semibold text-center">
              How Can We Help You?
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <label
                className="static text-white text-base mt-2 font-semibold"
                htmlFor="name"
              >
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-600 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
                required
              />

              <label
                className="font-semibold static text-white text-base mt-2"
                htmlFor="email"
              >
                Your Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-600 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
              />
              <label
                className="font-semibold static text-white text-base mt-2"
                htmlFor="email"
              >
                Your Mobile:
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-600 bg-opacity-50 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
              />

              <label
                className="font-semibold static text-white text-base mt-2"
                htmlFor="message"
              >
                Your Message:
              </label>
              <textarea
                className="bg-gray-600 bg-opacity-50 placeholder:text-gray-300  p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                id="message"
                rows="4"
                type="text"
                name="query"
                placeholder="Enter your query here"
                value={formData.query}
                onChange={handleChange}
              ></textarea>

              <button
                className="mt-6 py-2 bg-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors w-full"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </div>

          <div className="w-full max-w-lg p-6 backdrop-blur-md bg-cyan-300 bg-opacity-20 rounded-xl text-center">
            <h1 className="text-2xl font-semibold">Reach Us</h1>
            <div className="flex flex-col items-center mt-4">
              <span className="bg-cyan-500 rounded-full justify-center items-center flex">
                <img src={logo} className="flex w-16 h-20" alt="logo" />
              </span>
              <p className="text-xl font-semibold mt-2">CEG TechForum</p>
              <p className="text-xs">An ISO 9001:2015 certified organisation</p>
            </div>

            <div className="flex items-center justify-center mt-6 text-sm text-center rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.370602293092!2d80.23400506847207!3d13.012055671301153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a207274009%3A0xad310ef6d46e1653!2sCEG%20Tech%20Forum!5e0!3m2!1sen!2sin!4v1739561499157!5m2!1sen!2sin"
                width="100%"
                className="rounded-lg flex lg:w-[400px] lg:h-[250px]"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Accordion />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
