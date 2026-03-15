import { useEffect, useRef } from 'react';

export function AntigravityBackground({ className = "absolute inset-0 pointer-events-none z-[1]" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const parent = canvas.parentElement;
    if (!parent) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
      angle: number;
      angleSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 0.5;
        // Move upwards to simulate antigravity
        this.speedY = -(Math.random() * 0.5 + 0.2); 
        // Base horizontal drift
        this.speedX = (Math.random() - 0.5) * 0.2; 
        this.opacity = Math.random() * 0.5 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.y += this.speedY;
        this.angle += this.angleSpeed;
        // Add a sine wave to horizontal movement for organic swaying
        this.x += this.speedX + Math.sin(this.angle) * 0.3; 

        // Wrap around when going off screen
        if (this.y < -10) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
        }
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 63, 94, ${this.opacity})`; // Violet color
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      // Responsive particle count based on screen size, capped at 120
      const numParticles = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(parent);
    
    resize();
    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
