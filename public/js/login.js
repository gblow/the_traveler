const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });


      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log(response.json);
        // throw new Error('Failed to log in.');
      }
    } catch (e) {
      console.error('Login error:', e);
      alert('Failed to log in. Please try again.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  // const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && password) {
    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        throw new Error('Failed to sign up.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to sign up. Please try again.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

