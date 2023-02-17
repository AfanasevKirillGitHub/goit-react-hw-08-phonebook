import { useAuth } from 'hooks/useAuth';
import { JoinButton, Section } from './HomePage.styled';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Section>
      {!isLoggedIn && (
        <JoinButton to={'/register'} type="button">
          Join us
        </JoinButton>
      )}
    </Section>
  );
};
export default HomePage;
