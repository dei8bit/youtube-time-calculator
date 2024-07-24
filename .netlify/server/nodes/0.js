

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.AjCy0jji.js","_app/immutable/chunks/scheduler.8UzwlJ2i.js","_app/immutable/chunks/index.D-gxanXw.js"];
export const stylesheets = [];
export const fonts = [];
