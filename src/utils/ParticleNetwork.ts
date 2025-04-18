class ParticleNetwork {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  particleCount: number;
  particles: Particle[];
  colors: string[];
  lineColor: string;
  particleSpeed: number;
  distanceThreshold: number;
  animationId: number | null;

  constructor(container: HTMLElement, particleCount = 100) {
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
    this.particleCount = particleCount;
    this.particles = [];
    this.colors = ['#00F5C4', '#0D4C73', '#0B3D19'];
    this.lineColor = 'rgba(0, 245, 196, 0.15)';
    this.particleSpeed = 0.3;
    this.distanceThreshold = 150;
    this.animationId = null;

    this.initialize();
  }

  initialize() {
    this.container.appendChild(this.canvas);
    this.resize();
    this.createParticles();
    this.animate();

    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(
        Math.random() * this.canvas.width,
        Math.random() * this.canvas.height,
        Math.random() * 2 + 1,
        this.getRandomColor(),
        this.particleSpeed * (Math.random() - 0.5),
        this.particleSpeed * (Math.random() - 0.5)
      ));
    }
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawParticles();
    this.drawConnections();
    this.updateParticles();
    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }

  drawParticles() {
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color;
      this.ctx.fill();
    });
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.distanceThreshold) {
          const opacity = 1 - (distance / this.distanceThreshold);
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = this.lineColor.replace('0.15', opacity.toFixed(2));
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }
  }

  updateParticles() {
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.vx *= -1;
      }
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.vy *= -1;
      }
    });
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', this.resize);
    if (this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

class Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;

  constructor(x: number, y: number, radius: number, color: string, vx: number, vy: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vx = vx;
    this.vy = vy;
  }
}

export default ParticleNetwork;