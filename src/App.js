import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Center, Loader } from "@react-three/drei";
import { Model, Customizer } from "./Model";

export default function Viewer() {
  const ref = useRef();

  return (
    <>
      {" "}
      <Customizer />
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 90, position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Stage
            controls={ref}
            preset="rembrandt"
            intensity={0.8}
            environment="city"
          >
            <Center>
              <Model position={[0, 0, 0]} />
            </Center>
          </Stage>
        </Suspense>
        <OrbitControls
          ref={ref}
          target={[0, 1, 0]}
          enablePan={true}
          maxPolarAngle={Math.PI / 2}
          /* minPolarAngle={Math.PI / 2} */
          enableZoom={true}
          autoRotate={false}
        />
      </Canvas>
      <Loader />
    </>
  );
}
