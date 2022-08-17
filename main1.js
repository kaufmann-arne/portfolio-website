import * as THREE from 'three'
import gsap from 'gsap'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'
import style from './style.css'


const canvas = document.querySelector('#bg')
const container = document.querySelector('#planet')
const scene = new THREE.Scene()
;

const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000)
camera.position.set(0,0,9)
camera.lookAt(0,0,0);


//Renderer
const renderer = new THREE.WebGLRenderer({
    alpha: true,
  antialias: true, 
  canvas: canvas
});
renderer.setSize(container.offsetWidth , container.offsetHeight)
renderer.setPixelRatio(window.devicePixelRatio)



const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        globeTexture: {
            value: new THREE.TextureLoader().load('./assets/qwertz.jpeg')
        }
    }
}))

const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
}))

atmosphere.scale.set(1.1, 1.1, 1.1);
scene.add(atmosphere);

const group = new THREE.Group()
group.add(sphere)
scene.add(group)


addEventListener('mousemove', () => {
    mouse.x = (event.clientX /innerWidth) * 2 - 1
    mouse.y = (event.clientY /innerHeight) * 2 - 1
})

const mouse = {
    x: 0,
    y: 0
}


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphere.rotation.y += 0.0013
  gsap.to(group.rotation, {x: mouse.y * 0.5, y: mouse.x * 0.5, duration: 2})

}

animate();




