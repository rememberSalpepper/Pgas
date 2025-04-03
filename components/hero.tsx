'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Image from 'next/image';
//import { Button } from '@/components/ui/button';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // Crear la escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current, // Asocia el canvas
      alpha: true, // Hace el fondo transparente
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Crear geometría y material
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x4fd1c5,
      wireframe: true,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Añadir luz
    const light = new THREE.PointLight(0x4fd1c5, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      torusKnot.scale.x = 1 + Math.sin(Date.now() * 0.001) * 0.2;
      torusKnot.scale.y = 1 + Math.sin(Date.now() * 0.001) * 0.2;
      torusKnot.scale.z = 1 + Math.sin(Date.now() * 0.001) * 0.2;
      renderer.render(scene, camera);
    };

    animate();

    // Ajustar tamaño en cambio de ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose(); // Libera recursos del renderer
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative h-screen"
      style={{ opacity }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y }}
      >
        <div className="text-center space-y-0 max-w-4xl mx-auto px-6">
          <Image
            src="/PgasTexto.png"
            alt="Pgas Logo"
            width={250}
            height={250}
            className="rounded-full mx-auto"
            />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400"
          >
            En PGAS hacemos Pegas 💪<br></br>
            Soluciones tecnológicas con personalidad
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
