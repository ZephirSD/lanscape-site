/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: vertigocrayon (https://sketchfab.com/vertigocrayon)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/peaceful-mountain-village-d2d34e3fb0ef46f088b4b12a994a3a87
title: Peaceful mountain village
*/

import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import url from '../../assets/model3D/peaceful_mountain_village/mountain.gltf';


export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(url);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };  
  return (
    useEffect(() =>{
      window.addEventListener('scroll',handleScroll)
      // console.log(scrollPosition);
    }),
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
        <group rotation={[90, 34, -0]} position={[0, 5, (-20 + (scrollPosition * 0.05))]}>
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
useGLTF.preload(url)
