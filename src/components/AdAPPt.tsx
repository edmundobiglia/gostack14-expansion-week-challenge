import React from "react";
import { ThemeProvider } from "styled-components";

import Hero from "../sections/Hero";
import Section2 from "../sections/Section2";
import Counter from "../sections/Counter";
import Section4 from "../sections/Section4";
import CodePoem from "../sections/CodePoem";
import Section6 from "../sections/Section6";
import Quizz from "../sections/Quizz";
import Footer from "../sections/Footer";

const theme = {
  colors: {
    purple: "#755fe6",
    yellow: "#f3f371",
    darkgrey: "#2a2c37",
    green: "#50fa7b",
    orange: "#ff9580",
    blue: "#80ffea",
    pink: "#ff80bf",
    white: "#ffffff",
    lightgrey: "#6272a4",
  },
};

const AdAPPt = React.memo(() => (
  <ThemeProvider theme={theme}>
    <Hero />
    <Section2 />
    <Counter />
    <Section4 />
    <CodePoem />
    <Section6 />
    <Quizz />
    <Footer />
  </ThemeProvider>
));

export default AdAPPt;
