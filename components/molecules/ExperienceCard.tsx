import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";

import { Fade } from "react-reveal";
import Experience from "../../core/domain/Experience";

interface props {
  data: Experience;
}
const ExperienceCard = ({ data }: props) => {
  return (
    <Col lg="4">
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody className="">
            <img
              src={data.companylogo}
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
              alt={data.companylogo}
            />
            <CardTitle tag="h4" className="mb-2">
              {data.company}
            </CardTitle>
            <CardSubtitle tag="h5" className="mb-2">
              {data.role}
            </CardSubtitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <CardText tag="div" className="description my-3 text-left">
              {data.desc}
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
