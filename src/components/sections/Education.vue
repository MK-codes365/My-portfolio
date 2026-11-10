<template>
  <section
    id="education-section"
    class="common-padding relative z-10 overflow-hidden py-24 select-none"
  >
    <!-- Section Header -->
    <div class="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:pr-16">
      <div>
        <div class="flex items-center gap-3">
          <span class="inline-block size-3 rounded-full bg-[#f59e0b] animate-pulse"></span>
          <p class="font-mono text-sm uppercase tracking-widest text-[#f59e0b]">
            ( ACADEMIC BACKGROUND )
          </p>
        </div>
        <h3
          id="education-title"
          class="heading-1-alt font-fancy mt-3 text-flax-smoke-100 uppercase"
        >
          Education
        </h3>
      </div>
      <p class="max-w-md font-mono text-xs text-flax-smoke-400 sm:text-sm">
        Undergraduate education in Information Technology, focusing on core computer science foundations, algorithmic problem solving, and software systems.
      </p>
    </div>

    <!-- Education Content Grid -->
    <div ref="containerRef" class="mx-auto max-w-5xl">
      <div
        class="education-card group relative overflow-hidden rounded-3xl border border-flax-smoke-800/80 bg-[#121310]/95 p-8 backdrop-blur-md transition-all duration-500 hover:border-flax-smoke-600 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)]"
      >
        <!-- Ambient Warm Glow -->
        <div
          class="pointer-events-none absolute -top-32 -right-32 size-64 rounded-full bg-[#f59e0b]/15 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        ></div>

        <!-- Top Row: Period & Location -->
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-flax-smoke-800/60 pb-5">
          <div class="flex items-center gap-2.5">
            <!-- Graduation Cap Icon -->
            <div class="flex size-10 items-center justify-center rounded-xl border border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b]">
              <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147L12 6.5l7.74 3.647M12 6.5v8.5m-7.5-5.5v5.25c0 1.25 3.35 3.25 7.5 3.25s7.5-2 7.5-3.25V9.5" />
              </svg>
            </div>
            <div>
              <span class="font-mono text-xs font-bold uppercase tracking-wider text-[#f59e0b]">
                2023 – 2027
              </span>
              <p class="text-[11px] font-mono text-flax-smoke-400">Bachelor's Degree</p>
            </div>
          </div>

          <span class="rounded-full border border-flax-smoke-800 bg-[#181914] px-3.5 py-1 font-mono text-xs text-flax-smoke-300">
            Kanpur, Uttar Pradesh, India
          </span>
        </div>

        <!-- Degree & University -->
        <div class="mt-6">
          <h4 class="font-fancy text-2xl font-extrabold text-flax-smoke-100 sm:text-3xl">
            Bachelor of Technology (B.Tech) in Information Technology
          </h4>
          <p class="mt-2 font-mono text-base font-semibold text-[#f59e0b]">
            @ Chhatrapati Shahu Ji Maharaj University (CSJMU)
          </p>
        </div>

        <!-- Major Pills -->
        <div class="mt-5 flex flex-wrap gap-2">
          <span class="rounded-md border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1 font-mono text-xs font-bold text-[#f59e0b]">
            Information Technology
          </span>
          <span class="rounded-md border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1 font-mono text-xs font-bold text-[#f59e0b]">
            Core CS &amp; DSA
          </span>
          <span class="rounded-md border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-3 py-1 font-mono text-xs font-bold text-[#38bdf8]">
            Expected Graduation: 2027
          </span>
        </div>

        <!-- Coursework & Highlights -->
        <div class="mt-6 space-y-3 font-mono text-xs text-flax-smoke-300 leading-relaxed sm:text-sm">
          <div class="flex items-start gap-2.5">
            <span class="mt-1.5 size-2 shrink-0 rounded-full bg-[#f59e0b]"></span>
            <p>
              <strong class="text-flax-smoke-100">Relevant Coursework:</strong>
              Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), Operating Systems, Database Management Systems (DBMS), Computer Networks, Software Engineering.
            </p>
          </div>
          <div class="flex items-start gap-2.5">
            <span class="mt-1.5 size-2 shrink-0 rounded-full bg-[#f59e0b]"></span>
            <p>
              <strong class="text-flax-smoke-100">Competitive Programming &amp; Problem Solving:</strong>
              Active competitive programmer with 200+ solved algorithmic challenges across LeetCode and CodeChef.
            </p>
          </div>
        </div>

        <!-- Coursework Tags -->
        <div class="mt-6 flex flex-wrap gap-2 border-t border-flax-smoke-800/60 pt-5">
          <span
            v-for="c in courses"
            :key="c"
            class="rounded-lg border border-flax-smoke-800 bg-[#181914] px-3 py-1 font-mono text-xs text-flax-smoke-300 transition-colors duration-200 hover:border-flax-smoke-600 hover:text-flax-smoke-100"
          >
            {{ c }}
          </span>
        </div>

        <!-- Academic & Hackathon Honors Banner -->
        <div class="mt-8 rounded-2xl border border-flax-smoke-800/80 bg-[#161713]/80 p-5">
          <p class="font-mono text-xs font-bold uppercase tracking-wider text-[#a3e635]">
            Key Hackathon &amp; Academic Honors
          </p>
          <div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div class="rounded-xl border border-flax-smoke-800/60 bg-[#121310] p-3">
              <span class="font-mono text-[11px] font-bold text-[#38bdf8]">LaserHacks 2026</span>
              <p class="text-[11px] font-mono text-flax-smoke-400 mt-1">Finalist (Lasell University, USA) · ZeroTrace Forensics</p>
            </div>
            <div class="rounded-xl border border-flax-smoke-800/60 bg-[#121310] p-3">
              <span class="font-mono text-[11px] font-bold text-[#a3e635]">IIIT Allahabad Open Source</span>
              <p class="text-[11px] font-mono text-flax-smoke-400 mt-1">Ranked 15th / 1000+ Participants · 50+ Merged PRs</p>
            </div>
            <div class="rounded-xl border border-flax-smoke-800/60 bg-[#121310] p-3">
              <span class="font-mono text-[11px] font-bold text-[#f59e0b]">Elite Hack 1.0</span>
              <p class="text-[11px] font-mono text-flax-smoke-400 mt-1">Top 100 / 7500+ Nationwide · Heal Connect AI</p>
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

  gsap.registerPlugin(ScrollTrigger);

  const containerRef = ref<HTMLElement | null>(null);

  const courses = [
    'Data Structures',
    'Algorithms',
    'OOP',
    'C++',
    'Python',
    'JavaScript',
    'DBMS',
    'SQL',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
  ];

  onMounted(() => {
    gsap.fromTo(
      '.education-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.value,
          start: 'top 85%',
        },
      },
    );
  });
</script>
