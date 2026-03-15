import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full bg-black py-30 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Content */}
        <div className="max-w-lg">
          <p className="text-[var(--primary-color)] text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in touch
          </h2>

          <p className="text-white leading-relaxed mb-8">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore enim aliquid debitis facilis fugiat, sit atque sed hic autem eaque nesciunt consequatur cupiditate numquam nulla neque eveniet dignissimos quisquam!
          </p>

          <p className="text-white text-sm mb-3">
            Feel free to get in touch with us via email or phone
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[var(--primary-color)] font-medium">
            <span>info@email.com</span>
            <span>+94 77 123 456</span>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-neutral-900 rounded-xl shadow-md p-6 md:p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="First name"
              className="col-span-1 border text-white border-neutral-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            />

            <input
              type="text"
              placeholder="Last name"
              className="col-span-1 border text-white border-neutral-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            />

            <input
              type="email"
              placeholder="Email address"
              className="md:col-span-2 border text-white border-neutral-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            />

         


            <textarea
              placeholder="Message"
              rows="4"
              className="md:col-span-2 border text-white border-neutral-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            ></textarea>

            <select className="border text-white bg-neutral-950 border-neutral-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]">
              <option>What are you interested in?</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Branding</option>
            </select>

            <button
              type="submit"
              className="bg-[var(--primary-color)] cursor-pointer text-white rounded-md px-6 py-3 font-medium hover:bg-[var(--primary-color)]/50 transition"
            >
              Submit
            </button>

            <p className="md:col-span-2 text-xs text-white mt-2">
              By clicking Submit you agree that we process your personal data
              according to our privacy statement.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;