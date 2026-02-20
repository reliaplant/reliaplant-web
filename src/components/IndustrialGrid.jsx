'use client';

import React, { useRef, useEffect, useCallback } from 'react';

const GRID_SPACING = 60;
const DOT_CHANCE = 0.18;
const PULSE_INTERVAL = 900;
const GRID_COLOR = 'rgba(96, 165, 250, 0.09)';
const GRID_LINE_WIDTH = 0.6;

export default function IndustrialGrid() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    dots: [],
    pulses: [],
    lastPulseTime: 0,
    animId: null,
    width: 0,
    height: 0,
    dpr: 1,
  });

  const initDots = useCallback((cols, rows) => {
    const dots = [];
    for (let c = 0; c <= cols; c++) {
      for (let r = 0; r <= rows; r++) {
        if (Math.random() < DOT_CHANCE) {
          dots.push({
            x: c * GRID_SPACING,
            y: r * GRID_SPACING,
            phase: Math.random() * Math.PI * 2,
            speed: 0.8 + Math.random() * 1.2,
            maxAlpha: 0.18 + Math.random() * 0.14,
          });
        }
      }
    }
    return dots;
  }, []);

  const spawnPulse = useCallback((w, h) => {
    const horizontal = Math.random() > 0.5;
    const speed = 0.4 + Math.random() * 0.5;
    const segLen = 80 + Math.random() * 120;

    if (horizontal) {
      const row = Math.floor(Math.random() * (h / GRID_SPACING + 1));
      return { x: -segLen, y: row * GRID_SPACING, horizontal: true, speed, segLen };
    }
    const col = Math.floor(Math.random() * (w / GRID_SPACING + 1));
    return { x: col * GRID_SPACING, y: -segLen, horizontal: false, speed, segLen };
  }, []);

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const w = parent.clientWidth;
    const h = parent.clientHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const cols = Math.ceil(w / GRID_SPACING);
    const rows = Math.ceil(h / GRID_SPACING);

    const s = stateRef.current;
    s.width = w;
    s.height = h;
    s.dpr = dpr;
    s.dots = initDots(cols, rows);
    s.pulses = [];
    s.lastPulseTime = performance.now();
  }, [initDots]);

  useEffect(() => {
    setup();

    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    const draw = (now) => {
      const s = stateRef.current;
      const { width: w, height: h, dpr } = s;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = GRID_LINE_WIDTH;
      ctx.beginPath();
      for (let x = 0; x <= w; x += GRID_SPACING) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = 0; y <= h; y += GRID_SPACING) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // Pulsing dots at intersections
      const t = now * 0.001;
      for (const d of s.dots) {
        const alpha = Math.max(0, d.maxAlpha * Math.sin(t * d.speed + d.phase));
        if (alpha > 0.001) {
          ctx.beginPath();
          ctx.arc(d.x, d.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 210, 255, ${alpha})`;
          ctx.fill();
        }
      }

      // Spawn pulses
      if (now - s.lastPulseTime > PULSE_INTERVAL) {
        s.pulses.push(spawnPulse(w, h));
        s.lastPulseTime = now;
      }

      // Draw & advance pulses
      s.pulses = s.pulses.filter((p) => {
        if (p.horizontal) {
          p.x += p.speed;
          if (p.x - p.segLen > w) return false;
        } else {
          p.y += p.speed;
          if (p.y - p.segLen > h) return false;
        }

        // Gradient segment
        const half = p.segLen / 2;
        if (p.horizontal) {
          const cx = p.x;
          const grad = ctx.createLinearGradient(cx - half, p.y, cx + half, p.y);
          grad.addColorStop(0, 'rgba(200, 235, 255, 0)');
          grad.addColorStop(0.5, 'rgba(200, 235, 255, 0.22)');
          grad.addColorStop(1, 'rgba(200, 235, 255, 0)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx - half, p.y);
          ctx.lineTo(cx + half, p.y);
          ctx.stroke();
          // Leading dot
          ctx.beginPath();
          ctx.arc(cx + half, p.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(220, 240, 255, 0.18)';
          ctx.fill();
        } else {
          const cy = p.y;
          const grad = ctx.createLinearGradient(p.x, cy - half, p.x, cy + half);
          grad.addColorStop(0, 'rgba(200, 235, 255, 0)');
          grad.addColorStop(0.5, 'rgba(200, 235, 255, 0.22)');
          grad.addColorStop(1, 'rgba(200, 235, 255, 0)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p.x, cy - half);
          ctx.lineTo(p.x, cy + half);
          ctx.stroke();
          // Leading dot
          ctx.beginPath();
          ctx.arc(p.x, cy + half, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(220, 240, 255, 0.18)';
          ctx.fill();
        }

        return true;
      });

      s.animId = requestAnimationFrame(draw);
    };

    stateRef.current.animId = requestAnimationFrame(draw);

    const onResize = () => {
      setup();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(stateRef.current.animId);
      window.removeEventListener('resize', onResize);
    };
  }, [setup, spawnPulse]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
