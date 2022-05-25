import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./modules/Mountain";
import { Html } from "@react-three/drei";

function Section1() {
  return (
    (<>
      <section className="section1 data-scrollbar">
        <Canvas>
          <ambientLight />
          <Suspense fallback={null}>
            <Html  fullscreen>
              <div className="div-flex">
                <h1 className="titre-lanscape">lanscape</h1>
              </div>
            </Html>
            <Model/>
          </Suspense>
        </Canvas>
      </section>
    </>)
  );
}

export default Section1;
