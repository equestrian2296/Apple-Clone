import { useRef, useEffect } from "react";
import { animateWithGsapTimeline } from "./path/to/your/utils";

const MyComponent = () => {
  const rotationRef = useRef(new THREE.Group()); // Initialize with a THREE.Group
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    animateWithGsapTimeline(
      timeline.current,
      rotationRef,
      2 * Math.PI, // Rotate 360 degrees
      "#element1",
      "#element2",
      { x: 100, duration: 2 }
    );
  }, []);

  return (
    <div>
      <div id="element1">Element 1</div>
      <div id="element2">Element 2</div>
      <group ref={rotationRef}>
        {/* Your 3D model or other elements */}
      </group>
    </div>
  );
};

export default MyComponent;