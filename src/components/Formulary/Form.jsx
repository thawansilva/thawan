const Form = () => {
  return (
    <>
      <form action="https://formsubmit.co/twnpsilva@gmail.com" method="POST">
        <input
          type="hidden"
          name="_next"
          value="https://thawan.netlify.app/sucess"
        />
        <input
          type="hidden"
          name="_autoresponse"
          value="I received your message, thank you for the contact and I will answer soon"
        />
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Your name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Your email" />
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
          ></textarea>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
