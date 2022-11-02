import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const EducationCard = ({ education }: any) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <img
                src={education.logo}
                style={{
                  objectFit: "cover",
                  left: 0,
                  right: 0,
                  top: "7rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "8rem",
                  height: "8rem",
                  borderRadius: "50%",
                }}
                className="shadow mb-3"
              />
              <h5 className="text-info">{education.schoolName}</h5>
              <h6>{education.subHeader}</h6>
              <Badge color="info" className="mr-1">
                {education.duration}
              </Badge>
              {education.grade && (
                <Badge color="primary" className="mr-1">
                  {education.grade}
                </Badge>
              )}
              <p className="description mt-3">{education.desc}</p>
              <ul>
                {education.descBullets
                  ? education.descBullets.map((desc: any) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
