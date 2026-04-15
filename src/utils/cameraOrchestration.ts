// GSAP Camera Orchestration
// Smooth, cinematic camera transitions between waypoints

import gsap from 'gsap';
import * as THREE from 'three';
import { getWaypoint, useExperienceStore } from '../store/experienceStore';
import type { SectionType } from '../store/experienceStore';

interface CameraTransitionConfig {
  duration?: number;
  ease?: string;
  onStart?: () => void;
  onComplete?: () => void;
}

export class CameraOrchestrator {
  private camera: THREE.PerspectiveCamera;
  private timeline: gsap.core.Timeline | null = null;
  private targetLookAt: THREE.Vector3 = new THREE.Vector3();

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
  }

  /**
   * Animates camera to a specific waypoint using GSAP
   */
  public flyToWaypoint(
    section: SectionType,
    config: CameraTransitionConfig = {}
  ): Promise<void> {
    return new Promise((resolve) => {
      const waypoint = getWaypoint(section);
      const { duration = waypoint.duration, ease = 'power2.inOut' } = config;

      const experienceStore = useExperienceStore.getState();

      // Kill existing timeline
      if (this.timeline) {
        this.timeline.kill();
      }

      // Create new timeline
      this.timeline = gsap.timeline({
        onStart: () => {
          experienceStore.setTransitioning(true);
          config.onStart?.();
        },
        onComplete: () => {
          experienceStore.setTransitioning(false);
          config.onComplete?.();
          resolve();
        },
      });

      // Animate camera position
      this.timeline.to(
        this.camera.position,
        {
          x: waypoint.position[0],
          y: waypoint.position[1],
          z: waypoint.position[2],
          duration,
          ease,
        },
        0
      );

      // Simultaneously animate lookAt target with a subtle parallax
      this.timeline.to(
        this.targetLookAt,
        {
          x: waypoint.lookAt[0],
          y: waypoint.lookAt[1],
          z: waypoint.lookAt[2],
          duration: duration * 1.1, // Slightly longer for easing arrival
          ease,
        },
        0
      );

      // Update the actual lookAt each frame
      this.timeline.eventCallback('onUpdate', () => {
        this.camera.lookAt(
          this.targetLookAt.x,
          this.targetLookAt.y,
          this.targetLookAt.z
        );
      });

      // Store new camera state in Zustand
      experienceStore.setCameraPosition(waypoint.position);
      experienceStore.setCameraLookAt(waypoint.lookAt);
    });
  }

  /**
   * Orbit around a point (useful for hero intro)
   */
  public orbitAround(
    target: [number, number, number],
    radius: number,
    duration: number = 4,
    ease: string = 'power1.inOut'
  ): void {
    if (this.timeline) {
      this.timeline.kill();
    }

    this.timeline = gsap.timeline({ repeat: -1 });

    this.timeline.to(
      this.camera.position,
      {
        x: `+=${radius * 2}`,
        z: `+=${radius * 2}`,
        duration,
        ease,
      },
      0
    );

    this.timeline.eventCallback('onUpdate', () => {
      this.camera.lookAt(target[0], target[1], target[2]);
    });
  }

  /**
   * Smooth pan to a specific position without full transition
   */
  public panTo(
    position: [number, number, number],
    duration: number = 0.8,
    ease: string = 'power2.inOut'
  ): Promise<void> {
    return new Promise((resolve) => {
      if (this.timeline) {
        this.timeline.kill();
      }

      this.timeline = gsap.timeline({
        onComplete: resolve,
      });

      this.timeline.to(
        this.camera.position,
        {
          x: position[0],
          y: position[1],
          z: position[2],
          duration,
          ease,
        }
      );

      this.timeline.eventCallback('onUpdate', () => {
        this.camera.lookAt(0, 0, 0);
      });
    });
  }

  /**
   * Zoom in/out smoothly
   */
  public zoom(
    targetDistance: number,
    duration: number = 1,
    ease: string = 'power2.inOut'
  ): Promise<void> {
    return new Promise((resolve) => {
      const direction = this.camera.position.clone().normalize();
      const targetPos = direction.multiplyScalar(targetDistance);

      this.panTo([targetPos.x, targetPos.y, targetPos.z], duration, ease)
        .then(resolve);
    });
  }

  /**
   * Stagger multiple camera actions (sequenced)
   */
  public staggerSequence(
    sections: SectionType[],
    delayBetween: number = 0.5
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const runSequence = async () => {
        try {
          for (const section of sections) {
            await this.flyToWaypoint(section);
            await new Promise((resume) => setTimeout(resume, delayBetween * 1000));
          }
          resolve();
        } catch (error) {
          reject(error);
        }
      };

      void runSequence();
    });
  }

  /**
   * Reset camera to hero position with optional animation
   */
  public resetToHero(animate: boolean = true): Promise<void> {
    if (animate) {
      return this.flyToWaypoint('hero');
    } else {
      const hero = getWaypoint('hero');
      this.camera.position.set(...hero.position);
      this.camera.lookAt(...hero.lookAt);
      return Promise.resolve();
    }
  }

  /**
   * Kill all active animations
   */
  public kill(): void {
    if (this.timeline) {
      this.timeline.kill();
      this.timeline = null;
    }
  }
}

/**
 * Singleton instance for global access
 */
let orchestrator: CameraOrchestrator | null = null;

export function initCameraOrchestrator(camera: THREE.PerspectiveCamera): CameraOrchestrator {
  if (!orchestrator) {
    orchestrator = new CameraOrchestrator(camera);
  }
  return orchestrator;
}

export function getCameraOrchestrator(): CameraOrchestrator {
  if (!orchestrator) {
    throw new Error('Camera orchestrator not initialized. Call initCameraOrchestrator first.');
  }
  return orchestrator;
}
