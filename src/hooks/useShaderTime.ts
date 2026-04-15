// Hooks for shader time, performance monitoring, and waypoint navigation
// Manages shader time, FPS-based quality scaling, and GSAP camera controls

import { useCallback, useEffect, useRef } from 'react';
import { useExperienceStore } from '../store/experienceStore';
import type { SectionType } from '../store/experienceStore';
import { getCameraOrchestrator } from '../utils/cameraOrchestration';

interface UseShaderTimeOptions {
  speed?: number;
  onUpdate?: (time: number, deltaTime: number) => void;
}

export function useShaderTime(options: UseShaderTimeOptions = {}) {
  const { speed = 1.0, onUpdate } = options;

  const timeRef = useRef(0);
  const deltaTimeRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    lastTimeRef.current = performance.now();

    const tick = () => {
      const now = performance.now();
      deltaTimeRef.current = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      timeRef.current += deltaTimeRef.current * speed;

      onUpdate?.(timeRef.current, deltaTimeRef.current);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, onUpdate]);

  return {
    timeRef,
    deltaTimeRef,
  };
}

interface UsePerformanceOptions {
  targetFps?: number;
  checkInterval?: number;
}

export function usePerformance(options: UsePerformanceOptions = {}) {
  const { targetFps = 60, checkInterval = 1000 } = options;

  const frameCountRef = useRef(0);
  const lastCheckRef = useRef(0);
  const rafRef = useRef<number | undefined>(undefined);

  const { setCurrentFps, setShaderQuality } = useExperienceStore();

  useEffect(() => {
    lastCheckRef.current = performance.now();

    const tick = () => {
      frameCountRef.current++;

      const now = performance.now();
      const elapsed = now - lastCheckRef.current;

      if (elapsed >= checkInterval) {
        const fps = Math.round((frameCountRef.current * 1000) / elapsed);
        setCurrentFps(fps);

        const lowerBound = Math.max(24, targetFps - 20);
        const nextQuality = fps < lowerBound ? 0.3 : fps < targetFps - 10 ? 0.6 : 1.0;
        setShaderQuality(nextQuality);

        frameCountRef.current = 0;
        lastCheckRef.current = now;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [checkInterval, setCurrentFps, setShaderQuality, targetFps]);
}

export function useWaypoint() {
  const { setSection } = useExperienceStore();

  const flyToWaypoint = useCallback(
    async (section: SectionType) => {
      try {
        const orchestrator = getCameraOrchestrator();
        setSection(section);
        await orchestrator.flyToWaypoint(section);
      } catch (error) {
        console.error('Waypoint flight failed:', error);
      }
    },
    [setSection]
  );

  const resetToHero = useCallback(async () => {
    try {
      const orchestrator = getCameraOrchestrator();
      await orchestrator.resetToHero(true);
    } catch (error) {
      console.error('Reset to hero failed:', error);
    }
  }, []);

  return {
    flyToWaypoint,
    resetToHero,
  };
}
