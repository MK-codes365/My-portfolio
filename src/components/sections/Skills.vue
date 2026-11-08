<template>
  <section
    id="skills-section"
    class="common-padding relative z-10 overflow-hidden py-20 select-none"
  >
    <!-- Section Header -->
    <div class="mb-14 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:pr-16">
      <div>
        <div class="flex items-center gap-3">
          <span class="inline-block size-3 rounded-full bg-[#a3e635] animate-pulse"></span>
          <p class="font-mono text-sm uppercase tracking-widest text-[#a3e635]">
            ( TECHNICAL ARSENAL )
          </p>
        </div>
        <h3
          id="skills-title"
          class="heading-1-alt font-fancy mt-3 text-flax-smoke-100 uppercase"
        >
          Skills &amp; Technologies
        </h3>
      </div>
      <p class="max-w-md font-mono text-xs text-flax-smoke-400 sm:text-sm">
        A curated suite of programming languages, modern frameworks, robust backends, and cloud tools engineered for high performance and scale.
      </p>
    </div>

    <!-- Category Grid -->
    <div
      ref="gridRef"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="cat in categories"
        :key="cat.name"
        class="skill-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-flax-smoke-800/70 bg-[#121310]/95 p-6 backdrop-blur-md transition-all duration-500 hover:border-flax-smoke-500/60 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]"
        :style="{ '--accent': cat.accent }"
      >
        <!-- Background Ambient Glow -->
        <div
          class="pointer-events-none absolute -top-24 -right-24 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25"
          :style="{ backgroundColor: cat.accent }"
        ></div>

        <div>
          <!-- Category Header -->
          <div class="flex items-center justify-between border-b border-flax-smoke-800/60 pb-4">
            <div class="flex items-center gap-2.5">
              <span
                class="size-2 rounded-full"
                :style="{ backgroundColor: cat.accent }"
              ></span>
              <h4
                class="font-fancy text-lg font-bold tracking-wide"
                :style="{ color: cat.accent }"
              >
                {{ cat.name }}
              </h4>
            </div>
            <span
              class="rounded-full border border-flax-smoke-800 bg-[#181914] px-2.5 py-0.5 font-mono text-xs font-bold"
              :style="{ color: cat.accent, borderColor: cat.accent + '44' }"
            >
              {{ cat.skills.length }}
            </span>
          </div>

          <!-- Skills Tiles Grid -->
          <div
            class="grid gap-3 pt-5"
            :class="cat.skills.length === 2 ? 'grid-cols-2' : 'grid-cols-3'"
          >
            <div
              v-for="s in cat.skills"
              :key="s.name"
              class="group/item relative flex flex-col items-center justify-center rounded-xl border border-flax-smoke-800/50 bg-[#181914]/80 p-3.5 transition-all duration-300 hover:-translate-y-1.5 hover:border-flax-smoke-600 hover:bg-[#20211a] hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              <!-- Icon Container -->
              <div
                class="flex size-11 items-center justify-center transition-transform duration-300 group-hover/item:scale-115"
                v-html="s.svg"
              ></div>

              <!-- Label -->
              <span
                class="mt-2 text-center font-mono text-[11px] font-medium tracking-wide text-flax-smoke-300 transition-colors duration-200 group-hover/item:text-flax-smoke-50"
              >
                {{ s.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Footer Tagline / Indicator -->
        <div class="mt-5 flex items-center justify-between border-t border-flax-smoke-800/40 pt-3 text-[10px] font-mono text-flax-smoke-500 uppercase">
          <span>Ready for Production</span>
          <span class="transition-transform duration-300 group-hover:translate-x-1" :style="{ color: cat.accent }">
            &rarr;
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const gridRef = ref<HTMLElement | null>(null);

  // High quality vector SVG icons
  const icons = {
    html5: `<svg viewBox="0 0 24 24" class="size-9 fill-[#e34f26]"><path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.6 5.8H5.9l.4 4.5h12.4l-.5 5.5-5.8 1.6-5.8-1.6-.3-3.3H3.8l.5 5.8L12 21.6l7.7-2.3 1.4-13.5z"/></svg>`,
    css3: `<svg viewBox="0 0 24 24" class="size-9 fill-[#1572b6]"><path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.6 5.8H4.9l.4 4.5h13.2l-.5 5.5-6 1.6-6-1.6-.4-3.3H3.1l.6 5.8 8.3 2.3 8.3-2.3 1.4-13.5z"/></svg>`,
    js: `<svg viewBox="0 0 24 24" class="size-9"><rect width="24" height="24" rx="3" fill="#f7df1e"/><path fill="#000" d="M16.5 19c-1.4 0-2.4-.7-2.9-1.8l1.6-.9c.3.6.7 1 1.3 1 .7 0 1.1-.4 1.1-1.2v-6.3h2v6.3c0 1.9-1.1 2.9-3.1 2.9zm-6.7 0c-2.1 0-3.3-1.2-3.3-3h2c0 .9.5 1.3 1.3 1.3.7 0 1.2-.4 1.2-.9 0-.6-.4-.8-1.4-1.2l-.7-.3c-1.6-.6-2.5-1.4-2.5-2.8 0-1.7 1.3-2.9 3.2-2.9 1.8 0 3 1 3.1 2.6h-2c-.1-.7-.5-1-1.1-1-.6 0-1 .3-1 .8 0 .5.3.7 1.2 1l.7.3c1.9.7 2.7 1.5 2.7 3 0 1.8-1.3 3.1-3.2 3.1z"/></svg>`,
    ts: `<svg viewBox="0 0 24 24" class="size-9"><rect width="24" height="24" rx="3" fill="#3178c6"/><path fill="#fff" d="M12.8 17.6c-.6 0-1-.3-1.4-.7-.4-.5-.6-1.1-.6-1.9v-5.2h-2V8.4h2V6h1.7v2.4h2.3v1.4h-2.3v5c0 .5.1.8.3 1 .2.2.5.3.8.3.4 0 .7-.1.9-.3l.5 1.3c-.6.3-1.3.5-2.2.5zm5.7.1c-1.1 0-2-.3-2.6-.9-.6-.6-.9-1.4-.9-2.5 0-1.1.3-2 .9-2.6.6-.6 1.5-.9 2.6-.9 1.1 0 2 .3 2.6.9.6.6.9 1.4.9 2.5 0 1.1-.3 2-.9 2.6-.6.6-1.5.9-2.6.9zm0-1.4c.6 0 1.1-.2 1.4-.6.3-.4.5-1 .5-1.6 0-.6-.2-1.2-.5-1.6-.3-.4-.8-.6-1.4-.6-.6 0-1.1.2-1.4.6-.3.4-.5 1-.5 1.6 0 .6.2 1.2.5 1.6.3.4.8.6 1.4.6z"/></svg>`,
    react: `<svg viewBox="-11.5 -10.23174 23 20.46348" class="size-9"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
    nextjs: `<svg viewBox="0 0 180 180" class="size-9"><circle cx="90" cy="90" r="90" fill="#000"/><path fill="#fff" d="M149.5 163.5L78.6 72h-15v59.8h10.7V86.7l65.8 84.7c3.2-2.5 6.4-5.2 9.4-7.9zm-38.3-91.5V122h10.7V72h-10.7z"/></svg>`,
    c: `<svg viewBox="0 0 128 128" class="size-9"><path fill="#00599C" d="M117.5 33.5l-47.9-27.7c-3.5-2-7.8-2-11.3 0L10.5 33.5C7 35.5 4.8 39.3 4.8 43.3v55.3c0 4 2.2 7.8 5.7 9.8l47.9 27.7c3.5 2 7.8 2 11.3 0l47.9-27.7c3.5-2 5.7-5.8 5.7-9.8V43.3c-.1-4-2.3-7.8-5.8-9.8z"/><path fill="#fff" d="M64.6 35.8c-17.5 0-31.7 12.6-31.7 28.2 0 15.6 14.2 28.2 31.7 28.2 11.8 0 22.1-5.7 27.4-14.4l-11.3-6.5c-3.1 5.3-9.1 8.8-16.1 8.8-10.8 0-19.6-7.2-19.6-16.1s8.8-16.1 19.6-16.1c7 0 13 3.5 16.1 8.8l11.3-6.5c-5.3-8.7-15.6-14.4-27.4-14.4z"/></svg>`,
    cpp: `<svg viewBox="0 0 128 128" class="size-9"><path fill="#00599C" d="M117.5 33.5l-47.9-27.7c-3.5-2-7.8-2-11.3 0L10.5 33.5C7 35.5 4.8 39.3 4.8 43.3v55.3c0 4 2.2 7.8 5.7 9.8l47.9 27.7c3.5 2 7.8 2 11.3 0l47.9-27.7c3.5-2 5.7-5.8 5.7-9.8V43.3c-.1-4-2.3-7.8-5.8-9.8z"/><path fill="#fff" d="M64 35.8c-17.5 0-31.7 12.6-31.7 28.2 0 15.6 14.2 28.2 31.7 28.2 11.8 0 22.1-5.7 27.4-14.4l-11.3-6.5c-3.1 5.3-9.1 8.8-16.1 8.8-10.8 0-19.6-7.2-19.6-16.1s8.8-16.1 19.6-16.1c7 0 13 3.5 16.1 8.8l11.3-6.5C86.1 41.5 75.8 35.8 64 35.8zm27.8 20.3h4.6v5.8h5.8v4.6h-5.8v5.8h-4.6v-5.8H86v-4.6h5.8v-5.8zm18 0h4.6v5.8h5.8v4.6h-5.8v5.8h-4.6v-5.8h-5.8v-4.6h5.8v-5.8z"/></svg>`,
    python: `<svg viewBox="0 0 128 128" class="size-9"><path fill="#3776AB" d="M63.6 5.8c-26.6 0-25 11.5-25 11.5l.03 12h25.4v3.6H29.1S13 31.2 13 57.5c0 26.4 14.1 25.4 14.1 25.4h8.4v-11.8s-.5-14.1 13.9-14.1h24s13.3.2 13.3-13.1V20s2-14.2-23.1-14.2zm-13.8 7.3a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z"/><path fill="#FFD43B" d="M64.4 122.2c26.6 0 25-11.5 25-11.5l-.03-12H64v-3.6h34.9s16.1 1.7 16.1-24.6c0-26.4-14.1-25.4-14.1-25.4h-8.4v11.8s.5 14.1-13.9 14.1h-24s-13.3-.2-13.3 13.1v13.9s-2 14.2 23.1 14.2zm13.8-7.3a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z"/></svg>`,
    sql: `<svg viewBox="0 0 24 24" class="size-9 fill-[#00758F]"><path d="M12 2C6.5 2 2 3.8 2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6c0-2.2-4.5-4-10-4zm0 2c4.4 0 8 1.3 8 2s-3.6 2-8 2-8-1.3-8-2 3.6-2 8-2zm8 6c0 .7-3.6 2-8 2s-8-1.3-8-2V8.2c1.9 1.1 4.8 1.8 8 1.8s6.1-.7 8-1.8zm0 4c0 .7-3.6 2-8 2s-8-1.3-8-2v-1.8c1.9 1.1 4.8 1.8 8 1.8s6.1-.7 8-1.8zm0 4c0 .7-3.6 2-8 2s-8-1.3-8-2v-1.8c1.9 1.1 4.8 1.8 8 1.8s6.1-.7 8-1.8z"/></svg>`,
    tailwind: `<svg viewBox="0 0 24 24" class="size-9 fill-[#38bdf8]"><path d="M12 6c-4.4 0-7.3 2.2-8.8 6.6 1.8-2.2 3.9-3 6.3-2.3 1.3.4 2.2 1.4 3.3 2.4 1.7 1.8 3.7 3.8 8.2 3.8 4.4 0 7.3-2.2 8.8-6.6-1.8 2.2-3.9 3-6.3 2.3-1.3-.4-2.2-1.4-3.3-2.4C18.5 8 16.5 6 12 6zM3.2 13.5c-1.8 2.2-2.7 4.5-3.2 7 1.8-2.2 3.9-3 6.3-2.3 1.3.4 2.2 1.4 3.3 2.4 1.7 1.8 3.7 3.8 8.2 3.8 4.4 0 7.3-2.2 8.8-6.6-1.8 2.2-3.9 3-6.3 2.3-1.3-.4-2.2-1.4-3.3-2.4-1.7-1.8-3.7-3.8-8.2-3.8-2.8 0-5 1-6.6 3.1z"/></svg>`,
    bootstrap: `<svg viewBox="0 0 24 24" class="size-9"><rect width="24" height="24" rx="4" fill="#7952b3"/><path fill="#fff" d="M7 6h5.2c1.4 0 2.4.3 3.1 1 .6.6.9 1.4.9 2.4 0 1.2-.6 2.1-1.8 2.6 1.5.5 2.2 1.5 2.2 3 0 1.1-.4 2-1.1 2.7-.8.7-2 1.1-3.5 1.1H7V6zm2.4 4.9h2.6c.7 0 1.2-.1 1.6-.4.4-.3.6-.8.6-1.4 0-1.1-.7-1.7-2.1-1.7H9.4v3.5zm0 5.8h2.9c.8 0 1.4-.2 1.8-.5.4-.3.6-.9.6-1.6 0-1.2-.8-1.8-2.4-1.8H9.4v3.9z"/></svg>`,
    mui: `<svg viewBox="0 0 24 24" class="size-9 fill-[#007fff]"><path d="M0 2.475v10.39l3 1.718V4.208l6 3.442v10.404l3 1.718V7.65l6 3.442v10.404l6-3.442V7.65l-6-3.442-6 3.442-6-3.442L0 2.475zm18 6.942l3-1.718v6.942l-3 1.718V9.417z"/></svg>`,
    shadcn: `<svg viewBox="0 0 256 256" class="size-9 fill-none stroke-current text-white" stroke-width="20" stroke-linecap="round"><line x1="208" y1="128" x2="128" y2="208"/><line x1="192" y1="40" x2="40" y2="192"/></svg>`,
    figma: `<svg viewBox="0 0 38 57" class="size-9"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>`,
    sass: `<svg viewBox="0 0 24 24" class="size-9 fill-[#cc6699]"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.6 3.1 8.5 7.4 9.6-.1-.7-.1-1.5.1-2.2.3-1.2 1-2.1 1.9-2.9-.6-.2-1.2-.5-1.7-.9-1.8-1.5-1.9-3.9-.3-5.5 1.5-1.5 3.9-1.5 5.5 0 .2.2.4.4.5.6.8-.7 1.9-1 2.9-.7 1.3.4 2.2 1.6 2.3 2.9.1 1.7-.9 3.2-2.4 3.7 1.2.6 1.9 1.9 1.7 3.2-.2 1.4-1.3 2.5-2.7 2.8 4.7-.6 8.3-4.6 8.3-9.5 0-5.5-4.5-10-10-10z"/></svg>`,
    nodejs: `<svg viewBox="0 0 24 24" class="size-9 fill-[#339933]"><path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4zm-1.2 5.1c1.8 0 2.7.9 2.7 2.4v3.4h-1.5v-3.3c0-.8-.4-1.2-1.2-1.2-.8 0-1.3.5-1.3 1.3v3.2H8V9.5h1.5v1c.4-.7 1-1.1 1.3-1.1z"/></svg>`,
    express: `<svg viewBox="0 0 24 24" class="size-9 fill-white"><circle cx="12" cy="12" r="11" fill="#222"/><text x="12" y="16" fill="#fff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">ex</text></svg>`,
    restapi: `<svg viewBox="0 0 24 24" class="size-9 fill-none stroke-[#38bdf8]" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="3"/><circle cx="7" cy="12" r="1.5" fill="#38bdf8"/><path d="M11 9l4 6m0-6l-4 6"/></svg>`,
    mongodb: `<svg viewBox="0 0 24 24" class="size-9 fill-[#47A248]"><path d="M12 1.5c-.3 0-.5.2-.6.4C10.2 5.1 6 10.6 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4.4-4.2-9.9-5.4-13.1-.1-.2-.3-.4-.6-.4zm0 2.8c1.3 3 4.2 7.8 4.2 10.7 0 2.3-1.9 4.2-4.2 4.2V4.3z"/></svg>`,
    mysql: `<svg viewBox="0 0 24 24" class="size-9 fill-[#00758F]"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c-3 0-5.5-1.5-6.5-3.8 1.5.3 3.2.1 4.5-.6 1.8-1 2.8-2.8 2.8-4.8 0-.4 0-.8-.1-1.2 1.8.8 3.3 2.5 3.3 4.5 0 3.3-1.8 5.9-4 5.9z"/></svg>`,
    git: `<svg viewBox="0 0 24 24" class="size-9 fill-[#F05032]"><path d="M21.6 10.8l-8.4-8.4c-.8-.8-2-.8-2.8 0L8.8 4l3.5 3.5c.8-.3 1.8 0 2.4.6.6.6.8 1.5.5 2.4l3.4 3.4c.8-.3 1.8 0 2.4.6.8.8.8 2 0 2.8s-2 .8-2.8 0c-.7-.7-.8-1.7-.4-2.5l-3.2-3.2v5.2c.4.3.7.8.7 1.4 0 1.1-.9 2-2 2s-2-.9-2-2c0-.6.3-1.1.7-1.4V8.4c-.4-.3-.7-.8-.7-1.4 0-.7.4-1.3 1-1.7L8.8 4 2.4 10.4c-.8.8-.8 2 0 2.8l8.4 8.4c.8.8 2 .8 2.8 0l8-8c.8-.8.8-2 0-2.8z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" class="size-9 fill-white"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>`,
    docker: `<svg viewBox="0 0 24 24" class="size-9 fill-[#2496ED]"><path d="M13.9 11.2h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.8 0h2.2v2.2H8.3zm-2.8 0h2.2v2.2H5.5zm8.4-2.8h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.8 0h2.2v2.2H8.3zm5.6-2.8h2.2v2.2h-2.2zm8.8 7.3c-.3-.2-1.3-.4-2.5-.2-.2-.8-.7-1.5-1.3-2l-.5-.4-.4.5c-.6.8-.7 1.8-.4 2.8-.7.4-1.6.6-2.7.6H1.5c-.3 1.3.1 2.7.9 3.8 1.2 1.7 3.2 2.6 6 2.6 6.3 0 10.9-3.7 12.3-7.5.5 0 1-.1 1.3-.2z"/></svg>`,
    githubActions: `<svg viewBox="0 0 24 24" class="size-9"><path fill="#2088FF" d="M10.8 2.2a1.2 1.2 0 0 0-1.2 1v1.3a8 8 0 0 0-1.8.8l-1.1-.7a1.2 1.2 0 0 0-1.5.3L3.8 7a1.2 1.2 0 0 0 .3 1.5l1.1.7a8.2 8.2 0 0 0 0 2.2l-1.1.7a1.2 1.2 0 0 0-.3 1.5l1.4 2.1a1.2 1.2 0 0 0 1.5.3l1.1-.7c.6.4 1.2.6 1.8.8v1.3a1.2 1.2 0 0 0 1.2 1h2.4a1.2 1.2 0 0 0 1.2-1v-1.3c.6-.2 1.2-.4 1.8-.8l1.1.7a1.2 1.2 0 0 0 1.5-.3l1.4-2.1a1.2 1.2 0 0 0-.3-1.5l-1.1-.7a8.2 8.2 0 0 0 0-2.2l1.1-.7a1.2 1.2 0 0 0 .3-1.5L18.6 5a1.2 1.2 0 0 0-1.5-.3l-1.1.7a8 8 0 0 0-1.8-.8V3.2a1.2 1.2 0 0 0-1.2-1zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>`,
    cicd: `<svg viewBox="0 0 24 24" class="size-9 fill-none stroke-[#2088FF]" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M6 9v6a3 3 0 0 0 3 3h6m0-12H9a3 3 0 0 0-3 3"/></svg>`,
    vercel: `<svg viewBox="0 0 24 24" class="size-9 fill-white"><path d="M12 1L24 22H0L12 1z"/></svg>`,
    php: `<svg viewBox="0 0 128 128" class="size-9"><ellipse cx="64" cy="64" rx="60" ry="34" fill="#777BB4"/><ellipse cx="64" cy="64" rx="55" ry="30" fill="#232531"/><text x="64" y="74" fill="#fff" font-size="32" font-weight="bold" font-family="sans-serif" text-anchor="middle">php</text></svg>`,
    firebase: `<svg viewBox="0 0 24 24" class="size-9"><path fill="#FFA000" d="M3.9 18.1L7.5 3.3c.1-.4.6-.5.9-.2l4.1 7.7-8.6 7.3z"/><path fill="#F57C00" d="M12.5 10.8L9.9 5.9c-.2-.4-.8-.4-1 0L3.9 18.1l8.6-7.3z"/><path fill="#FFCA28" d="M16.9 8.5l-3.3 3.3 3.3 4.8 3.6-2.4c.5-.3.6-1 .2-1.4L16.9 8.5z"/><path fill="#FFA000" d="M3.9 18.1l9.7 5.4c.5.3 1.1.3 1.6 0l5.3-3-3.6-2.4-8.6 7.3-4.4-7.3z"/></svg>`,
    postgres: `<svg viewBox="0 0 24 24" class="size-9 fill-[#336791]"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3.2c2.8 0 5.2 1.5 6.4 3.7-.6.3-1.4.7-2.4 1-.3-.7-.7-1.3-1.3-1.9-1.2-1.1-2.6-1.4-3.7-1.4-2.2 0-4 1.4-4.7 3.3-.9-.2-1.8-.4-2.5-.5C4.8 7.3 8.1 5.2 12 5.2zM4.3 12c0-1.4.3-2.7.9-3.9 1 .2 2.1.5 3.3.8-.3.9-.4 1.9-.4 2.9 0 .8.1 1.5.2 2.2-1.3.4-2.4.9-3.2 1.4-.5-1-.8-2.2-.8-3.4zm7.7 6.8c-2.9 0-5.5-1.5-6.8-3.8 1.1-.5 2.5-1 4.1-1.3.7 1.4 1.9 2.5 3.4 3-.2 1.7-.5 2.1-.7 2.1zm3.3-2.1c1.4-.5 2.6-1.5 3.3-2.9 1.6.3 3 .8 4.1 1.3-1.3 2.3-3.9 3.8-6.8 3.8-.2 0-.4-.8-.6-2.2zm5.7-4.7c-.8-.5-1.9-1-3.2-1.4.2-.7.2-1.4.2-2.2 0-1-.1-2-.4-2.9 1.2-.4 2.3-.6 3.3-.8.6 1.2.9 2.5.9 3.9 0 1.2-.3 2.4-.8 3.4z"/></svg>`,
    netlify: `<svg viewBox="0 0 24 24" class="size-9 fill-[#00C7B7]"><path d="M16.9 8.2l-2.4-2.4c-.2-.2-.5-.2-.7 0l-.8.8 3.1 3.1.8-.8c.2-.2.2-.5 0-.7zm-4.3-1.2L5.8 13.8c-.1.1-.1.3-.1.4v2.7c0 .3.2.5.5.5h2.7c.1 0 .3 0 .4-.1l6.8-6.8-3.2-3.5zm-5 11.2l-2.1.6c-.4.1-.7-.2-.6-.6l.6-2.1 2.1 2.1zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"/></svg>`,
  };

  const categories = [
    {
      name: 'Frontend',
      accent: '#22c55e',
      skills: [
        { name: 'HTML5', svg: icons.html5 },
        { name: 'CSS3', svg: icons.css3 },
        { name: 'JavaScript', svg: icons.js },
        { name: 'TypeScript', svg: icons.ts },
        { name: 'React', svg: icons.react },
        { name: 'Next.js', svg: icons.nextjs },
      ],
    },
    {
      name: 'Programming Languages',
      accent: '#eab308',
      skills: [
        { name: 'C', svg: icons.c },
        { name: 'C++', svg: icons.cpp },
        { name: 'Python', svg: icons.python },
        { name: 'JavaScript', svg: icons.js },
        { name: 'SQL', svg: icons.sql },
      ],
    },
    {
      name: 'Styling & Design',
      accent: '#84cc16',
      skills: [
        { name: 'Tailwind CSS', svg: icons.tailwind },
        { name: 'Bootstrap', svg: icons.bootstrap },
        { name: 'Material UI', svg: icons.mui },
        { name: 'Shadcn/ui', svg: icons.shadcn },
        { name: 'Figma', svg: icons.figma },
        { name: 'SASS', svg: icons.sass },
      ],
    },
    {
      name: 'Backend',
      accent: '#a855f7',
      skills: [
        { name: 'Node.js', svg: icons.nodejs },
        { name: 'Express.js', svg: icons.express },
        { name: 'REST APIs', svg: icons.restapi },
        { name: 'PHP', svg: icons.php },
      ],
    },
    {
      name: 'Databases',
      accent: '#10b981',
      skills: [
        { name: 'MongoDB', svg: icons.mongodb },
        { name: 'MySQL', svg: icons.mysql },
        { name: 'Firebase', svg: icons.firebase },
        { name: 'PostgreSQL', svg: icons.postgres },
      ],
    },
    {
      name: 'DevOps & Tools',
      accent: '#06b6d4',
      skills: [
        { name: 'Vercel', svg: icons.vercel },
        { name: 'Netlify', svg: icons.netlify },
        { name: 'GitHub', svg: icons.github },
        { name: 'Docker', svg: icons.docker },
        { name: 'Git', svg: icons.git },
        { name: 'GitHub Actions', svg: icons.githubActions },
      ],
    },
  ];

  onMounted(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      gsap.fromTo(
        '.skill-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.value,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        },
      );
    });
  });
</script>
