import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//scene
const scene = new THREE.Scene();
//background texture loader 
const bgtexture = new THREE.TextureLoader().load('./textures/2k_stars_milky_way.jpg');
scene.background = bgtexture;
//texture loader
 const suntexture = new THREE.TextureLoader().load('./textures/8k_sun.jpg');
 const mercurytexture = new THREE.TextureLoader().load('./textures/8k_mercury.jpg');
    const venustexture = new THREE.TextureLoader().load('./textures/8k_venus_surface.jpg');
    const earthtexture = new THREE.TextureLoader().load('./textures/8k_earth_daymap.jpg');
    const marstexture = new THREE.TextureLoader().load('./textures/8k_mars.jpg');
    const jupitertexture = new THREE.TextureLoader().load('./textures/8k_jupiter.jpg');
    const saturntexture = new THREE.TextureLoader().load('./textures/8k_saturn.jpg');
    const uranustexture = new THREE.TextureLoader().load('./textures/2k_uranus.jpg');
    const neptunetexture = new THREE.TextureLoader().load('./textures/2k_neptune.jpg');
    const moontexture = new THREE.TextureLoader().load('./textures/8k_moon.jpg');
//camera
const camera = new THREE.PerspectiveCamera (35 , window.innerWidth/window.innerHeight , 0.1 , 1000);
camera.position.z =  15;
//canva
const canva = document.getElementById('myCanvas');
//renerer
const renderer = new THREE. WebGLRenderer({canvas: canva , antialias: true});
renderer.setSize(window.innerWidth , window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
    //geometry
     const geometry = new THREE.SphereGeometry(1 , 64 , 64);
     //material
     const sunmaterial = new THREE.MeshBasicMaterial({ map: suntexture });
const mercurymaterial = new THREE.MeshStandardMaterial({ map: mercurytexture });
const venusmaterial = new THREE.MeshStandardMaterial({ map: venustexture });
const earthmaterial = new THREE.MeshStandardMaterial({ map: earthtexture });
const marsmaterial = new THREE.MeshStandardMaterial({ map: marstexture });
const jupitermaterial = new THREE.MeshStandardMaterial({ map: jupitertexture });
const saturnmaterial = new THREE.MeshStandardMaterial({ map: saturntexture });
const uranusmaterial = new THREE.MeshStandardMaterial({ map: uranustexture });
const neptunematerial = new THREE.MeshStandardMaterial({ map: neptunetexture });
const moonmaterial = new THREE.MeshStandardMaterial({map: moontexture});
const saturnringmaterial = new THREE.MeshBasicMaterial({map: saturnringtexture , side: THREE.DoubleSide , transparent: true});
const uv = ringgeometry.attributes.uv;
for (let i = 0; i < uv.count; i++) { 
    ringuv.fromBufferAttribute(uv, i);
    uv.setXY(i, ringuv.x, 1 - ringuv.y);
}
     // mesh
        const sun = new THREE.Mesh(geometry , sunmaterial);
        const mercury = new THREE.Mesh(geometry , mercurymaterial);
        const venus = new THREE.Mesh(geometry , venusmaterial);
        const earth = new THREE.Mesh(geometry , earthmaterial);
        const mars = new THREE.Mesh(geometry , marsmaterial);
        const jupiter = new THREE.Mesh(geometry , jupitermaterial);
        const saturn = new THREE.Mesh(geometry , saturnmaterial);
        const uranus = new THREE.Mesh(geometry , uranusmaterial);
        const neptune = new THREE.Mesh(geometry , neptunematerial);
        const moon = new THREE.Mesh(geometry , moonmaterial);
        //set positon
    mercury.position.x = 4;
    venus.position.x = 7;
    earth.position.x = 10;
    mars.position.x = 13;
    jupiter.position.x = 16;
    saturn.position.x = 19;
    uranus.position.x = 22;
    neptune.position.x = 25;
    moon.position.x = 2;
        //set scale
    sun.scale.set(3 , 3 , 3);
    mercury.scale.set(0.4 , 0.4 , 0.4);
    venus.scale.set(0.7 , 0.7 , 0.7);
    earth.scale.set(0.7 , 0.7 , 0.7);
    mars.scale.set(0.4 , 0.4 , 0.4);
    jupiter.scale.set(1.5 , 1.5 , 1.5); 
    saturn.scale.set(1 , 1 , 1);
    uranus.scale.set(0.8 , 0.8 , 0.8);
    neptune.scale.set(0.8 , 0.8 , 0.8);
    moon.scale.set(0.2 , 0.2 , 0.2);
//add planet to scene
scene.add(sun);
scene.add(mercury);
scene.add(venus);
scene.add(earth);
scene.add(mars);
scene.add(jupiter);
scene.add(saturn);
scene.add(uranus);
scene.add(neptune);
earth.add(moon);
//light
const sunLight = new THREE.PointLight(0xffffff, 2, 100);
sunLight.position.set(0, 0, 0); // Position at the sun
scene.add(sunLight);

const ambientLight = new THREE.AmbientLight(0x3333);

scene.add(ambientLight);
//orbit controls
const controls = new OrbitControls(camera , renderer.domElement);
controls.enableDamping = true;
controls.enableRotate = true;
controls.enableZoom = true;
//clock 
const clock = new THREE.Clock();
// animate
window.addEventListener('resize' , () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
    earth.rotation.y += 0.01;
    earth.position.x = 10 * Math.sin(clock.getElapsedTime() * 0.5);
    earth.position.z = 10 * Math.cos(clock.getElapsedTime() * 0.5);

    mercury.rotation.y += 0.007;
    mercury.position.x = 4 * Math.sin(clock.getElapsedTime());
    mercury.position.z = 4 * Math.cos(clock.getElapsedTime());
   

    venus.rotation.y += 0.008;
    venus.position.x = 7 * Math.sin(clock.getElapsedTime() * 0.8);
    venus.position.z = 7 * Math.cos(clock.getElapsedTime() * 0.8);

    mars.rotation.y += 0.009;
    mars.position.x = 13 * Math.sin(clock.getElapsedTime() * 0.4);
    mars.position.z = 13 * Math.cos(clock.getElapsedTime() * 0.4);

    jupiter.rotation.y += 0.009;
    jupiter.position.x = 16 * Math.sin(clock.getElapsedTime() * 0.3);
    jupiter.position.z = 16 * Math.cos(clock.getElapsedTime() * 0.3);

    saturn.rotation.y += 0.009;
    saturn.position.x = 19 * Math.sin(clock.getElapsedTime() * 0.2);
    saturn.position.z = 19 * Math.cos(clock.getElapsedTime() * 0.2);

    uranus.rotation.y += 0.009;
    uranus.position.x = 22 * Math.sin(clock.getElapsedTime() * 0.15);
    uranus.position.z = 22 * Math.cos(clock.getElapsedTime() * 0.15);

    neptune.rotation.y += 0.009;
    neptune.position.x = 25 * Math.sin(clock.getElapsedTime() * 0.1);
    neptune.position.z = 25 * Math.cos(clock.getElapsedTime() * 0.1);
     moon.rotation.y += 0.005;
}
animate();
