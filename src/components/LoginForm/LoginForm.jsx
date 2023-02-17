import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authThunk';
import Box from 'components/Box/Box';
import { LoginFormStyled, LoginInput, LoginLabel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} as="form">
      <LoginLabel>
        Email
        <LoginInput
          name="email"
          type="email"
          id="email"
          placeholder="email@gmail.com"
        />
      </LoginLabel>
      <LoginLabel>
        Password
        <LoginInput
          name="password"
          type="password"
          id="password"
          placeholder="********"
        />
      </LoginLabel>

      <Box>
        <button type="submit">Sign In</button>
        <a href="/goit-react-hw-08-phonebook/register">
          "Don't have an account? Sign Up"
        </a>
      </Box>
    </LoginFormStyled>
  );
};
