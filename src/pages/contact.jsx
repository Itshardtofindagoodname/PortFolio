import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_05wcz6e",
        "template_ig2zujr",
        form.current,
        "efZ2YWnpFwXYV49nB"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("E-mail sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="/contact">
      <section className="bg-white min-h-screen">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 ">
            Want to Know <span className="text-yellow-600 font-caveat">Even More?</span>
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-900 sm:text-xl">
            Or have something that I can assist you with? Go ahead and say it and I'll get back to you.
          </p>
          <form ref={form} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                htmlFor="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="from_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Name
              </label>
              <input
                type="text"
                id="subject"
                name="from_name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Tell me your name"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button onClick={sendEmail} className="rounded-2xl border-2 border-dashed border-black bg-white px-2 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;