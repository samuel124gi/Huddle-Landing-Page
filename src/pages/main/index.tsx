import {
  Heading,
  ImageContainer,
  InnerContainer,
  MainContainer,
  TextContainer,
  Text,
  Button,
  ImagesContainer,
  IllustrationContainer,
  TopTextContainer,
  Footer,
  IconContainer,
} from "./styles";
import Background from "../../assets/icons/bg-desktop.svg";
import Illustration from "../../assets/icons/illustration.svg";
import Logo from "../../assets/icons/logo.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";

const Main = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <Background />
      </ImageContainer>
      <InnerContainer>
        <ImagesContainer>
          <Logo />
          <IllustrationContainer>
            <Illustration />
          </IllustrationContainer>
        </ImagesContainer>
        <TextContainer>
          <TopTextContainer>
            <Heading>
              Build The Community <br /> Your Fans Will Love
            </Heading>
            <Text>
              Huddle re-imagines the way we build communities. You have <br /> a
              voice, but so does your audience. Create connections with <br />{" "}
              your users as you engage in genuine discussion.
            </Text>
          </TopTextContainer>
          <Button>Register</Button>
          <Footer>
            <IconContainer>
              <Facebook />
            </IconContainer>
            <IconContainer>
              <Twitter />
            </IconContainer>
            <IconContainer>
              <Instagram />
            </IconContainer>
          </Footer>
        </TextContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Main;
