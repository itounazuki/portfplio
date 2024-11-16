// Three.js - Basic 3D Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bgCanvas')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Create a Star
const geometry = new THREE.SphereGeometry(5, 32, 32); // 星の形状
const material = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    emissive: 0xffff00,
    emissiveIntensity: 0.5
});
const star = new THREE.Mesh(geometry, material);
scene.add(star);

// Lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    star.rotation.x += 0.01;
    star.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

// GSAP - Scroll Animation
gsap.registerPlugin(ScrollTrigger);

gsap.from("#about", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 85%",
        end: "top 30%",
        toggleActions: "play none none reset",
    },
    opacity: 0,
    duration: 1,
    y: 50
});

gsap.from("#projects", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 85%",
        end: "top 30%",
        toggleActions: "play none none reset",
    },
    opacity: 0,
    duration: 1,
    y: 50
});

gsap.from("#contact", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 85%",
        end: "top 30%",
        toggleActions: "play none none reset",
    },
    opacity: 0,
    duration: 1,
    y: 50
});
