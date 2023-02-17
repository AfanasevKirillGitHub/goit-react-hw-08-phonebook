import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authThunk';
import {
  LoginFormStyled,
  LoginInput,
  LoginLabel,
  SignIn,
  SignInLink,
  SignInWrapper,
} from './LoginForm.styled';

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
    <LoginFormStyled onSubmit={handleSubmit}>
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

      <SignInWrapper>
        <SignIn type="submit">Sign In</SignIn>
        <SignInLink href="/goit-react-hw-08-phonebook/register">
          Don't have account?
        </SignInLink>
      </SignInWrapper>
    </LoginFormStyled>
  );
};
