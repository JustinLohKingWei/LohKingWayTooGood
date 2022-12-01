import styled from "styled-components";
import aboutImage from "../../resources/hammerboi.jpg";

const AboutImageRoot = styled.div`
  display: flex;
  
  height: 37rem;
  padding: 10% 10% 0 10% ;
  justify-content: center;
`;

const AboutImageContainer = styled.div`
  display: flex;
  min-width: 30rem;
  justify-content: center;
  background-color: black;
  color: white;
  opacity: 0.8;
  max-height: 33rem;
  border-radius: 2em;
  padding-top: 2em;
`;

const AboutImageHolder = styled.div`
  display: block;
  min-width: 20em;
  max-width: 20em;
  max-height: 25rem;
  object-fit: contain;
`;

const AboutImageImg = styled.img`
  width: 100%;
  height: 100%;
`;

function AboutImage() {

  const imageSubtitle = "\"The pen is mightier than the sword, BUT I HAVE A MUDDAFUCKIN HAMMER BITCHHH\" - Justin Loh"

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
