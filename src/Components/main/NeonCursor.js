// // NeonCursor.js
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { Canvas } from '@react-three/fiber';

// const NeonCursor = () => {
//     const cursorRef = useRef(new THREE.Vector3());
//     const segments = useRef([]);

//     const getRandomColor = () => {
//         const r = Math.floor(Math.random() * 256);
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         return `rgb(${r}, ${g}, ${b})`;
//     };

//     const createSegment = (x, y) => {
//         const geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.2, 32);
//         const material = new THREE.MeshBasicMaterial({ color: getRandomColor() });
//         const segment = new THREE.Mesh(geometry, material);
//         segment.position.set(x, y, -0.1);
//         segment.rotation.x = Math.PI / 2;
//         segments.current.push(segment);
//         return segment;
//     };

//     useEffect(() => {
//         const animate = () => {
//             requestAnimationFrame(animate);
//             segments.current.forEach((segment, index) => {
//                 if (segment) {
//                     segment.position.y += 0.05; // حرکت به سمت بالا
//                     segment.material.opacity -= 0.01; // کاهش شفافیت
//                     if (segment.material.opacity <= 0) {
//                         segment.material.dispose();
//                         segment.geometry.dispose();
//                         segments.current.splice(index, 1); // حذف از آرایه
//                     }
//                 }
//             });
//         };

//         animate();
//     }, []);

//     useEffect(() => {
//         const handleMouseMove = (event) => {
//             const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//             const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

//             cursorRef.current.set(mouseX * 5, mouseY * 5, 0);
//             createSegment(cursorRef.current.x, cursorRef.current.y);
//         };

//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <Canvas style={{ height: '100vh', background: 'black' }}>
//             {segments.current.map((segment, index) => (
//                 <primitive object={segment} key={index} />
//             ))}
//         </Canvas>
//     );
// };

// export default NeonCursor;
