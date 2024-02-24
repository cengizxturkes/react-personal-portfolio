import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,projectLink }) => {
  return (
    
    <Col size={12} sm={6} md={4}>
    <a href={projectLink} target="_blank" rel="noopener noreferrer">

      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <h4 style={{ color: 'white' }}>Projects</h4>

          <span style={{ color: 'white' }}>{description}</span>
        </div>
      </div>
    </a>

    </Col>
  )
}
