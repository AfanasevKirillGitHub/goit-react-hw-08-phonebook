import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';
import Box from 'components/Box/Box';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box onSubmit={handleSubmit} as="form">
      <label>
        Name
        <input name="name" type="text" id="name" placeholder="Name" />
      </label>
      <label>
        Email
        <input
          name="email"
          type="email"
          id="email"
          placeholder="email@gmail.com"
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          id="password"
          placeholder="********"
        />
      </label>

      <Box>
        <button type="submit">Sign Up</button>
        <a href="/goit-react-hw-08-phonebook/login">
          Already have an account? Sign in
        </a>
      </Box>
    </Box>
  );
};
