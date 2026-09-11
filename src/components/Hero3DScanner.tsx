import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DScanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasWebGlError, setHasWebGlError] = useState(false);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsPlaying(false);
    }

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        45,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 1.2, 5.5);

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x151D38, 2.5);
      scene.add(ambientLight);

      const cyanKeyLight = new THREE.PointLight(0x42D8D5, 3.5, 20);
      cyanKeyLight.position.set(2, 3, 3);
      scene.add(cyanKeyLight);

      const orangeRimLight = new THREE.PointLight(0xFF873B, 2.8, 15);
      orangeRimLight.position.set(-2.5, -1, 2);
      scene.add(orangeRimLight);

      // Main Scanner Group
      const scannerGroup = new THREE.Group();
      scene.add(scannerGroup);

      // 1. Outer Dark Metallic Gantry Ring
      const outerGantryGeo = new THREE.TorusGeometry(1.6, 0.45, 24, 64);
      const gantryMat = new THREE.MeshStandardMaterial({
        color: 0x11162C,
        metalness: 0.85,
        roughness: 0.25,
      });
      const outerGantry = new THREE.Mesh(outerGantryGeo, gantryMat);
      scannerGroup.add(outerGantry);

      // 2. Cyan Glowing Inner Rim
      const innerRimGeo = new THREE.TorusGeometry(1.18, 0.04, 16, 64);
      const cyanGlowMat = new THREE.MeshBasicMaterial({
        color: 0x42D8D5,
        wireframe: false,
      });
      const innerRim = new THREE.Mesh(innerRimGeo, cyanGlowMat);
      scannerGroup.add(innerRim);

      // 3. Orange Accent Arc (Echoing SK Logo border)
      const orangeArcGeo = new THREE.TorusGeometry(1.72, 0.035, 12, 48, Math.PI * 0.9);
      const orangeArcMat = new THREE.MeshBasicMaterial({
        color: 0xFF873B,
      });
      const orangeArc = new THREE.Mesh(orangeArcGeo, orangeArcMat);
      orangeArc.rotation.z = Math.PI * 0.3;
      scannerGroup.add(orangeArc);

      // 4. Scanner Bed / Patient Couch
      const tableGeo = new THREE.BoxGeometry(0.8, 0.1, 3.2);
      const tableMat = new THREE.MeshStandardMaterial({
        color: 0x151D38,
        metalness: 0.6,
        roughness: 0.4,
      });
      const table = new THREE.Mesh(tableGeo, tableMat);
      table.position.set(0, -0.45, 0.5);
      scannerGroup.add(table);

      // Table support stand
      const standGeo = new THREE.CylinderGeometry(0.12, 0.2, 0.8, 16);
      const standMat = new THREE.MeshStandardMaterial({
        color: 0x0E1325,
        metalness: 0.8,
        roughness: 0.3,
      });
      const stand = new THREE.Mesh(standGeo, standMat);
      stand.position.set(0, -0.9, 1.2);
      scannerGroup.add(stand);

      // 5. Translucent Synthetic Scan Planes (Synthetic slice grid)
      const scanPlanesGroup = new THREE.Group();
      const planeGeo = new THREE.PlaneGeometry(1.2, 1.2);
      const planeMat = new THREE.MeshBasicMaterial({
        color: 0x42D8D5,
        transparent: true,
        opacity: 0.18,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      for (let i = -3; i <= 3; i++) {
        const slice = new THREE.Mesh(planeGeo, planeMat);
        slice.position.z = i * 0.22;
        scanPlanesGroup.add(slice);
      }
      scannerGroup.add(scanPlanesGroup);

      // 6. Sweeping Laser / Scan Line Plane
      const sweepLineGeo = new THREE.PlaneGeometry(1.3, 0.04);
      const sweepLineMat = new THREE.MeshBasicMaterial({
        color: 0x5EEAD4,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
      });
      const sweepLine = new THREE.Mesh(sweepLineGeo, sweepLineMat);
      sweepLine.rotation.y = Math.PI / 2;
      scannerGroup.add(sweepLine);

      // Initial orientation
      scannerGroup.rotation.y = -0.35;
      scannerGroup.rotation.x = 0.18;

      // Mouse Parallax (limited to 5 degrees)
      let targetRotX = 0.18;
      let targetRotY = -0.35;

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotY = -0.35 + x * 0.15; // ~8.5 degrees max
        targetRotX = 0.18 + y * 0.12;
      };

      const container = containerRef.current;
      container.addEventListener('mousemove', handleMouseMove);

      // Animation Loop
      let clock = new THREE.Clock();
      let isVisible = true;

      const handleVisibilityChange = () => {
        isVisible = !document.hidden;
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      const render = () => {
        if (isPlaying && isVisible) {
          const delta = clock.getDelta();
          const elapsedTime = clock.getElapsedTime();

          // Subtle idling rotation
          scannerGroup.rotation.y += (targetRotY - scannerGroup.rotation.y) * 0.05;
          scannerGroup.rotation.x += (targetRotX - scannerGroup.rotation.x) * 0.05;

          // Inner rim gentle pulsation
          const pulse = (Math.sin(elapsedTime * 2) + 1) * 0.5;
          cyanKeyLight.intensity = 3.0 + pulse * 1.5;

          // Sweeping scan line
          sweepLine.position.z = Math.sin(elapsedTime * 1.8) * 0.8;
          sweepLine.position.y = Math.cos(elapsedTime * 1.8) * 0.2;

          // Subtle scan planes oscillation
          scanPlanesGroup.position.z = Math.sin(elapsedTime * 0.8) * 0.1;
        }

        renderer?.render(scene, camera);
        animFrameId.current = requestAnimationFrame(render);
      };

      render();

      // Resize observer
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          if (width > 0 && height > 0 && renderer) {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
          }
        }
      });
      resizeObserver.observe(container);

      return () => {
        if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
        container.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        resizeObserver.disconnect();
        renderer?.dispose();
      };
    } catch (err) {
      console.warn('Three.js initialization fallback triggered:', err);
      setHasWebGlError(true);
    }
  }, [isPlaying]);

  return (
    <div
      id="radiology-3d-scanner-container"
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-2xl bg-[#11162C]/70 border border-[#20284A] overflow-hidden group select-none shadow-2xl"
      aria-label="3D Medical Imaging CT/MRI Scanner Presentation"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-[#1A254D]/50 via-transparent to-transparent pointer-events-none" />

      {/* Floating Modality Labels */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10 pointer-events-none">
        <span className="px-2.5 py-1 rounded-md bg-[#0B1026]/80 backdrop-blur-md border border-[#42D8D5]/40 text-[#42D8D5] font-mono-tech text-xs tracking-wider shadow-sm">
          MRI
        </span>
        <span className="px-2.5 py-1 rounded-md bg-[#0B1026]/80 backdrop-blur-md border border-[#FF873B]/40 text-[#FF873B] font-mono-tech text-xs tracking-wider shadow-sm">
          CT
        </span>
        <span className="px-2.5 py-1 rounded-md bg-[#0B1026]/80 backdrop-blur-md border border-[#42D8D5]/40 text-[#42D8D5] font-mono-tech text-xs tracking-wider shadow-sm">
          DIGITAL X-RAY
        </span>
        <span className="px-2.5 py-1 rounded-md bg-[#0B1026]/80 backdrop-blur-md border border-[#E44CA5]/40 text-[#E44CA5] font-mono-tech text-xs tracking-wider shadow-sm">
          PACS
        </span>
      </div>

      {/* WebGL Canvas or SVG Fallback */}
      {!hasWebGlError ? (
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-grab active:cursor-grabbing"
        />
      ) : (
        /* Static SVG Fallback */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <svg viewBox="0 0 200 200" className="w-48 h-48 drop-shadow-xl" fill="none">
            <circle cx="100" cy="100" r="80" stroke="#151D38" strokeWidth="24" />
            <circle cx="100" cy="100" r="70" stroke="#42D8D5" strokeWidth="3" opacity="0.8" />
            <circle cx="100" cy="100" r="86" stroke="#FF873B" strokeWidth="2" strokeDasharray="40 180" />
            <rect x="60" y="110" width="80" height="12" rx="4" fill="#20284A" />
            <line x1="100" y1="40" x2="100" y2="160" stroke="#42D8D5" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="30" fill="#42D8D5" fillOpacity="0.15" />
          </svg>
          <span className="text-xs font-mono-tech text-[#42D8D5] mt-2">
            CT / MRI Modality Architecture (Static View)
          </span>
        </div>
      )}
    </div>
  );
};
