// // SmokeCursor.js
// import React, { Children, useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const Practice = ({theme,children}) => {
//     const mountRef = useRef(null);
//     const cursorRef = useRef(new THREE.Vector3());
//     const smokeParticles = useRef([]);

//     // تابع برای تولید رنگ تصادفی
//     const getRandomColor = () => {
//         const r = Math.floor(Math.random() * 256);
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         const color = theme === 'dark' ? '#03f0f9': '#1df49e'
//         return color; // شفافیت 0.5
//         // return `rgba(${r},${g},${b},${1})`
//     };

//         // تابع ایجاد ذرات دودی

//   let scene;
//     useEffect(() => {
//         // تنظیمات صحنه
//          scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ alpha: true });

//         renderer.setSize(window.innerWidth, window.innerHeight);
//         mountRef.current.appendChild(renderer.domElement);

//         camera.position.z = 5;



//         // تابع انیمیشن
//         const animate = () => {
//             requestAnimationFrame(animate);
//             renderer.render(scene, camera);

//             // به روز رسانی موقعیت ذرات دودی
//             smokeParticles.current.forEach((smokeMesh) => {
//                 smokeMesh.position.y += 0.01; // حرکت به سمت بالا
//                 smokeMesh.material.opacity -= 0.01; // کاهش شفافیت

//                 // حذف ذراتی که شفافیتشان به صفر رسیده است
//                 if (smokeMesh.material.opacity <= 0) {
//                     scene.remove(smokeMesh);
//                 }
//             });
//         };



//         animate();

//         // مدیریت تغییر اندازه پنجره
//         window.addEventListener('resize', () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         });

//         // پاکسازی منابع
//         return () => {
//             mountRef.current.removeChild(renderer.domElement);
//             window.removeEventListener('resize', this);
//         };
//     }, []);

//     const createSmokeParticle = (x, y) => {
//         const geometry = new THREE.CircleGeometry(0.02, 32); // اندازه کوچک‌تر
//         const material = new THREE.MeshBasicMaterial({ color: getRandomColor() }); // رنگ تصادفی
//         const smokeMesh = new THREE.Mesh(geometry, material);
//         smokeMesh.position.set(x, y - 0.1, 0); // -0.1 برای قرار دادن در عقب
//         smokeParticles.current.push(smokeMesh);
//         scene.add(smokeMesh);
//     };

//     useEffect(() => {
//         // مدیریت حرکت ماوس
//         const handleMouseMove = (event) => {
//             const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//             const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

//             cursorRef.current.set(mouseX * 5, mouseY * 5, 0);

//             // ایجاد دانه‌های دودی در موقعیت ماوس
//             createSmokeParticle(cursorRef.current.x, cursorRef.current.y);
//         };

//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []); // حذف وابستگی به createSmokeParticle

//     return <div className='practice' ref={mountRef} style={{ width: '100%'}} >
//        {React.cloneElement(children)}
//     </div>;
// };
import useCursor from "./useCursor";
import React from "react";
// export default Practice;
export default function Practice ({ children }) {
    const ref = useCursor();
  
    return (
      <div ref={ref}>
        {React.Children.map(children, child => 
          React.cloneElement(child)
        )}
      </div>
    );
  };