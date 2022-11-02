import { Container, Row } from "reactstrap";
import ExperienceCard from "../../components/ExperienceCard";
import { useEffect, useState } from "react";
import Experience from "../../core/domain/Experience";
import GetExperienceUseCase from "../../core/application/useCases/Experience/getExperience/getExperienceUseCase";

const Experience = () => {
  const [experience, setExperience] = useState<Experience[]>([]);

  useEffect(() => {
    const experienceData = new GetExperienceUseCase().execute();
    setExperience(experienceData);
  }, []);

  return (
    experience && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Experience</h4>
            </div>
          </div>
          <Row className="row-grid align-items-start">
            {experience.map((data, i) => {
              return <ExperienceCard key={i} data={data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Experience;
