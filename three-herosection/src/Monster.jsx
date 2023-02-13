import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Float } from '@react-three/drei';
import React, { useEffect, useRef } from "react";

export function Monster() {
    const model = useRef();
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/monster.glb");
    useEffect(() => {
        model.current = gltf.scenes[0];
    }, [gltf]);

    return (
        <Float scale={[2.9, 2.9, 2.9]} position={[2.10, 5.3, 0]} rotation={[0, 0, 0]}
            rotationIntensity={0.2}
            floatIntensity={0} >
            <primitive object={gltf.scene} />

        </Float>
    )
}