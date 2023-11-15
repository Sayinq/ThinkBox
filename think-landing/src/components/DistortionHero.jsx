import * as THREE from "three"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, useGLTF } from "@react-three/drei"
import { EffectComposer, N8AO, SSAO } from "@react-three/postprocessing"
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier"
import { Tooltip } from "@nextui-org/react"

import myHDR from "../assets/adamsbridge.hdr";
import capObject from '../assets/cap.glb';
import thinkLogo from '../assets/think_box_logo.png';
import githubLogo from '../assets/logo-git.svg';
import webflowLogo from '../assets/logo-webflow.svg';
import behanceLogo from '../assets/logo-behance.svg';

THREE.ColorManagement.legacyMode = false
const baubleMaterial = new THREE.MeshLambertMaterial({ color: "#f0f08d", emissive: "white" })
const capMaterial = new THREE.MeshStandardMaterial({ metalness: 0.75, roughness: 0.15, color: "#3d3d27", emissive: "#D2D2D2", envMapIntensity: 20 })
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28)
const baubles = [...Array(50)].map(() => ({ scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)] }))

function Bauble({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread }) {
  const { nodes } = useGLTF(capObject)
  const api = useRef()
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiply({ x: -50 * delta * scale, y: -150 * delta * scale, z: -50 * delta * scale }),
    )
  })
  return (
    <RigidBody linearDamping={0.75} angularDamping={0.15} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false} dispose={null}>
      <BallCollider args={[scale]} />
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
      <mesh castShadow receiveShadow scale={scale} geometry={sphereGeometry} material={baubleMaterial} />
      <mesh castShadow scale={2.5 * scale} position={[0, 0, -1.8 * scale]} geometry={nodes.Mesh_1.geometry} material={capMaterial} />
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => {
    vec.lerp({ x: (mouse.x * viewport.width) / 2, y: (mouse.y * viewport.height) / 2, z: 0 }, 0.2)
    ref.current?.setNextKinematicTranslation(vec)
  })
  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

export const DistortionHero = () => (
  <section
    id="hero"
    className="relative xl:w-[50%] w-screen xl:h-[200vh] h-[500px]">
      <div
      id="hero-sticky"
      className="xl:fixed flex flex-col gap-y-4 p-4 xl:w-[50%] xl:h-screen h-full w-screen">

      <div className="flex w-full h-auto justify-center items-center">
        <img src={thinkLogo} />
      </div>
        <Canvas
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
          camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
          <ambientLight intensity={1} />
          <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="green" castShadow shadow-mapSize={[512, 512]} />
          <directionalLight position={[0, 5, -4]} intensity={4} />
          <directionalLight position={[0, -15, -0]} intensity={4} color="#f0f08d" />
          <Physics gravity={[0, 0, 0]}>
            <Pointer />
            {baubles.map((props, i) => <Bauble key={i} {...props} />) /* prettier-ignore */}
          </Physics>
          <Environment files={myHDR} />
          <EffectComposer disableNormalPass multisampling={0}>
            <N8AO color="red" aoRadius={2} intensity={1} />
            <SSAO />
          </EffectComposer>
        </Canvas>
        <div className="flex flex-row justify-center items-center md:gap-x-12 gap-x-4 absolute w-full h-24 bottom-0 left-0 z-50">
          <Tooltip content="Webflow" color="primary" >
            <a href="https://www.webflow.com">
              <img src={webflowLogo} className="md:w-14 md:h-14 w-8 h-8" />
            </a>
          </Tooltip>
          <Tooltip content="Github" color="primary" >
            <a href="https://www.github.com">
              <img src={githubLogo} className="md:w-14 md:h-14 w-8 h-8" />
            </a>
          </Tooltip>
          <Tooltip content="Behance" color="primary" >
            <a href="https://www.behance.com">
              <img src={behanceLogo} className="md:w-14 md:h-14 w-8 h-8" />
            </a>
          </Tooltip>
        </div>
      </div>
    </section>
)