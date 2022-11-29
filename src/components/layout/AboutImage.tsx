import styled from "styled-components";
import aboutImage from "../../resources/hammerboi.jpg";

const AboutImageRoot = styled.div`
  display: flex;
  display: flex;
  min-height: 100%;
  padding: 10%;
`;

const AboutImageContainer = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  background-color: black;
  color: white;
  opacity: 0.8;
  min-height: 40vh;
  max-height: 60vh;
  border-radius: 2em;
  padding-top: 2em;
`;

const AboutImageHolder = styled.div`
  display: block;
  min-width: 20em;
  max-width: 20em;
  max-height: 45vh;
  background-color: magenta;
  object-fit: contain;
`;

const AboutImageImg = styled.img`
  width: 100%;
  height: 100%;
`;

function AboutImage() {

  const imageSubtitle = "\"The pen might be mightier than the sword, BUT I HAVE A MUDDAFUCKIN HAMMER BITCHHH\" - Justin Loh"

  return (
    <AboutImageRoot>
      <AboutImageContainer>
        <AboutImageHolder>
          <AboutImageImg src={aboutImage} alt="Me" />
          <h4>{imageSubtitle}</h4>
        </AboutImageHolder>
      </AboutImageContainer>
    </AboutImageRoot>
  );
}

export default AboutImage;
