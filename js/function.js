let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color();

    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.x = 800;
    camera.position.y = 2000;
    camera.position.z = 1000;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(5, 10, 25);
    controls.update();

    hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);


    let loader = new THREE.GLTFLoader();
    loader.load('3dmodel/scene.gltf', function(gltf) {
        car = gltf.scene.children[0];
        car.scale.set(0.5, 0.5, 0.5);
        scene.add(gltf.scene);
        animate();
    });
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();