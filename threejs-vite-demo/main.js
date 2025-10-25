import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

//scene
const scene = new THREE.Scene();
//background texture loader 
const bgtexture = new THREE.TextureLoader().load('./textures/2k_stars_milky_way.jpg');
scene.background = bgtexture;
//Object loader
const mtlloader = new MTLLoader().load('./models/hpl8w2uqbytc-Akira/Akira/akira.mtl' , (material) => {
  material.preload();

  const Objloader = new OBJLoader();
Objloader.setMaterials(material);
Objloader.load('./models/hpl8w2uqbytc-Akira/Akira/akira.obj' , (object) => {
  object.scale.set(0.1 , 0.1 , 0.1);
  object.position.set(-0.8 , 0.5 , 1);
  earth.add(object);
});
});


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
    const saturnringtexture = new THREE.TextureLoader().load('./textures/8k_saturn_ring_alpha.png');
//camera
const camera = new THREE.PerspectiveCamera (35 , window.innerWidth/window.innerHeight , 0.1 , 1000);
camera.position.set(0 , 10 , 70);
//canva
const canva = document.getElementById('myCanvas');
//renerer
const renderer = new THREE. WebGLRenderer({canvas: canva , antialias: true});
renderer.setSize(window.innerWidth , window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
    //geometry
     const geometry = new THREE.SphereGeometry(1 , 64 , 64);
     const ringgeometry = new THREE.RingGeometry(1.5 , 2 , 64);
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
const saturnringmaterial = new THREE.MeshBasicMaterial({map: saturnringtexture , side: THREE.DoubleSide});
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
        const saturnring = new THREE.Mesh(ringgeometry , saturnringmaterial);

        //set positon
    mercury.position.x = 4;
    venus.position.x = 7;
    earth.position.x = 10;
    mars.position.x = 13;
    jupiter.position.x = 16;
    saturn.position.x = 19;
    uranus.position.x = 22;
    neptune.position.x = 25;
    moon.position.x = 1.5;
    saturnring.rotation.x = Math.PI / 2.3;
    saturnring.position.x = 19;
        //set scale
    sun.scale.set(3 , 3 , 3);
    mercury.scale.set(0.4 , 0.4 , 0.4);
    venus.scale.set(0.7 , 0.7 , 0.7);
    earth.scale.set(0.7 , 0.7 , 0.7);
    mars.scale.set(0.6 , 0.6 , 0.6);
    jupiter.scale.set(1.5 , 1.5 , 1.5); 
    saturn.scale.set(1 , 1 , 1);
    uranus.scale.set(0.8 , 0.8 , 0.8);
    neptune.scale.set(0.8 , 0.8 , 0.8);
    moon.scale.set(0.2 , 0.2 , 0.2);
    //render order
saturn.renderOrder = 0;
saturnring.renderOrder = 1;
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
scene.add(saturnring);

//light
const sunLight = new THREE.PointLight(0xffffff, 2, 100);
sunLight.position.set(0, 0, 0); // Position at the sun
scene.add(sunLight);

const ambientLight = new THREE.AmbientLight(0x3333 , 3);
scene.add(ambientLight);
//orbit controls
const controls = new OrbitControls(camera , renderer.domElement);
controls.enableDamping = true;
controls.enableRotate = true;
controls.enableZoom = true;
//clock 
const clock = new THREE.Clock();
// Function to create a text label using Canvas and Sprite
function createTextLabel(text) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = '24px Arial';
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text,70,21);
 context.scale(2, 2); 
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(3, 3, 0); // adjust label size
  return sprite;
}
// Function to create an orbit line (ring)
function createOrbit(radius, color = 0xffffff) {
  const curve = new THREE.EllipseCurve(
    0, 0,            // ax, aY
    radius, radius,  // xRadius, yRadius (circle)
    0, 2 * Math.PI,  // startAngle, endAngle
    false,           // clockwise
    0                // rotation
  );

  const points = curve.getPoints(100);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const material = new THREE.LineBasicMaterial({ color: color });
  const orbit = new THREE.LineLoop(geometry, material);
  orbit.rotation.x = Math.PI / 2; // rotate to lie flat (XZ plane)

  return orbit;
}
//adjust camera animation 

  // Label
  const Solartext = createTextLabel('Solar System');
  const Mercurytext = createTextLabel('Mercury');
  const Venustext = createTextLabel('Venus');
  const Earthtext = createTextLabel('Earth');
  const Marstext= createTextLabel('Mars');
    const Jupitertext = createTextLabel('Jupiter');
      const Sarturntext= createTextLabel('Sarturn');
      const Uranustext = createTextLabel('Uranus');
      const Neptunetext = createTextLabel('Neptune');
//const textarray = [Mercurytext, Venustext , Earthtext , Marstext , Jupitertext , Sarturntext , Neptunetext , Uranustext ];
Solartext.position.set(1, 4, 0);
Solartext.scale.set(5 , 5 , 5);
//define label postion
Mercurytext.position.set( mercury.position.x, mercury.position.y + 0.5, 0);
Venustext.position.set(venus.position.x , venus.position.y + 0.5, 0);
Earthtext.position.set(earth.position.x , earth.position.y + 0.5 , 0);
Marstext.position.set(mars.position.x , mars.position.y + 0.5 , 0);
Jupitertext.position.set(jupiter.position.x , jupiter.position.y + 0.5 , 0);
Sarturntext.position.set(saturn.position.x , saturn.position.y + 0.5, 0);
  Uranustext.position.set(uranus.position.x ,saturn.position.y + 0.5 , 0);
