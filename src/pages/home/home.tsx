import { Canvas } from "@react-three/fiber";
import Box3D from "../../components/models/sample-box/box3D";

//TODO check if needed to handle this warning:
//  - THREE.WebGLRenderer: Context Lost.
const Home = () => {
  return (
    <div>
      <h3>home component</h3>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box3D position={[-1.2, 0, 0]} />
        <Box3D position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Home;
