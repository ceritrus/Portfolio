import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import GUI from "lil-gui";
import gsap from "gsap";

export default function Three() {
  const refContainer = useRef(null);

  useEffect(() => {
    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);

    // Scene
    const scene = new THREE.Scene();

    // Texture
    const textureLoader = new THREE.TextureLoader();
    const bubbleTexture = textureLoader.load("./assets/bubble.png");
    // Objects

    const material = new THREE.MeshNormalMaterial();
    const objects = [];
    var objects_count = 300;
    for (let i = 0; i < objects_count; i++) {
      const geometry = new THREE.SphereGeometry(1, 4, 6);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 80;
      mesh.position.y = (Math.random() - 0.8) * 200;
      mesh.position.z = (Math.random() - 1.2) * 80;
      objects.push(mesh);
      scene.add(mesh);
    }

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Group
    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 6;
    cameraGroup.add(camera);

    // Scroll
    let scrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
    });

    // Cursor
    const cursor = {};
    cursor.x = 0;
    cursor.y = 0;

    window.addEventListener("mousemove", (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    });

    // Animate
    const clock = new THREE.Clock();
    let previousTime = 0;

    var request;
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      // Camera
      camera.position.y = -(scrollY / sizes.height) * 20;

      const parallaxX = cursor.x * 3;
      const parallaxY = -cursor.y * 3;
      cameraGroup.position.x +=
        (parallaxX - cameraGroup.position.x) * 2 * deltaTime;
      cameraGroup.position.y +=
        (parallaxY - cameraGroup.position.y) * 2 * deltaTime;

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      request = window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return <canvas className="webgl" ref={refContainer}></canvas>;
}
