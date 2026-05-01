import * as THREE from 'three';

/**
 * Common Three.js helper functions for the Baspa Travels project
 */

export const disposeObject = (obj: any) => {
  if (obj.geometry) obj.geometry.dispose();
  if (obj.material) {
    if (Array.isArray(obj.material)) {
      obj.material.forEach((mat: any) => mat.dispose());
    } else {
      obj.material.dispose();
    }
  }
};

export { THREE };
