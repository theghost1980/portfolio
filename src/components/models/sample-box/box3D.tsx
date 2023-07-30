import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

//TODO docs: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
//  vite docs:https://vitejs.dev/guide/
//  router comp declarative: https://blog.logrocket.com/react-router-v6-guide/
//  original/last repo: https://gitlab.com/saturnoman/portfolio/-/blob/master/src/images/filtered.png?ref_type=heads

const Box3D = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box3D;
