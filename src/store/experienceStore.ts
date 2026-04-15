// Zustand Store - Immersive Experience State Management

import { create } from 'zustand';

export type SectionType = 'hero' | 'about' | 'projects' | 'contact';

export interface Waypoint {
  section: SectionType;
  position: [number, number, number];
  lookAt: [number, number, number];
  duration: number; // Camera transition duration in seconds
}

export interface ExperienceState {
  // Navigation
  currentSection: SectionType;
  isTransitioning: boolean;
  isLoaded: boolean;
  hasSeenIntro: boolean;

  // Camera
  cameraPosition: [number, number, number];
  cameraLookAt: [number, number, number];

  // Shader state
  shaderState: number; // 0-3 for state-based colors
  shaderQuality: number; // 0-1 for performance scaling

  // Performance
  targetFps: number;
  currentFps: number;
  isPerformanceOptimizing: boolean;

  // Theme
  isDarkMode: boolean;

  // Actions
  setSection: (section: SectionType) => void;
  setTransitioning: (isTransitioning: boolean) => void;
  setLoaded: (isLoaded: boolean) => void;
  setCameraPosition: (position: [number, number, number]) => void;
  setCameraLookAt: (lookAt: [number, number, number]) => void;
  setShaderState: (state: number) => void;
  setShaderQuality: (quality: number) => void;
  setCurrentFps: (fps: number) => void;
  toggleDarkMode: () => void;
  markIntroSeen: () => void;
}

export const useExperienceStore = create<ExperienceState>((set) => ({
  // Initial state
  currentSection: 'hero',
  isTransitioning: false,
  isLoaded: false,
  hasSeenIntro: false,

  cameraPosition: [0, 0, 3.5],
  cameraLookAt: [0, 0, 0],

  shaderState: 0,
  shaderQuality: 1.0,

  targetFps: 60,
  currentFps: 60,
  isPerformanceOptimizing: false,

  isDarkMode: true,

  // Actions
  setSection: (section: SectionType) =>
    set(() => {
      // Map section to shader state
      const stateMap: Record<SectionType, number> = {
        hero: 0,
        about: 1,
        projects: 2,
        contact: 3,
      };

      return {
        currentSection: section,
        shaderState: stateMap[section],
      };
    }),

  setTransitioning: (isTransitioning) => set({ isTransitioning }),

  setLoaded: (isLoaded) => set({ isLoaded }),

  setCameraPosition: (position) => set({ cameraPosition: position }),

  setCameraLookAt: (lookAt) => set({ cameraLookAt: lookAt }),

  setShaderState: (state) => set({ shaderState: state }),

  setShaderQuality: (quality) =>
    set({
      shaderQuality: Math.max(0, Math.min(1, quality)),
      isPerformanceOptimizing: quality < 0.8,
    }),

  setCurrentFps: (fps) =>
    set({
      currentFps: fps,
      // Auto-scale shader quality if FPS drops
      shaderQuality: fps < 45 ? 0.6 : fps < 30 ? 0.3 : 1.0,
    }),

  toggleDarkMode: () => set((_state: ExperienceState) => ({ isDarkMode: !_state.isDarkMode })),

  markIntroSeen: () => set({ hasSeenIntro: true }),
}));

/**
 * Predefined waypoints for the experience
 */
export const WAYPOINTS: Record<SectionType, Waypoint> = {
  hero: {
    section: 'hero',
    position: [0, 0, 3.5],
    lookAt: [0, 0, 0],
    duration: 1.2,
  },
  about: {
    section: 'about',
    position: [-4, -1.5, 2],
    lookAt: [-4, 0, 0],
    duration: 1.2,
  },
  projects: {
    section: 'projects',
    position: [4, -1.5, 2],
    lookAt: [4, 0, 0],
    duration: 1.2,
  },
  contact: {
    section: 'contact',
    position: [0, 3.5, 2.5],
    lookAt: [0, 2, 0],
    duration: 1.5,
  },
};

/**
 * Get waypoint for a given section
 */
export function getWaypoint(section: SectionType): Waypoint {
  return WAYPOINTS[section];
}
