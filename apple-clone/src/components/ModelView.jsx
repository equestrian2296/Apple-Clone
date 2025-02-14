import React, { useRef, useEffect } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import gsap from "gsap";
import ModelComponent from "./IPhone"; 

const ModelView = ({ item }) => {
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      gsap.to(modelRef.current.rotation, {
        y: Math.PI * 2,
        duration: 5,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        
        <ModelComponent modelRef={modelRef} item={item} />

        <OrbitControls enableZoom={false} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ModelView;
