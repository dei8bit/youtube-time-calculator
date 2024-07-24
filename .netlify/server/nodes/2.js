import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.2FcXRcS9.js","_app/immutable/chunks/scheduler.8UzwlJ2i.js","_app/immutable/chunks/index.D-gxanXw.js"];
export const stylesheets = ["_app/immutable/assets/2.BWuCfIJR.css"];
export const fonts = [];
