import styled from "styled-components";
import { project } from "../../data/ExperienceData";

const ProjectRoot = styled.div`
  display: flex;
  width: 100%;
  min-height: 5em;
  flex-direction: column;
  align-items: center;
  background-color: #171617 ;
  margin: 0.5em 0 0.5em 0 ;
`;

const ProjectTitle = styled.div`
  display: flex;
  width: 97%;
  font-size: x-large;
  word-break: break-all ;
`;

const ProjectDescription = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: break;
  margin-top: 0.75em ;
`;

const ProjectLink = styled.a`
 text-decoration: none;
 &:hover {
    color: ${props => props.theme.secondary};
  }
`

type ProjectProps = {
  project: project;
};

function Project({ project }: ProjectProps) {
  return (
    <ProjectRoot>
      <ProjectTitle><ProjectLink href={project.link}>{project.name}</ProjectLink></ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
    </ProjectRoot>
  );
}

export default Project;
