const ContactUs = () => {
  return (
    <section className='contact-us'>
      <form className='contact-us__form'>
        <div className='contact-us__input-group'>
          <input type='text' id='name' />
          <label htmlFor='name' className='t-cap'>
            your name
          </label>
        </div>
        <div className='contact-us__input-group'>
          <input type='text' id='email' />
          <label htmlFor='email' className='t-cap'>
            your email
          </label>
        </div>
        <div className='contact-us__input-group'>
          <textarea name='' rows='5' id='message'></textarea>
          <label htmlFor='message' className='t-cap'>
            your message
          </label>
        </div>
        <button className='contact-us__btn'>Send a message</button>
      </form>
    </section>
  );
};

export default ContactUs;
