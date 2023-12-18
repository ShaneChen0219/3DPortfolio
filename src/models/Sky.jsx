import { useGLTF } from '@react-three/drei'
import React from 'react'

import skyScene from '../assets/3d/sky.glb'
const Sky = () => {
    const sky = useGLTF(skyScene);
  return (
    // The background have to rotate with our island
    // So we used another 3d object
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky