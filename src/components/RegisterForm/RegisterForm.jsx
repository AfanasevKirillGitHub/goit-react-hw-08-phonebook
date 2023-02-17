import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';
import {
  RegisterFormStyled,
  RegisterInput,
  RegisterLabel,
} from './RegisterForm.styled';
import {
  SignIn,
  SignInLink,
  SignInWrapper,
} from 'components/LoginForm/LoginForm.styled';

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
    <RegisterFormStyled onSubmit={handleSubmit}>
      <RegisterLabel>
        Name
        <RegisterInput name="name" type="text" id="name" placeholder="Name" />
      </RegisterLabel>
      <RegisterLabel>
        Email
        <RegisterInput
          name="email"
          type="email"
          id="email"
          placeholder="email@gmail.com"
        />
      </RegisterLabel>
      <RegisterLabel>
        Password
        <RegisterInput
          name="password"
          type="password"
          id="password"
          placeholder="********"
        />
      </RegisterLabel>

      <SignInWrapper>
        <SignIn type="submit">Sign Up</SignIn>
        <SignInLink href="/goit-react-hw-08-phonebook/login">
          If you have account ? Sign In...
        </SignInLink>
      </SignInWrapper>
    </RegisterFormStyled>
  );
};
