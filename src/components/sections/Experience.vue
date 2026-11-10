<template>
  <section
    id="experience-section"
    class="common-padding relative z-10 overflow-hidden py-24 select-none"
  >
    <!-- Section Header -->
    <div class="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:pr-16">
      <div>
        <div class="flex items-center gap-3">
          <span class="inline-block size-3 rounded-full bg-[#38bdf8] animate-pulse"></span>
          <p class="font-mono text-sm uppercase tracking-widest text-[#38bdf8]">
            ( CAREER TRACK )
          </p>
        </div>
        <h3
          id="experience-title"
          class="heading-1-alt font-fancy mt-3 text-flax-smoke-100 uppercase"
        >
          Work Experience
        </h3>
      </div>

      <!-- Action Card: Download Resume -->
      <a
        :href="resumeUrl"
        download="Mukut_Kumar_Resume.pdf"
        target="_blank"
        class="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#38bdf8]/40 bg-[#14181a] px-6 py-3 font-mono text-xs font-bold text-flax-smoke-100 uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:border-[#38bdf8] hover:bg-[#38bdf8]/10 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]"
      >
        <span class="relative z-10 flex items-center gap-2">
          <svg class="size-4 text-[#38bdf8] transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download Resume (PDF)
        </span>
        <span class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
      </a>
    </div>

    <!-- Timeline Container -->
    <div ref="timelineRef" class="relative mx-auto max-w-5xl">
      <!-- Central Animated Glowing Spine Line -->
      <div
        class="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-[#38bdf8] via-[#a3e635] to-transparent md:left-1/2 md:-translate-x-1/2"
      ></div>

      <div class="space-y-12">
        <div
          v-for="(item, idx) in experiences"
          :key="item.role + item.company"
          class="experience-card relative flex flex-col md:flex-row md:items-center"
          :class="idx % 2 === 0 ? 'md:flex-row-reverse' : ''"
        >
          <!-- Timeline Node Icon -->
          <div
            class="absolute left-4 z-20 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#121310] bg-[#1a1b16] shadow-lg md:left-1/2"
            :style="{ borderColor: item.accent }"
          >
            <span
              class="size-2.5 rounded-full"
              :style="{ backgroundColor: item.accent }"
            ></span>
          </div>

          <!-- Card Content (alternating sides on desktop) -->
          <div
            class="ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-1/2"
            :class="idx % 2 === 0 ? 'md:pl-10' : 'md:pr-10'"
          >
            <div
              class="group relative overflow-hidden rounded-2xl border border-flax-smoke-800/80 bg-[#121310]/95 p-6 backdrop-blur-md transition-all duration-500 hover:border-flax-smoke-500 hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8)]"
              :style="{ '--accent': item.accent }"
            >
              <!-- Card Top Row: Period & Type -->
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-flax-smoke-800/60 pb-3">
                <span
                  class="font-mono text-xs font-semibold tracking-wider uppercase"
                  :style="{ color: item.accent }"
                >
                  {{ item.period }}
                </span>
                <span class="rounded-full border border-flax-smoke-800 bg-[#181914] px-3 py-0.5 font-mono text-[11px] text-flax-smoke-400">
                  {{ item.location }}
                </span>
              </div>

              <!-- Role & Company -->
              <div class="mt-4">
                <h4 class="font-fancy text-xl font-extrabold text-flax-smoke-100 sm:text-2xl">
                  {{ item.role }}
                </h4>
                <p class="mt-1 font-mono text-sm font-semibold text-flax-smoke-300">
                  @ <span :style="{ color: item.accent }">{{ item.company }}</span>
                </p>
              </div>

              <!-- Metric Pills -->
              <div v-if="item.metrics" class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="m in item.metrics"
                  :key="m"
                  class="rounded-md border border-[#38bdf8]/20 bg-[#38bdf8]/10 px-2.5 py-1 font-mono text-[11px] font-bold text-[#38bdf8]"
                  :style="{ borderColor: item.accent + '44', backgroundColor: item.accent + '15', color: item.accent }"
                >
                  {{ m }}
                </span>
              </div>

              <!-- Bullet Points -->
              <ul class="mt-4 space-y-2 text-xs font-mono text-flax-smoke-300 leading-relaxed sm:text-sm">
                <li
                  v-for="(point, pIdx) in item.points"
                  :key="pIdx"
                  class="flex items-start gap-2"
                >
                  <span class="mt-1.5 size-1.5 shrink-0 rounded-full" :style="{ backgroundColor: item.accent }"></span>
                  <span>{{ point }}</span>
                </li>
              </ul>

              <!-- Technologies Used -->
              <div class="mt-5 flex flex-wrap gap-1.5 border-t border-flax-smoke-800/50 pt-4">
                <span
                  v-for="t in item.tech"
                  :key="t"
                  class="rounded-md border border-flax-smoke-800 bg-[#181914] px-2 py-0.5 font-mono text-[10px] text-flax-smoke-400"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import { resumeUrl } from '@/data';

  gsap.registerPlugin(ScrollTrigger);

  const timelineRef = ref<HTMLElement | null>(null);

  const experiences = [
    {
      role: 'Frontend Engineer Intern',
      company: 'Physio NutriCore',
      location: 'Solan, HP · Hybrid',
      period: 'Jun 2026 – Sep 2026',
      accent: '#a3e635',
      metrics: ['Lighthouse 75 ➔ 93', '35% Fewer API Calls', '4 RBAC Tiers'],
      points: [
        'Translated Figma designs into pixel-perfect, production-ready React 19 components using TypeScript & Tailwind CSS.',
        'Boosted Lighthouse Performance from 75 to 93 by eliminating render-blocking resources and cutting re-renders via useMemo/useCallback.',
        'Architected nested and protected routes with custom JWT route guards and RBAC across 4 permission tiers.',
        'Built custom useApi hooks for automated error/loading states cutting redundant network requests by 35%.',
        'Implemented client/server validation, Vitest unit/component testing, and Husky pre-commit hooks cutting CI linting failures by 40%.',
      ],
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'JWT', 'RBAC', 'Vitest', 'Husky'],
    },
    {
      role: 'Full Stack Web Developer Intern',
      company: 'InAmigos Foundation (IAF)',
      location: 'Remote',
      period: 'Apr 2026 – May 2026',
      accent: '#38bdf8',
      metrics: ['20+ REST APIs', '20+ Responsive Pages', 'Lighthouse 64 ➔ 76'],
      points: [
        'Used Chrome DevTools for deep performance audits; improved Lighthouse score from 64 to 76 via lazy loading and asset compression.',
        'Engineered 20+ robust REST APIs and 20+ responsive, accessible pages using the MERN stack across mobile, tablet, and desktop.',
        'Delivered pixel-perfect React components from designs, gathered client feedback through live demos, and rapidly iterated to production.',
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'DevTools'],
    },
  ];

  onMounted(() => {
    gsap.fromTo(
      '.experience-card',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.value,
          start: 'top 85%',
        },
      },
    );
  });
</script>
