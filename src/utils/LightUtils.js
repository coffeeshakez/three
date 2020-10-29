import * as THREE from "three";


export function createAmbientLight(){
    

}

export function createDirectionalLight(){
    const directionalLight = new THREE.DirectionalLight();
    directionalLight.position.set(0, 10, 200);
    directionalLight.castShadow = true;
    
    directionalLight.distance = 1000;
    directionalLight.intensity = 0.1;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.mapSize.width = 1024;
    return directionalLight;
}

export default { createDirectionalLight };