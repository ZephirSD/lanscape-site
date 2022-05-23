import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Section1 from "./composants/Section1";
import Section2 from "./composants/Section2";
import Section3 from "./composants/Section3";
import './style/style.scss';
import Section4 from "./composants/Section4";

function App() {
  return (
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }),
    (
      <>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </>
    )
  );
}

export default App;
