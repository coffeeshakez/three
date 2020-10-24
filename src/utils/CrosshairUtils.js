import * as THREE from "three";
  
//   var reticle = new THREE.Mesh(

  //     new THREE.RingBufferGeometry( 0.2 * 0.1, 0.2 * 0.001, 64),
  //     new THREE.MeshBasicMaterial( {color: 0x00FF00, side: THREE.DoubleSide })
  //        );
  //  reticle.position.z = -5;
   
  //  reticle.lookAt(this.camera.position);

  export function createCrossHair(camera){
    var material = new THREE.LineBasicMaterial({ color: 0x00FF00 });

    // crosshair size
    var x = 0.01, y = 0.01;
    
    var geometry = new THREE.Geometry();
    
    // crosshair
    geometry.vertices.push(new THREE.Vector3(0, y, 0));
    geometry.vertices.push(new THREE.Vector3(0, -y, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0, 0));
    geometry.vertices.push(new THREE.Vector3(x, 0, 0));    
    geometry.vertices.push(new THREE.Vector3(-x, 0, 0));
    
    var crosshair = new THREE.Line( geometry, material );
    
    // place it in the center
    var crosshairPercentX = 50;
    var crosshairPercentY = 50;
    var crosshairPositionX = (crosshairPercentX / 100) * 2 - 1;
    var crosshairPositionY = (crosshairPercentY / 100) * 2 - 1;
    
    crosshair.position.x = crosshairPositionX * camera.aspect;
    crosshair.position.y = crosshairPositionY;
    
    crosshair.position.z = -0.3;
    
    return crosshair;

  }

  export default {createCrossHair};
  