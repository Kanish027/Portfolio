import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm Kanish Mohariya, an IT graduate with MERN stack expertise.
        Experienced in web development through an internship at TrickySys IT
        Solutions and specialized training with Internshala Trainings.
        Passionate about crafting dynamic digital experiences.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:kanishmohariya1@gmail.com")}
      >
        Hire Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
