import { c as create_ssr_component, d as createEventDispatcher, e as escape, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css$2 = {
  code: "button.svelte-1ii4t2v{border:none;padding:8px;min-width:50px;max-width:70px;min-height:32px;max-height:48px;border-radius:3px;background:none;cursor:pointer;transition:0.2s;mix-blend-mode:color-burn;background:#ffa3a39a;border:1px  solid #352e4941}button.svelte-1ii4t2v:hover{box-shadow:2px 2px 4px #000000;box-shadow:0px 4px 4px rgba(53, 46, 73, 0.5)}button.svelte-1ii4t2v:active{background-color:#5b8be9}.availability.svelte-1ii4t2v{cursor:not-allowed}",
  map: null
};
const ButtonVelocity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { velocity } = $$props;
  let { availability } = $$props;
  if ($$props.velocity === void 0 && $$bindings.velocity && velocity !== void 0)
    $$bindings.velocity(velocity);
  if ($$props.availability === void 0 && $$bindings.availability && availability !== void 0)
    $$bindings.availability(availability);
  $$result.css.add(css$2);
  return `<button ${availability ? "disabled" : ""} class="${["svelte-1ii4t2v", availability ? "availability" : ""].join(" ").trim()}">${escape(velocity)}X</button>`;
});
const css$1 = {
  code: 'section.svelte-m54p7m.svelte-m54p7m{display:flex;flex-direction:column;align-items:center;margin-top:8px}.shift-row.svelte-m54p7m.svelte-m54p7m{display:flex;flex-direction:column}article.svelte-m54p7m.svelte-m54p7m{display:flex;align-items:center;flex-direction:row;margin:4px}article.svelte-m54p7m>div.svelte-m54p7m{display:flex;flex-direction:column;align-items:center}p.svelte-m54p7m.svelte-m54p7m{line-height:2;margin:0}div.svelte-m54p7m.svelte-m54p7m{display:flex;padding:0}.symbols.svelte-m54p7m.svelte-m54p7m{font-size:24px;line-height:1;font-weight:600;text-align:center;color:rgb(66, 65, 65)}.key.svelte-m54p7m.svelte-m54p7m{text-align:center;font-size:20px;font-family:Calibri, "Trebuchet MS", sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0px 8px;min-width:32px;width:fit-content;height:30px;background:#dbdbdb;box-shadow:2px 4px 2px rgba(0, 0, 0, 0.6);transform:translate(-2px, -2px);transition:all 100ms;border-top:2.5px solid;border-radius:6px;background:linear-gradient(white, white) padding-box,\r\n            linear-gradient(to right, rgba(166, 166, 166, 1), rgba(210, 210, 210, 1)) border-box;border:4px solid transparent;opacity:0.7}.holding.svelte-m54p7m.svelte-m54p7m{transform:translate(0px, 0px);box-shadow:none;opacity:1}',
  map: null
};
const Shorcuts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return ` <section class="svelte-m54p7m"><div class="shift-row svelte-m54p7m"><p class="${["key svelte-m54p7m", ""].join(" ").trim()}" data-svelte-h="svelte-1glmy71">shift</p> <p class="symbols svelte-m54p7m" data-svelte-h="svelte-17ouv47">+</p></div> <div class="svelte-m54p7m"><article class="svelte-m54p7m"><div class="svelte-m54p7m"><p class="${["key svelte-m54p7m", ""].join(" ").trim()}" data-svelte-h="svelte-50tt8l">r</p> <p class="svelte-m54p7m" data-svelte-h="svelte-pm1wn3">Reset</p></div></article> <article class="svelte-m54p7m"><div class="svelte-m54p7m"><p class="${["key svelte-m54p7m", ""].join(" ").trim()}" data-svelte-h="svelte-uwl6d7">1</p> <p class="svelte-m54p7m" data-svelte-h="svelte-17clxd5">0.25x</p></div></article> <article class="svelte-m54p7m"><div class="svelte-m54p7m"><p class="${["key svelte-m54p7m", ""].join(" ").trim()}" data-svelte-h="svelte-1mhb4f9">2</p> <p class="svelte-m54p7m" data-svelte-h="svelte-1vzb0p5">0.50x</p></div></article> <article class="svelte-m54p7m"><div class="svelte-m54p7m"><p class="${["key svelte-m54p7m", ""].join(" ").trim()}" data-svelte-h="svelte-vn5j8f">3</p> <p class="svelte-m54p7m" data-svelte-h="svelte-17upqha">0.75x</p></div></article> <article class="svelte-m54p7m"><div class="svelte-m54p7m"><p class="${["key svelte-m54p7m", ""].join(" ").trim()}" data-svelte-h="svelte-tn6n5x">4</p> <p class="svelte-m54p7m" data-svelte-h="svelte-17cjvwu">1.25x</p></div></article> <article class="svelte-m54p7m"><div class="svelte-m54p7m"><p class="${["key svelte-m54p7m", ""].join(" ").trim()}" data-svelte-h="svelte-91kc83">5</p> <p class="svelte-m54p7m" data-svelte-h="svelte-1vzbm9a">1.50x</p></div></article> <article class="svelte-m54p7m"><article class="svelte-m54p7m"><div class="svelte-m54p7m"><p class="${["key svelte-m54p7m", ""].join(" ").trim()}" data-svelte-h="svelte-u46wgd">6</p> <p class="svelte-m54p7m" data-svelte-h="svelte-17urrxl">1.75x</p></div></article> <article class="svelte-m54p7m"><div class="svelte-m54p7m"><p class="${["key svelte-m54p7m", ""].join(" ").trim()}" data-svelte-h="svelte-uczxrz">7</p> <p class="svelte-m54p7m" data-svelte-h="svelte-9avov6">2x</p></div></article></article></div> </section>`;
});
const css = {
  code: '.center.svelte-1il7inf.svelte-1il7inf{display:flex;flex-direction:column;align-items:center}section.svelte-1il7inf.svelte-1il7inf{display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;padding:12px;gap:10px;position:relative;min-width:500px;max-width:600px;border:1px solid rgba(255, 255, 255, 0.4);background:linear-gradient(\n            90deg,\n            rgba(252, 68, 189, 0.6) 0%,\n            rgba(224, 216, 17, 0.492) 54.5%,\n            rgba(0, 185, 96, 0.6) 100%\n        );border:1px solid rgba(255, 255, 255, 0.4);backdrop-filter:blur(8px);border-radius:16px}h3.svelte-1il7inf.svelte-1il7inf{font-size:30px;color:#5b8be9;margin:0;user-select:none}img.svelte-1il7inf.svelte-1il7inf{position:relative;border-radius:12px;margin:4px;height:120px;cursor:pointer;transition:0.2s;aspect-ratio:4/3}img.svelte-1il7inf.svelte-1il7inf:hover{opacity:0.8}.finalTimeContainer.svelte-1il7inf p.svelte-1il7inf{display:flex;flex-direction:column;min-width:150px;align-items:center;line-height:0}.final_timeSkeleton.svelte-1il7inf.svelte-1il7inf{display:flex;align-items:center;user-select:none;justify-content:center;min-width:140px;max-width:280px;min-height:46px;width:130px;font-family:"Lucida Sans", "Lucida Sans Regular", "Lucida Grande",\n            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;background:linear-gradient(\n            90deg,\n            rgba(240, 109, 148, 0.438) 0%,\n            rgba(81, 68, 222, 0.36) 100%\n        );mix-blend-mode:normal;box-shadow:inset 0px 4px 4px rgba(46, 3, 72, 0.5);border-radius:12px}.finalTime.svelte-1il7inf.svelte-1il7inf{display:flex;flex-direction:column;align-items:center;padding:4px;width:130px;backdrop-filter:blur(5.9px);-webkit-backdrop-filter:blur(5.9px);background:linear-gradient(\n            90deg,\n            rgba(240, 109, 148, 0.438) 0%,\n            rgba(81, 68, 222, 0.36) 100%\n        );mix-blend-mode:normal;box-shadow:inset 0px 4px 4px rgba(46, 3, 72, 0.5);border-radius:12px}.finalTime.svelte-1il7inf h4.svelte-1il7inf{font-weight:100;font-size:20px;margin:3px;font-family:"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n            "Lucida Sans", Arial, sans-serif}.finalTimeResult.svelte-1il7inf.svelte-1il7inf{color:black;font-size:30px;font-weight:100;padding:0;margin:0;font-family:"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n            "Lucida Sans", Arial, sans-serif;-webkit-text-stroke-width:1px}.result.svelte-1il7inf.svelte-1il7inf{display:flex}.initialClass.svelte-1il7inf.svelte-1il7inf{color:black;opacity:0.6;font-size:16px;font-weight:600;text-shadow:0px 4px 4px rgba(17, 8, 41, 0.6)}.lose.svelte-1il7inf.svelte-1il7inf{text-shadow:0px 0px 5px #df3618,\n            0px 0px 5px #df3618,\n            0px 0px 5px #df3618;color:rgb(255, 255, 255)}.win.svelte-1il7inf.svelte-1il7inf{text-shadow:0px 0px 5px #4dd431,\n            0px 0px 5px #4dd431,\n            0px 0px 5px #4dd431;color:rgb(255, 255, 255)}input.svelte-1il7inf.svelte-1il7inf{height:30px;text-align:center;font-size:16px;padding:4px;cursor:pointer;border:none;background:#90e0b871;mix-blend-mode:multiply;box-shadow:inset 0px 4px 4px rgba(46, 3, 72, 0.5);border-radius:16px;transition:all 0.5s;opacity:0.7}input.svelte-1il7inf.svelte-1il7inf:hover{opacity:1}input.svelte-1il7inf.svelte-1il7inf:focus-visible{outline:none}input.svelte-1il7inf.svelte-1il7inf:focus{opacity:1}.timeInputs.svelte-1il7inf.svelte-1il7inf{width:70px}.urlInput.svelte-1il7inf.svelte-1il7inf{min-width:320px;display:flex;flex-direction:column;justify-content:center;align-items:center;border:none}.vibrate.svelte-1il7inf.svelte-1il7inf{-webkit-animation:svelte-1il7inf-vibrate 2s linear infinite both;animation:svelte-1il7inf-vibrate 2s linear infinite both}@-webkit-keyframes svelte-1il7inf-vibrate{0%{-webkit-transform:translate(0);transform:translate(0)}20%{-webkit-transform:translate(-2px, 2px);transform:translate(-2px, 2px)}40%{-webkit-transform:translate(-2px, -2px);transform:translate(-2px, -2px)}60%{-webkit-transform:translate(2px, 2px);transform:translate(2px, 2px)}80%{-webkit-transform:translate(2px, -2px);transform:translate(2px, -2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}@keyframes svelte-1il7inf-vibrate{0%{-webkit-transform:translate(0);transform:translate(0)}20%{-webkit-transform:translate(-2px, 2px);transform:translate(-2px, 2px)}40%{-webkit-transform:translate(-2px, -2px);transform:translate(-2px, -2px)}60%{-webkit-transform:translate(2px, 2px);transform:translate(2px, 2px)}80%{-webkit-transform:translate(2px, -2px);transform:translate(2px, -2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}svg.svelte-1il7inf.svelte-1il7inf{width:40px;transition:all 3s;cursor:pointer}svg.svelte-1il7inf.svelte-1il7inf:hover{transform:rotate(-1080deg)}@media only screen and (width <=600px){section.svelte-1il7inf.svelte-1il7inf{width:fit-content}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.yt_apiKey;
  let thumbnailURL;
  let inputURL = "";
  let hours = "";
  let minutes = "";
  let seconds = "";
  let finalTime = "FINAL TIME";
  let availability = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    {
      hours = hours.replace(/\D/g, "");
    }
  }
  {
    {
      minutes = minutes.replace(/\D/g, "");
    }
  }
  {
    {
      seconds = seconds.replace(/\D/g, "");
    }
  }
  {
    {
      if (hours === "" && minutes === "" && seconds === "") {
        availability = true;
      } else {
        availability = false;
      }
    }
  }
  return ` <section class="svelte-1il7inf">${`<img${add_attribute("src", thumbnailURL, 0)} alt="" class="svelte-1il7inf">`} <input class="urlInput svelte-1il7inf" type="text" placeholder="URL"${add_attribute("value", inputURL, 0)}> <div><input class="timeInputs svelte-1il7inf" type="text" placeholder="hours"${add_attribute("value", hours, 0)}> <input class="timeInputs svelte-1il7inf" type="text" placeholder="minutes"${add_attribute("value", minutes, 0)}> <input class="timeInputs svelte-1il7inf" type="text" placeholder="seconds"${add_attribute("value", seconds, 0)}>   <svg width="24px" height="24px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" class="svelte-1il7inf"><g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"><path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path><path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path></g></svg></div> ${!(hours != 0 || minutes != 0 || seconds != 0) ? `<h3 class="svelte-1il7inf" data-svelte-h="svelte-ckj38k">...</h3>` : `<h3 class="svelte-1il7inf">${escape(hours > 9 ? `${hours}` : `0${hours || 0}`)}:${escape(minutes > 9 ? `${minutes}` : `0${minutes || 0}`)}:${escape(seconds > 9 ? `${seconds}` : `0${seconds || 0}`)}</h3>`} <div>${validate_component(ButtonVelocity, "ButtonVelocity").$$render($$result, { availability, velocity: 0.25 }, {}, {})} ${validate_component(ButtonVelocity, "ButtonVelocity").$$render($$result, { availability, velocity: 0.5 }, {}, {})} ${validate_component(ButtonVelocity, "ButtonVelocity").$$render($$result, { availability, velocity: 0.75 }, {}, {})} ${validate_component(ButtonVelocity, "ButtonVelocity").$$render($$result, { availability, velocity: 1.25 }, {}, {})} ${validate_component(ButtonVelocity, "ButtonVelocity").$$render($$result, { availability, velocity: 1.5 }, {}, {})} ${validate_component(ButtonVelocity, "ButtonVelocity").$$render($$result, { availability, velocity: 1.75 }, {}, {})} ${validate_component(ButtonVelocity, "ButtonVelocity").$$render($$result, { availability, velocity: 2 }, {}, {})}</div> <div class="finalTimeContainer svelte-1il7inf">${`<h4 class="initialClass final_timeSkeleton svelte-1il7inf">${escape(finalTime)}</h4>`} ${`<p class="initialClass svelte-1il7inf" data-svelte-h="svelte-18czvx5">time lost or win</p>`}</div></section> ${validate_component(Shorcuts, "Shorcuts").$$render($$result, {}, {}, {})} <footer class="center svelte-1il7inf" data-svelte-h="svelte-1gv9t2z"><a href="https://www.buymeacoffee.com/dei8bit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" class="svelte-1il7inf"></a> <h4>made with love by: <a target="_blank" href="https://github.com/dei8bit">dei8bit</a></h4> </footer>`;
});
export {
  Page as default
};
