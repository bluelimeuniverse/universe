import { useEffect, useRef } from 'react';

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Colors
    const neonGreen = '57, 255, 20'; // RGB for neon green
    const electricBlue = '0, 255, 255'; // RGB for electric blue

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
        // Randomly assign green or blue, mostly white/grey for stars
        const rand = Math.random();
        if (rand > 0.9) this.color = `rgba(${neonGreen}, 0.8)`;
        else if (rand > 0.8) this.color = `rgba(${electricBlue}, 0.8)`;
        else this.color = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(width * 0.1, 150); // Responsive count
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Draw connections
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 100, 100, ${0.1 - distance / 1500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default CosmicBackground;
