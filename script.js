// Three.js - Basic 3D Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bgCanvas')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Create a Torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Star Field
function addStar() {
    const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
    const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(starGeometry, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z);
    scene.add(star);
}
Array(200).fill().forEach(addStar);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

// GSAP - Scroll Animation
gsap.registerPlugin(ScrollTrigger);

gsap.from("header", { opacity: 0, duration: 1.5, y: -50 });
gsap.from("#about", {
    scrollTrigger: "#about",
    opacity: 0,
    duration: 1,
    y: 50
});
gsap.from("#projects", {
    scrollTrigger: "#projects",
    opacity: 0,
    duration: 1,
    y: 50
});
gsap.from("#contact", {
    scrollTrigger: "#contact",
    opacity: 0,
    duration: 1,
    y: 50
});
