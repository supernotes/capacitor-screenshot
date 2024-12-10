import type { ScreenshotPlugin } from './definitions';
import { registerPlugin } from '@capacitor/core';

const Screenshot = registerPlugin<ScreenshotPlugin>('Screenshot', {
  web: () => import('./web.js').then(m => new m.ScreenshotWeb()),
});

export * from './definitions.js';
export { Screenshot };
