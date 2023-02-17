import { useAuth } from 'hooks/useAuth';
import { JoinButton, JoinWrapper, Section } from './HomePage.styled';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Section>
      {!isLoggedIn && (
        <JoinWrapper>
          <JoinButton to={'/register'} type="button">
            Join us
          </JoinButton>
        </JoinWrapper>
      )}
    </Section>
  );
};
export default HomePage;
