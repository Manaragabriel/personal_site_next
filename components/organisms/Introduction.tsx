import React, { useEffect, useState } from "react";

import { Button, Container, Row, Col } from "reactstrap";

import GreetingLottie from "../../components/DisplayLottie";
import Image from "next/image";
import SocialLinks from "../molecules/SocialLinks";
import Greeting from "../../core/domain/Greeting";
import GetGreetingUseCase from "../../core/application/useCases/Greeting/getGreeting/getGreetingUseCase";

const Introduction = () => {
  const [greeting, setGreeting] = useState<Greeting>();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    const greetingsData = new GetGreetingUseCase().execute();
    setGreeting(greetingsData);
  }, []);
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">
                    {greeting?.title + " "}
                  </h1>
                  <p className="lead text-white">{greeting?.description}</p>
                  <SocialLinks />
                  <div className="btn-wrapper my-4">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                      color="default"
                      href={greeting?.resumeLink}
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-file" />
                      </span>
                      <span className="btn-inner--text">Get My Resume</span>
                    </Button>
                  </div>
                </Col>
                <Col
                  lg="6"
                  className="d-flex justify-content-center align-items-center"
                >
                  <Image
                    src="/img/manara.jpg"
                    alt="Gabriel Manara"
                    width={200}
                    height={200}
                    style={{ borderRadius: "100%" }}
                  />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew"></div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Introduction;
