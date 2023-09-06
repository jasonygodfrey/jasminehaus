import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const SimpleScene = () => {
  const sceneRef = useRef(null);
  const mouse = new THREE.Vector2();

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF);

    // Add directional light with higher intensity
    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Add ambient light to softly illuminate the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', onMouseMove);

    const loader = new GLTFLoader();
    loader.load(
      '/jasminehausscene.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xFFCCE5,
              // Increase reflectivity and metalness
              reflectivity: 0.0,
              metalness: 0,
            });
          }
        });
        scene.add(gltf.scene);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.log('An error happened:', error);
      }
    );

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      camera.position.x += (mouse.x * 10 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 10 - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div ref={sceneRef} />
  );
};

export default SimpleScene;
