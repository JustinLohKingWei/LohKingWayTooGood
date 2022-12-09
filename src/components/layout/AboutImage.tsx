import styled from "styled-components";
import aboutImage from "../../resources/hammerboi.jpg";
import { AboutProfile } from "../../data/AboutData";

const AboutImageRoot = styled.div`
  display: flex;
  height: 37rem;
  padding-top: 10%; 
  justify-content: center;
  max-width: 100%;
`;

const AboutImageContainer = styled.div`
  display: flex;
  min-width: 5em;
  width: 30em;
  justify-content: center;
  background-color: black;
  color: #ffbe94;
  opacity: 0.9;
  max-height: 33em;
  border-radius: 2em;
  padding-top: 2em;
`;

const AboutImageHolder = styled.div`
  display: block;
  min-width: 10em ;
  width: 20em;
  max-height: 25em;
  object-fit: contain;
`;

const AboutImageImg = styled.img`
  width: 100%;
  height: 100%;
`;

function AboutImage() {
  return (
    <AboutImageRoot>
      <AboutImageContainer>
        <AboutImageHolder>
          <AboutImageImg src={aboutImage} alt="Me" />
          <h4>{AboutProfile.imageSubtitle}</h4>
        </AboutImageHolder>
      </AboutImageContainer>
    </AboutImageRoot>
  );
}

export default AboutImage;
