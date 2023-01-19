import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./scss/About.module.scss";
import CustomTab from "./CustomTab";

function AboutMe() {

  return (
    <div id="about" className={styles.about_me}>
      <Container>
        <Row>
          <Col lg={5} md={5}>
            <div className={styles.img_wrapper}>
              <picture>

                <img src="/images/e40cce27-9865-4d35-a28c-1f5cb0124a75.jpeg" alt="Nader Sayed" loading="lazy" />
              </picture>
            </div>
          </Col>
          <Col lg={7} md={7}>
            <div className={styles.info_wrapper}>
              <section className={styles.info_header}>
                <h2>About Me</h2>
                <p>
                  My name is Nader, I`m a videographer and have been working as a Graphic Designer for 3 years.
                  I am a UI/UX designer, I Like to make great and easy
                  designs for users through websites and applications
                  So that users could have an awesome experience..<br />
                  You can download my CV from this Link <a href="https://docs.google.com/file/d/1O98wPjOYV1yAoUkwBlt__3OInqv1Ln1P/edit?usp=docslist_api&filetype=msword" target="_blank" rel="noreferrer">here</a>
                </p>
              </section>
              <section className={styles.the_info}>
                <div className="info-nav-wrapper">
                  <div className={styles.tabs_section}>
                    <CustomTab />
                  </div>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
