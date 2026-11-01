import type { Project } from '@/data/projects';
import { firstSegment } from './text';

/** Two short lines under a row title, like the date stack in the reference. */
export function projectMeta(p: Project): string[] {
  return [firstSegment(p.status), p.year ?? p.type.split('/')[0].trim()];
}

export function indexLabel(i: number) {
  return String(i + 1).padStart(2, '0');
}
