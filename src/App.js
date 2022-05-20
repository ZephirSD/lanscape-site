import AOS from "aos";
import Scrollbar from 'smooth-scrollbar';
import { useEffect } from "react";
import Section1 from "./composants/Section1";
import Section2 from "./composants/Section2";
import Section3 from "./composants/Section3";
import './style/style.scss';
function App() {
  return (
    useEffect(() => {
      AOS.init();
      AOS.refresh();
      Scrollbar.initAll();
    }),
    (
      <>
        <Section1/>
        <Section2/>
        <Section3/>
      </>
    )
  );
}

export default App;
