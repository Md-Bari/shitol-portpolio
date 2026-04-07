import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const glowRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        const glow = glowRef.current;

        let mouseX = 0;
        let mouseY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            setIsVisible(true);

            // Dot follows cursor instantly
            gsap.set(dot, { x: mouseX, y: mouseY });

            // Ring follows with a smooth lag
            gsap.to(ring, {
                x: mouseX,
                y: mouseY,
                duration: 0.3,
                ease: "power3.out",
            });

            // Glow follows with more lag for depth
            gsap.to(glow, {
                x: mouseX,
                y: mouseY,
                duration: 0.5,
                ease: "power3.out",
            });
        };

        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        // Hover: interactive elements
        const onHoverIn = () => {
            gsap.to(ring, {
                scale: 2,
                borderWidth: "3px",
                duration: 0.4,
                ease: "elastic.out(1, 0.5)",
            });
            gsap.to(dot, {
                scale: 0,
                duration: 0.3,
                ease: "back.in(2)",
            });
            gsap.to(glow, {
                scale: 1.5,
                opacity: 0.8,
                duration: 0.4,
                ease: "power2.out",
            });
        };

        const onHoverOut = () => {
            gsap.to(ring, {
                scale: 1,
                borderWidth: "2px",
                duration: 0.4,
                ease: "elastic.out(1, 0.5)",
            });
            gsap.to(dot, {
                scale: 1,
                duration: 0.3,
                ease: "back.out(2)",
            });
            gsap.to(glow, {
                scale: 1,
                opacity: 0.4,
                duration: 0.4,
                ease: "power2.out",
            });
        };

        // Click effect
        const onMouseDown = () => {
            gsap.to(ring, { scale: 0.8, duration: 0.15, ease: "power2.in" });
            gsap.to(dot, { scale: 2, duration: 0.15, ease: "power2.out" });
            gsap.to(glow, { scale: 1.3, opacity: 1, duration: 0.15 });
        };
        const onMouseUp = () => {
            gsap.to(ring, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
            gsap.to(dot, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
            gsap.to(glow, { scale: 1, opacity: 0.4, duration: 0.3 });
        };

        // Idle animation for a more polished cursor feel
        gsap.to(ring, {
            rotation: 360,
            duration: 18,
            repeat: -1,
            ease: "none",
        });
        gsap.to(glow, {
            opacity: 0.55,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        gsap.to(dot, {
            boxShadow: "0 0 28px rgba(168, 85, 247, 0.75), 0 0 60px rgba(56, 189, 248, 0.45)",
            duration: 2.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        window.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        // Add hover listeners to all interactive elements
        const interactiveSelector =
            "a, button, [role='button'], input, textarea, select, label, .group";

        const addHoverListeners = () => {
            const els = document.querySelectorAll(interactiveSelector);
            els.forEach((el) => {
                el.addEventListener("mouseenter", onHoverIn);
                el.addEventListener("mouseleave", onHoverOut);
            });
        };

        addHoverListeners();

        // Re-attach on DOM changes (for dynamically rendered elements)
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseenter", onMouseEnter);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            observer.disconnect();

            const els = document.querySelectorAll(interactiveSelector);
            els.forEach((el) => {
                el.removeEventListener("mouseenter", onHoverIn);
                el.removeEventListener("mouseleave", onHoverOut);
            });
        };
    }, []);

    return (
        <>
            {/* Glow effect — slowest, creates depth */}
            <div
                ref={glowRef}
                className="custom-cursor-glow"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "88px",
                    height: "88px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(56, 189, 248, 0.18) 35%, transparent 72%)",
                    pointerEvents: "none",
                    zIndex: 99997,
                    transform: "translate(-50%, -50%)",
                    opacity: isVisible ? 0.45 : 0,
                    transition: "opacity 0.3s ease",
                    filter: "blur(24px)",
                    willChange: "transform",
                }}
            />

            {/* Dot — sharp, instant, with glowing gradient */}
            <div
                ref={dotRef}
                className="custom-cursor-dot"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #8b5cf6 0%, #22d3ee 50%, #34d399 100%)",
                    pointerEvents: "none",
                    zIndex: 99999,
                    transform: "translate(-50%, -50%)",
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.25s ease",
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.8), 0 0 45px rgba(56, 189, 248, 0.35)",
                    willChange: "transform",
                }}
            />

            {/* Ring — lags behind with GSAP, modern gradient border */}
            <div
                ref={ringRef}
                className="custom-cursor-ring"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    border: "2px solid transparent",
                    background: "linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #8b5cf6, #22d3ee, #06b6d4) border-box",
                    pointerEvents: "none",
                    zIndex: 99998,
                    transform: "translate(-50%, -50%)",
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.25s ease",
                    backdropFilter: "blur(7px)",
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.35)",
                    willChange: "transform",
                }}
            />
        </>
    );
};

export default CustomCursor;
