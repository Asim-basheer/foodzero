import Button from './Button';

const ContactUs = () => {
  return (
    <section className='contact-us'>
      <form className='contact-us__form'>
        <div className='contact-us__input-gruop'>
          <label htmlFor='' className='t-cap'>
            user name
          </label>
          <input type='text' />
        </div>
        <div className='contact-us__input-gruop'>
          <label htmlFor='' className='t-cap'>
            user name
          </label>
          <input type='text' />
        </div>
        <div className='contact-us__input-gruop'>
          <label htmlFor='' className='t-cap'>
            user name
          </label>
          <textarea name='' rows='40'></textarea>
        </div>
        <Button>send message</Button>
      </form>
    </section>
  );
};

export default ContactUs;
