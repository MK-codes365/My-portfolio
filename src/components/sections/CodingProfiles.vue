<template>
  <section
    id="coding-profiles-section"
    class="common-padding relative z-10 overflow-hidden py-24 select-none"
  >
    <!-- Section Header -->
    <div class="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:pr-16">
      <div>
        <div class="flex items-center gap-3">
          <span class="inline-block size-3 rounded-full bg-[#f59e0b] animate-ping"></span>
          <p class="font-mono text-sm uppercase tracking-widest text-[#f59e0b]">
            ( COMPETITIVE &amp; SOCIAL )
          </p>
        </div>
        <h3
          id="coding-profiles-title"
          class="heading-1-alt font-fancy mt-3 text-flax-smoke-100 uppercase"
        >
          Coding Profiles
        </h3>
      </div>
      <p class="max-w-md font-mono text-xs text-flax-smoke-400 sm:text-sm">
        Track my algorithmic problem-solving journey, open-source pull requests, engineering projects, and technical updates across the web.
      </p>
    </div>

    <!-- Profiles Grid -->
    <div
      ref="gridRef"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <a
        v-for="profile in profiles"
        :key="profile.platform"
        :href="profile.url"
        target="_blank"
        rel="noopener noreferrer"
        class="profile-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-flax-smoke-800/80 bg-[#121310]/95 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-flax-smoke-500 hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.9)] cursor-pointer"
        :style="{ '--accent': profile.accent }"
      >
        <!-- Ambient Corner Glow -->
        <div
          class="pointer-events-none absolute -top-24 -right-24 size-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
          :style="{ backgroundColor: profile.accent }"
        ></div>

        <div>
          <!-- Header: Platform Icon & Stat Badge -->
          <div class="flex items-center justify-between">
            <div
              class="flex size-14 items-center justify-center rounded-xl border border-flax-smoke-800 bg-[#181914] p-3 transition-transform duration-300 group-hover:scale-110"
              :style="{ borderColor: profile.accent + '44' }"
              v-html="profile.svg"
            ></div>

            <span
              class="rounded-full border border-flax-smoke-800 bg-[#181914] px-3 py-1 font-mono text-xs font-bold transition-colors duration-300"
              :style="{ color: profile.accent, borderColor: profile.accent + '55' }"
            >
              {{ profile.badge }}
            </span>
          </div>

          <!-- Body Info -->
          <div class="mt-6">
            <h4 class="font-fancy text-2xl font-bold tracking-tight text-flax-smoke-100 group-hover:text-white">
              {{ profile.platform }}
            </h4>
            <p class="font-mono text-sm font-semibold" :style="{ color: profile.accent }">
              @{{ profile.username }}
            </p>
            <p class="mt-3 font-mono text-xs text-flax-smoke-400 leading-relaxed">
              {{ profile.description }}
            </p>
          </div>

          <!-- Highlights Pills -->
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="h in profile.highlights"
              :key="h"
              class="rounded-md border border-flax-smoke-800/70 bg-[#181914]/80 px-2.5 py-0.5 font-mono text-[10px] text-flax-smoke-300"
            >
              {{ h }}
            </span>
          </div>
        </div>

        <!-- Footer Link Row -->
        <div class="mt-6 flex items-center justify-between border-t border-flax-smoke-800/50 pt-4 text-xs font-mono font-bold tracking-wider uppercase text-flax-smoke-400 group-hover:text-flax-smoke-100">
          <span>View Profile</span>
          <span class="inline-flex size-7 items-center justify-center rounded-full border border-flax-smoke-800 bg-[#181914] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-current" :style="{ color: profile.accent }">
            <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const gridRef = ref<HTMLElement | null>(null);

  const svgs = {
    leetcode: `<svg viewBox="0 0 24 24" class="size-8"><path fill="#FFA116" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.865 5.922 5.922 0 0 0 .564.825l3.854 4.125a1.376 1.376 0 0 0 1.956 0 1.375 1.375 0 0 0 0-1.956L4.258 16.065a3.176 3.176 0 0 1-.41-.59 3.13 3.13 0 0 1-.397-.993 3.15 3.15 0 0 1-.035-1.259 2.85 2.85 0 0 1 .65-1.129l3.854-4.125 5.405-5.788a1.374 1.374 0 0 0-.97-2.348z"/><path fill="#B3B1B0" d="M9.833 13.924a1.375 1.375 0 0 0 0 2.75h10.334a1.375 1.375 0 0 0 0-2.75H9.833z"/><path fill="#FFA116" d="M16.142 9.873l3.854-4.126a1.376 1.376 0 0 0-1.956-1.956l-3.854 4.126a1.376 1.376 0 0 0 1.956 1.956z"/></svg>`,
    gfg: `<svg viewBox="0 0 24 24" class="size-8 fill-[#2F8D46]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5c1.5 0 2.88.61 3.89 1.61l-1.42 1.42A3.486 3.486 0 0 0 13 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5c1.93 0 3.56-1.23 4.18-2.95H13v-2.05h6.24c.07.34.1.7.1 1.07 0 3.27-2.3 5.93-6.34 5.93z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" class="size-8 fill-white"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" class="size-8 fill-[#0A66C2]"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66-.92 0-1.66.74-1.66 1.66 0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" class="size-8 fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    codechef: `<svg viewBox="0 0 24 24" class="size-8 fill-[#B5854F]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-3 0-5.5-1.5-6.5-3.8 1.5.3 3.2.1 4.5-.6 1.8-1 2.8-2.8 2.8-4.8 0-.4 0-.8-.1-1.2 1.8.8 3.3 2.5 3.3 4.5 0 3.3-1.8 5.9-4 5.9z"/></svg>`,
  };

  const profiles = [
    {
      platform: 'LeetCode',
      username: 'mukut_kumar_089',
      url: 'https://leetcode.com/u/mukut_kumar_089/',
      accent: '#FFA116',
      badge: '200+ Solved',
      description: 'Competitive algorithmic programming focusing on DSA, Dynamic Programming, Graphs, and Tree structures.',
      highlights: ['Data Structures', 'Algorithms', 'Speed & Memory'],
      svg: svgs.leetcode,
    },
    {
      platform: 'GeeksforGeeks',
      username: 'mukutkumar89',
      url: 'https://www.geeksforgeeks.org/profile/mukutkumar89',
      accent: '#22c55e',
      badge: 'Active Coder',
      description: 'Extensive problem solving in Core Computer Science fundamentals, DBMS, and System Design problems.',
      highlights: ['DSA Practice', 'CS Fundamentals', 'Problem Solving'],
      svg: svgs.gfg,
    },
    {
      platform: 'GitHub',
      username: 'MK-codes365',
      url: 'https://github.com/MK-codes365',
      accent: '#e2e8f0',
      badge: '50+ Merged PRs',
      description: 'Open source enthusiast with merged contributions, production React & TypeScript applications, and security tools.',
      highlights: ['Open Source', 'React 19', 'Full Stack MERN'],
      svg: svgs.github,
    },
    {
      platform: 'LinkedIn',
      username: 'mukut-kumar',
      url: 'https://www.linkedin.com/in/mukut-kumar/',
      accent: '#38bdf8',
      badge: 'Professional Network',
      description: 'Connecting with fellow engineers, founders, and teams building impactful software products worldwide.',
      highlights: ['Full Stack', 'Internships', 'Community'],
      svg: svgs.linkedin,
    },
    {
      platform: 'X (Twitter)',
      username: 'Mukutkumar89',
      url: 'https://x.com/Mukutkumar89',
      accent: '#f8fafc',
      badge: 'Daily Tech',
      description: 'Sharing daily learnings in modern web dev, building in public, AI innovations, and software architecture.',
      highlights: ['Tech Threads', 'Web Dev', 'Build in Public'],
      svg: svgs.x,
    },
    {
      platform: 'CodeChef',
      username: 'mukut007',
      url: 'https://www.codechef.com/users/mukut007',
      accent: '#f59e0b',
      badge: 'Rated Contests',
      description: 'Participating in rated global coding contests and real-time algorithmic problem competitions.',
      highlights: ['Competitive Coding', 'Speed Logic', 'Ranked Contests'],
      svg: svgs.codechef,
    },
  ];

  onMounted(() => {
    gsap.fromTo(
      '.profile-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.value,
          start: 'top 85%',
        },
      },
    );
  });
</script>