Neptunetext.position.set(neptune.position.x , Sarturntext.position.y + 0.5 , 0);
//add label to scene
scene.add(Solartext);
scene.add(Mercurytext);
scene.add(Venustext);
scene.add(Earthtext);
scene.add(Marstext);
scene.add(Jupitertext);
scene.add(Sarturntext);
scene.add(Uranustext);
scene.add(Neptunetext);
  const orbit1 = createOrbit(4, 0xffffff);
    const orbit2 = createOrbit(7, 0xffffff);
    const orbit3 = createOrbit(10, 0xffffff);
    const orbit4 = createOrbit(13, 0xffffff);
    const orbit5 = createOrbit(16.4, 0xffffff);
    const orbit6 = createOrbit(18.9, 0xffffff);
    const orbit7 = createOrbit(22, 0xffffff);
    const orbit8 = createOrbit(25, 0xffffff);
  scene.add(orbit1);
    scene.add(orbit2);
    scene.add(orbit3);
    scene.add(orbit4);
    scene.add(orbit5);
    scene.add(orbit6);
    scene.add(orbit7);
    scene.add(orbit8);
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

    earth.rotation.y += 0.03;
    earth.position.x = 10 * Math.sin(clock.getElapsedTime() * 0.4);
    earth.position.z = 10 * Math.cos(clock.getElapsedTime() * 0.4);
    Earthtext.position.x = 10 * Math.sin(clock.getElapsedTime() * 0.4);
      Earthtext.position.z = 10 * Math.cos(clock.getElapsedTime() * 0.4);

    mercury.rotation.y += 0.007;
    mercury.position.x = 4 * Math.sin(clock.getElapsedTime());
    mercury.position.z = 4 * Math.cos(clock.getElapsedTime());
    Mercurytext.position.x = 4 * Math.sin(clock.getElapsedTime());
    Mercurytext.position.z = 4 * Math.cos(clock.getElapsedTime());

    venus.rotation.y += 0.008;
    venus.position.x = 7 * Math.sin(clock.getElapsedTime() * 0.7);
    venus.position.z = 7 * Math.cos(clock.getElapsedTime() * 0.7);
    Venustext.position.x = 7 * Math.sin(clock.getElapsedTime() * 0.7);
    Venustext.position.z = 7 * Math.cos(clock.getElapsedTime() * 0.7);

    mars.rotation.y += 0.009;
    mars.position.x = 13 * Math.sin(clock.getElapsedTime() * 0.3);
    mars.position.z = 13 * Math.cos(clock.getElapsedTime() * 0.3);
    Marstext.position.x = 13 * Math.sin(clock.getElapsedTime() * 0.3);
        Marstext.position.z = 13 * Math.cos(clock.getElapsedTime() * 0.3);

    jupiter.rotation.y += 0.009;
    jupiter.position.x = 16 * Math.sin(clock.getElapsedTime() * 0.2);
    jupiter.position.z = 16 * Math.cos(clock.getElapsedTime() * 0.2);
    Jupitertext.position.x = 16 * Math.sin(clock.getElapsedTime() * 0.2);
    Jupitertext.position.z = 16 * Math.cos(clock.getElapsedTime() * 0.2);

    saturn.rotation.y += 0.009;
    saturn.position.x = 19 * Math.sin(clock.getElapsedTime() * 0.1);
    saturn.position.z = 19 * Math.cos(clock.getElapsedTime() * 0.1);
    saturnring.rotation.z += 0.005;
    saturnring.position.x = 19 * Math.sin(clock.getElapsedTime() * 0.1);
    saturnring.position.z = 19 * Math.cos(clock.getElapsedTime() * 0.1);
    Sarturntext.position.x = 19 * Math.sin(clock.getElapsedTime() * 0.1);
   Sarturntext.position.z = 19 * Math.cos(clock.getElapsedTime() * 0.1);

    uranus.rotation.y += 0.009;
    uranus.position.x = 22 * Math.sin(-clock.getElapsedTime() * 0.1);
    uranus.position.z = 22 * Math.cos(-clock.getElapsedTime() * 0.1);
    Uranustext.position.x = 22 * Math.sin(-clock.getElapsedTime() * 0.1);
    Uranustext.position.z = 22 * Math.cos(-clock.getElapsedTime() * 0.1);

    neptune.rotation.y += 0.009;
    neptune.position.x = 25 * Math.sin(clock.getElapsedTime() * 0.1);
    neptune.position.z = 25 * Math.cos(clock.getElapsedTime() * 0.1);
     Neptunetext.position.x = 25 * Math.sin(clock.getElapsedTime() * 0.1);
        Neptunetext.position.z = 25 * Math.cos(clock.getElapsedTime() * 0.1);
     moon.rotation.y += 0.005;
}
animate();
