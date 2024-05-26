const Form = () => {
  return (
    <form
      action="https://formsubmit.co/twnpsilva@gmail.com"
      method="POST"
      className="w-full max-w-[60%] mx-auto lg:flex gap-8 my-4 lg:text-left"
    >
      <input
        type="hidden"
        name="_next"
        value="https://thawanps.vercel.app/sucess"
      />
      <input
        type="hidden"
        name="_autoresponse"
        value="I received your message, thank you for the contact and I will answer soon"
      />
      <div>
        <fieldset className="my-2">
          <legend className="font-bold">Name*</legend>
          <input
            type="text"
            name="name"
            autoComplete="off"
            required
            placeholder="Your name"
            className="w-full px-4 mt-1 text-black border-none rounded-3xl focus:outline-darkBlue"
          />
        </fieldset>
        <fieldset className="my-2">
          <legend className="font-bold">Email*</legend>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Your email"
            className="w-full px-4 mt-1 text-black border-none rounded-3xl focus:outline-darkBlue"
          />
        </fieldset>
        <fieldset className="my-2 ">
          <legend className="font-bold">Subject*</legend>
          <input
            type="text"
            name="subject"
            required
            autoComplete="off"
            placeholder="Subject"
            className="w-full px-4 mt-1 text-black border-none rounded-3xl focus:outline-darkBlue"
          />
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend className="font-bold">Message</legend>
          <textarea
            name="message"
            id="message"
            className="w-full px-4 mt-1 text-black border-none rounded-3xl focus:outline-darkBlue lg:h-36"
            placeholder="Your message"
          ></textarea>
        </fieldset>
        <button
          className="font-bold rounded-3xl py-3 px-5 bg-gradient-to-r from-p-purple via-35% via-darkBlue to-p-blue hover:bg-p-blue mt-2 hover:shadow-darkBlue hover:shadow-md transition duration-150 ease-in"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
