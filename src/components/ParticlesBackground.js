
import Particles from "react-tsparticles";
import Particlesconfig from "./config/Particle-config";
const ParticlesBackground =()=> {
    return (
        <>
       <Particles params={Particlesconfig}></Particles>
        </>
    )
}
export default ParticlesBackground;