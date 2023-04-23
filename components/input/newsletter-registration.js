import  { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    const userEmail = emailRef.current.value;
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail }),
    }).then(res => {
      return res.json();
    }).then(res => {
      console.log('ASHUTOSH RESP RECEIVED - ', res);
    })
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
