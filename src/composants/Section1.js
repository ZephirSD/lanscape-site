import url from "../assets/model3D/peaceful_mountain_village/mountain.gltf";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(url);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
        <group rotation={[90, 34, -0]} position={[0, 0, -20]}>
          <group position={[0, -0.04, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.SM_Mounain_Cloud_0.geometry}
                material={materials.Cloud}
              />
            </group>
          </group>
          <group position={[0, -0.04, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.SM_Clouds_2_0.geometry}
                material={materials.material}
              />
            </group>
          </group>
          <group position={[0, -0.04, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.SM_Houses_1_0.geometry}
                material={materials.material_2}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function Section1() {
  return (
    <>
      <section className="section1 data-scrollbar">
        {/* <div className="div-flex">
          <h1 className="titre-lanscape">lanscape</h1>
        </div> */}
        <Canvas>
          <ambientLight />
          <Suspense fallback={null}>
            {/* <h1 className="titre-lanscape">lanscape</h1> */}
            <Model />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
}

export default Section1;
