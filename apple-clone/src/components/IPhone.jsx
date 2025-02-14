import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function ModelComponent({ modelRef, item }) {
  const { nodes, materials } = useGLTF("/models/scene.glb");
  const texture = useTexture(item.img);
  const groupRef = useRef();

  useEffect(() => {
    if (!materials) return;

    const lockedMaterials = new Set([
      "zFdeDaGNRwzccye",
      "ujsvqBWRMnqdwPx",
      "hUlRcbieVuIiOXG",
      "jlzuBkUzuJqgiAK",
      "xNrofRCqOXXHVZt",
    ]);

    Object.entries(materials).forEach(([name, material]) => {
      if (!lockedMaterials.has(name) && material) {
        material.color = new THREE.Color(item.color[0]);
        material.needsUpdate = true;
      }
    });
  }, [materials, item]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} dispose={null} scale={0.16}>
      {Object.entries(nodes).map(([key, node]) =>
        node.isMesh ? (
          <mesh key={key} castShadow receiveShadow geometry={node.geometry} material={node.material}>
            {node.material && <meshStandardMaterial roughness={1} map={texture} />}
          </mesh>
        ) : null
      )}
    </group>
  );
}

export default ModelComponent;

useGLTF.preload("/models/scene.glb");
