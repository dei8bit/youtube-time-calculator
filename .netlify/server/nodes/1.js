

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Dlb-hCNo.js","_app/immutable/chunks/scheduler.8UzwlJ2i.js","_app/immutable/chunks/index.D-gxanXw.js","_app/immutable/chunks/entry.SdGI89k5.js"];
export const stylesheets = [];
export const fonts = [];
