
import { JoinButton, Section } from "./HomePage.styled";

const HomePage = () => {
    return (
        <Section>
            <JoinButton to={"/register"} type="button">Join us</JoinButton>
        </Section >
    );
}
export default HomePage;