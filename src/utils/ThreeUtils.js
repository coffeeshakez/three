import * as THREE from "three";

let gridSize = 200;

let grid = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

var colors = ['#ff9aa2', 
              '#ffb7b2', 
              '#ffdac1', 
              '#e2f0cb', 
              '#b5ead7', 
              '#c7ceea', 
              '#dc9779'];

function getRandomColor(){
    var col = hexToRgb(colors[Math.floor(Math.random()*colors.length)]);
    var threecol = new THREE.Color("rgb("+col.r+","+col.g+","+col.b+")");
    return threecol;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

export function createSphere(params){
    let size = 1;
    let x;
    let y;
    let z;
    let randomPos;
    let texture;


    if(params){
         size = params.size ? params.size : 1;
         randomPos = params.randomPos ? params.randomPos : false;
         x = params.x;
         y = params.y;
         z = params.z;
         texture = params.texture;
    }
    
    let range = 20;
    let geometry = new THREE.SphereGeometry(size, 32, 32);
    const randColor = getRandomColor();
    let material = new THREE.MeshPhongMaterial({ shininess: 100 });
    let  sphere = new THREE.Mesh(geometry, material);

    
    
    material.map = texture;

// // load a resource
//     loader.load(
// 	// resource URL
// 	'',

// 	// onLoad callback
// 	function ( texture ) {
//         // in this example we create the material when the texture is loaded
//         material.map = texture;
// 	},

// 	// onProgress callback currently not supported
// 	undefined,

// 	// onError callback
// 	function ( err ) {
// 		console.error( 'An error happened.' );
// 	}
// );
//     // var material = new THREE.MeshBasicMaterial( { map: texture } );
    // const material  = new THREE.MeshPhongMaterial( {color: randColor, shininess: 90} );
    

    if(randomPos){
        sphere.position.set(range * (0.5 - Math.random()), range * (0.5 - Math.random()), -5 );
    }
    else{
        sphere.position.set(x, y, z);
    }
    
    return sphere;
} 

export function createSpheresInGrid(params, renderer){
    let gridSize = 6;
    let sphereSize = 20;
    let gridGutter = 3;
    let texture;

    //Texture 
    let loader = new THREE.TextureLoader();
    loader.crossOrigin = '';
    texture = loader.load('./sprekkjaglass.jpg');
    texture.anisotropy = renderer.getMaxAnisotropy();

    if(params){
        gridSize = params.gridSize ? params.gridSize : gridSize;
        sphereSize =  params.sphereSize ? params.sphereSize : sphereSize;
        gridGutter = params.gridGutter ? params.gridGutter : sphereSize;
        texture = params.texture;
    }

    let spheres = [];

    for (let i = 0; i < gridSize; i++) {
        for (let f = 0; f < gridSize; f++) {

            let sphere = createSphere({
                texture: texture,
                x: (i * (sphereSize * 2 + gridGutter * 2)) - (((sphereSize * 2 + gridGutter * 2) * gridSize) * 0.5 - (sphereSize + gridGutter)),
                y: (f * (sphereSize  * 2 + gridGutter * 2)) - (((sphereSize * 2 + gridGutter * 2) * gridSize) * 0.5 - (sphereSize + gridGutter)),
                z: -300,
                size: sphereSize });
            sphere.type = "target";
            spheres.push(sphere);
        }
    }

    return spheres;
} 

export default {createSpheresInGrid, createSphere};


