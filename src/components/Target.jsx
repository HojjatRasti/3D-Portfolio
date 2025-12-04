
import { useGSAP } from '@gsap/react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useRef } from 'react'

const Target = (props) => {
  const { nodes, materials } = useGLTF('/models/target.glb')

  const targetRef = useRef()

  //animate the object
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <group {...props} dispose={null} ref={targetRef} >
      <group scale={0.02}>
        <group position={[7.224, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_arrow_red_0.geometry}
            material={materials.arrow_red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_target_white_0.geometry}
            material={materials.target_white}
          />
        </group>
        <group
          position={[101.754, 0.021, -0.037]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={130.856}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_arrow_red_0.geometry}
            material={materials.arrow_red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Gold_0.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/target.glb')

export default Target