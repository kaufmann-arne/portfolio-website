import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap';
import res from './assets/scene.gltf?url';


document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
    element.addEventListener("mouseover", (e) => bounce(e.target));
});

function bounce(letter) {
    if (!letter.classList.contains("bounce")) {
        letter.classList.add("bounce");
        setTimeout(
            function () {
                letter.classList.remove("bounce");
            },
            1000
        );
    }
}


// Debug
const gltfLoader = new GLTFLoader();
let tl = gsap.timeline();



// Scene
const scene = new THREE.Scene()

//Size
const sizes = {
    width: window.innerWidth / 2,
    height: window.innerHeight /2
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.set(0,2,7)
camera.lookAt(0,0,0);

scene.add(camera)

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth / 2
    sizes.height = window.innerHeight / 2

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Canvas
const canvas = document.querySelector('#bg1');

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: false
});
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const technoTexture = new THREE.TextureLoader().load('#bg');
scene.background = technoTexture;



gltfLoader.load(res, (gltf) => {
    scene.add(gltf.scene);
    tl.to(gltf.scene.rotation, {y: 2000, duration: 10000});
    gltf.scene.position.set(0,0,0);

});


// Move Camera
// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;

//    camera.position.y = t * 0.01;
// }
// document.body.onscroll = moveCamera;
// moveCamera();


//Animation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  //controls.update();
}

animate();

