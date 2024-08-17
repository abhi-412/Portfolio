import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import SkyScene from "../assets/3d/sky.glb"
import { useFrame } from '@react-three/fiber';

const Sky = ({isRotating,...props})=> {
  const sky = useGLTF(SkyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });
  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky;