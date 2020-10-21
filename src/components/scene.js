import React from "react"
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { createDirectionalLight } from "../utils/LightUtils";
import { createSphere, createSpheresInGrid } from "../utils/ThreeUtils";
import "./layout.css";

class Scene extends React.Component {

constructor(props){
    super(props);
    this.state = {
      points: 0,
      count: 0,
      background: 200,
    }

    this.handleStart =  this.handleStart.bind(this);
    this.getRandomSphere = this.getRandomSphere.bind(this);
}

  componentDidMount() {
    this.scene = new THREE.Scene();
    //camera
    this.camera = new THREE.PerspectiveCamera(75, this.mount.offsetWidth/this.mount.offsetHeight, 0.1, 1000);
    this.camera.position.set(0, 0, -10);


    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    
    this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    this.mount.appendChild(this.renderer.domElement)

    let loader = new THREE.TextureLoader();
    loader.crossOrigin = '';
    let texture = loader.load('./wall.jpg');

    var geometry = new THREE.BoxGeometry(1000, 400, 1000, 10, 5, 10);
    var material = new THREE.MeshBasicMaterial({map: texture, fog: true}); 

    /* Cause the material to be visible for inside and outside */
    material.side = THREE.BackSide; 

    var cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    this.scene.background = new THREE.Color(0XFFFFFF);

    var ambientLight = new THREE.AmbientLight( 0x404040 );
    var hemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );

    const directionalLight = createDirectionalLight();
    
    this.scene.add( directionalLight );
    this.scene.add( ambientLight );
    this.scene.add( hemisphereLight );

    this.spheres = createSpheresInGrid();
    // this.spheres.forEach(cube => {
    //     this.scene.add(cube)    
    // });

    //Add 3 random 
    
    this.scene.add(this.getRandomSphere());
    this.scene.add(this.getRandomSphere());
    this.scene.add(this.getRandomSphere());
    
    this.camera.position.z = 100;


    var reticle = new THREE.Mesh(
      new THREE.RingBufferGeometry( 0.2 * 0.1, 0.2 * 0.001, 64),
      new THREE.MeshBasicMaterial( {color: 0x00FF00, side: THREE.DoubleSide })
         );
   reticle.position.z = -5;
   
   reticle.lookAt(this.camera.position);
   
   this.camera.add(reticle);

   this.scene.add(this.camera);

    let controls = new PointerLockControls( this.camera, this.mount );
    let raycaster = new THREE.Raycaster();
    

// add event listener to show/hide a UI (e.g. the game's menu)
    this.mount.addEventListener( 'click', function(event, scope) {

        controls.lock();
        raycaster.setFromCamera( new THREE.Vector2, this.camera );

        // calculate objects intersecting the picking ray
        var intersects = raycaster.intersectObjects( this.scene.children );

        if(intersects.length > 0){
          if(intersects[0].object.type == "target"){
            this.scene.remove(intersects[0].object);
            this.spheres.push(intersects[0].object) 
            this.scene.add(this.getRandomSphere()); 

            this.setState(prevState =>{
              return{
                   ...prevState,
                   points : prevState.points + 1
              }
           })

          }
        }

    }.bind(this), false );

    controls.addEventListener( 'lock', function () {

        // menu.style.display = 'none';
        console.log("Now controls are locked");
    } );

    controls.addEventListener( 'unlock', function () {

        // menu.style.display = 'block';
        console.log("controls are now unlocked");
        controls.unlock();

    } );

    this.animate = function () {
      requestAnimationFrame(this.animate.bind(this));

      this.renderer.render(this.scene, this.camera);
      this.setState(prevState =>{
        return{
             ...prevState,
             count : prevState.count +1
        }
     })
    }

    this.animate()

    window.addEventListener('resize', this.onWindowResize.bind(this), false)
  }

  onWindowResize() {
    if (this.mount) {
      this.camera.aspect = this.mount.offsetWidth / this.mount.offsetHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    }
  }

  handleStart(){

  }

  getRandomSphere(){
    let sphere = this.spheres.splice(Math.floor(Math.random() * this.spheres.length), 1);
    return sphere[0];
  }

  render() {
    return (
      <>
        <div className="test" ref={ref => (this.mount = ref)} style={{ width: `100vw`, height: `100vh` }}></div>
        <div className="points">{this.state.points}
        </div>
        <div className="overlay"> 
            
        </div>
      </>
    )
  }
}

export default Scene