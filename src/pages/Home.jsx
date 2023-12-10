import React from 'react'
// use as a wrapper for the rendering screen
import { Suspense } from 'react'
// allow us to use Canvas, which all 3D content will be in it
import { Canvas } from '@react-three/fiber'

import Loader from '../components/Loader'

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      {/* <div className=' absolute top-28 left-0 right-0 z-0 items-center justify-center'>
        Hi 
      </div> */}
      <Canvas 
      className='w-full h-screen bg-transparent'
      camera={{near:0.1,far:1000}}>
        <Suspense fallback={<Loader />}>

        </Suspense>

      </Canvas>

    </section>
  )
}

export default Home