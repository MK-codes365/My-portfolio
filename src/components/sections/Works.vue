<template>
  <section id="works" class="common-padding mb-20">
    <div class="flex flex-col">
      <h3
        id="selectedWorks"
        v-html="selectedWorks"
        class="heading-1 text-start leading-none font-bold uppercase"
      ></h3>
      <p
        class="heading-1 text-flax-smoke-400 text-opacity-50 hidden w-4/5 text-end font-extrabold sm:block"
      >
        ( {{ selectedWorksProps.length }} )
      </p>

      <div
        id="selected-works-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          (
          <span class="inline sm:hidden">{{ selectedWorksProps.length }} </span>
          PROJECTS )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          Flagship engineering projects across AI systems, forensic cybersecurity, high-throughput microservices, and modern web platforms.
        </p>
      </div>
    </div>

    <div
      class="sm:column-gap relative mt-12 grid size-full grid-cols-12 lg:mt-[10%]"
    >
      <div
        class="text-flax-smoke-100 sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] leading-[0.8] font-semibold md:flex"
      >
        <span class="font-title! relative -tracking-wider">0</span>
        <span
          id="index"
          class="font-title! relative -tracking-wider will-change-transform"
          >{{ index + 1 }}.</span
        >
      </div>
      <aside
        @mouseenter="showCursor"
        @mouseleave="hideCursor"
        class="relative col-span-full flex flex-col space-y-12 md:col-span-7"
      >
        <div
          v-for="work in selectedWorksProps"
          :key="work.name"
          class="work-card group relative overflow-hidden rounded-3xl border border-flax-smoke-800/80 bg-[#121310]/95 p-6 backdrop-blur-md transition-all duration-500 hover:border-flax-smoke-500 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)]"
          :style="{ '--accent': work.accent }"
        >
          <!-- Ambient Glow on Hover -->
          <div
            class="pointer-events-none absolute -top-32 -right-32 size-72 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25"
            :style="{ backgroundColor: work.accent }"
          ></div>

          <!-- Video / Preview Container (Browser Mockup Frame) -->
          <div
            class="relative w-full overflow-hidden rounded-2xl border border-flax-smoke-800/80 bg-[#0B0B0A] shadow-2xl transition-all duration-500 group-hover:border-flax-smoke-600"
          >
            <!-- Browser Header Bar / Window Controls -->
            <div
              class="flex items-center justify-between border-b border-flax-smoke-800/80 bg-[#141511]/90 px-4 py-2.5 backdrop-blur-md"
            >
              <div class="flex items-center gap-1.5">
                <span class="size-2.5 rounded-full bg-[#ef4444]/80"></span>
                <span class="size-2.5 rounded-full bg-[#f59e0b]/80"></span>
                <span class="size-2.5 rounded-full bg-[#10b981]/80"></span>
              </div>
              <div
                class="flex items-center gap-2 rounded-full border border-flax-smoke-800 bg-[#0e0f0c] px-3 py-0.5 font-mono text-[11px] text-flax-smoke-400"
              >
                <span
                  class="size-1.5 rounded-full"
                  :style="{ backgroundColor: work.accent }"
                ></span>
                <span class="max-w-[150px] truncate sm:max-w-[240px]">{{ work.name }}</span>
              </div>
              <span
                class="rounded-full border border-flax-smoke-800 bg-[#161713] px-2.5 py-0.5 font-mono text-[10px] font-bold text-flax-smoke-400"
              >
                {{ work.year }}
              </span>
            </div>

            <!-- Video Player Area -->
            <div class="relative aspect-16/9 w-full overflow-hidden bg-[#0a0a09]">
              <video
                ref="videoRefs"
                :src="work.videoSrc"
                :poster="work.poster"
                muted
                loop
                playsinline
                preload="metadata"
                class="size-full object-cover object-top blur-xs transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:blur-none"
              ></video>

              <!-- Floating Feature Badge -->
              <div
                class="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full border border-flax-smoke-800/90 bg-[#121310]/90 px-3 py-1 backdrop-blur-md"
              >
                <span
                  class="size-2 rounded-full animate-pulse"
                  :style="{ backgroundColor: work.accent }"
                ></span>
                <span
                  class="font-mono text-[10px] font-bold uppercase tracking-wider text-flax-smoke-200 sm:text-[11px]"
                >
                  {{ work.badge }}
                </span>
              </div>
            </div>
          </div>

          <!-- Project Details -->
          <div class="mt-6 flex flex-col justify-between">
            <div>
              <p
                class="font-mono text-xs font-semibold uppercase tracking-widest"
                :style="{ color: work.accent }"
              >
                {{ work.category }}
              </p>
              <h3
                class="font-fancy mt-1.5 text-2xl font-extrabold uppercase tracking-tight text-flax-smoke-100 transition-colors duration-300 group-hover:text-white sm:text-3xl"
              >
                {{ work.name }}
              </h3>
              <p
                class="mt-2.5 font-mono text-xs leading-relaxed text-flax-smoke-300 sm:text-sm"
              >
                {{ work.description }}
              </p>
            </div>

            <!-- Bottom Row: Tech Tags & Direct Action Buttons -->
            <div
              class="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-flax-smoke-800/60 pt-5"
            >
              <!-- Tech Tags -->
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tag in work.tags"
                  :key="tag"
                  class="rounded-md border border-flax-smoke-800 bg-[#181914] px-2.5 py-1 font-mono text-[11px] font-semibold text-flax-smoke-300 transition-colors duration-200 hover:border-flax-smoke-600 hover:text-flax-smoke-100"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center gap-2">
                <a
                  v-if="work.demoUrl && work.demoUrl !== work.githubUrl"
                  :href="work.demoUrl"
                  target="_blank"
                  class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs font-bold text-[#121310] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  :style="{ backgroundColor: work.accent }"
                >
                  <span>Live Demo</span>
                  <svg
                    class="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
                <a
                  :href="work.githubUrl"
                  target="_blank"
                  class="inline-flex items-center gap-1.5 rounded-full border border-flax-smoke-700 bg-[#161713] px-3.5 py-1.5 font-mono text-xs font-bold text-flax-smoke-200 transition-all duration-300 hover:border-flax-smoke-400 hover:bg-flax-smoke-800 hover:text-white"
                >
                  <svg class="size-3.5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref, useTemplateRef } from 'vue';
  import gsap from 'gsap';
  import { useWindowSize } from '@vueuse/core';
  const videoRefs = useTemplateRef<HTMLVideoElement[]>('videoRefs');

  const isSmallScreen = computed(() => {
    return useWindowSize().width.value < 768;
  });
  const index = ref(0);
  const selectedWorks = ref('Selected Projects /');

  const tl = gsap
    .timeline({ defaults: { duration: 0.25 } })
    .to(['#cursor', '#inner'], {
      scale: 1,
      opacity: 1,
    })
    .paused(true);

  const showCursor = () => {
    tl.play();
  };
  const hideCursor = () => {
    tl.reverse();
  };

  const baseUrl = import.meta.env.BASE_URL;

  const selectedWorksProps = [
    {
      name: 'ZeroTrace®',
      category: 'Cybersecurity & Data Forensics',
      description:
        'National Forensic & Cybersecurity Platform (NTRO SIH26149) engineered for multi-pass defense-grade data sanitization, deep forensic file carving, memory artifact extraction, and automated threat reporting.',
      tags: ['Python', 'C++', 'React', 'DFIR', 'Forensics', 'Cybersecurity'],
      badge: 'NTRO SIH26149 Platform',
      accent: '#38bdf8',
      videoSrc: `${baseUrl}zerotrace_60fps.mp4`,
      poster: `${baseUrl}zerotrace_poster.webp`,
      githubUrl: 'https://github.com/MK-codes365/zerotrace',
      demoUrl: 'https://zerotrace-gamma.vercel.app',
      year: '2026',
    },
    {
      name: 'AegisAI',
      category: 'AI-Native Support Operations',
      description:
        'High-performance support operations platform featuring real-time Master Incident Clustering, automated sentiment-based routing, and a resilient glassmorphism UI powered by Amazon Bedrock (Nova 2 Lite) and AWS Comprehend.',
      tags: ['Amazon Bedrock', 'AWS Comprehend', 'React', 'Node.js', 'AI Clustering'],
      badge: 'Powered by Amazon Bedrock',
      accent: '#a855f7',
      videoSrc: `${baseUrl}aegisai_60fps.mp4`,
      poster: `${baseUrl}aegisai_poster.webp`,
      githubUrl: 'https://github.com/MK-codes365/AegisAI',
      demoUrl: 'https://aegis-ai-woad.vercel.app',
      year: '2026',
    },
    {
      name: 'Heal Connect',
      category: 'AI Rural Telemedicine & Health',
      description:
        'Comprehensive AI-powered telemedicine ecosystem connecting rural patients, ASHA healthcare workers, and specialist physicians with offline-first sync, automated symptom triage, and bilingual consultations.',
      tags: ['React', 'Node.js', 'AI Triage', 'WebRTC', 'Tailwind CSS'],
      badge: 'Elite Hack Top 100 Nationwide',
      accent: '#10b981',
      videoSrc: `${baseUrl}healconnect_60fps.mp4`,
      poster: `${baseUrl}healconnect_poster.webp`,
      githubUrl: 'https://github.com/MK-codes365/healconnect',
      demoUrl: 'https://healconnect-iota.vercel.app',
      year: '2025',
    },
    {
      name: 'URL Shortener API',
      category: 'Distributed Systems & Microservices',
      description:
        'Ultra-fast production-grade URL shortening engine featuring dual-layer Redis 8 memory caching (~1-2ms redirects, 99%+ hit ratio), PostgreSQL 17 fallback via Prisma ORM, and distributed token-bucket rate limiting.',
      tags: ['TypeScript', 'Redis 8', 'PostgreSQL', 'Docker', 'Express', 'Jest'],
      badge: '1-2ms Cache-First Engine',
      accent: '#f59e0b',
      videoSrc: `${baseUrl}urlshortner_60fps.mp4`,
      poster: `${baseUrl}urlshortner_poster.webp`,
      githubUrl: 'https://github.com/MK-codes365/urlshortner',
      demoUrl: 'https://github.com/MK-codes365/urlshortner#readme',
      year: '2025',
    },
  ];

  // Reusable function to handle forward scroll animation
  const createForwardTimeline = (
    index: any,
    i: any,
    selectedWorksProps: any[],
  ) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3 },
    });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        index.value = Math.min(i, selectedWorksProps.length - 1);
      },
    }).to('#index', {
      yPercent: 0,
      ease: 'power1.inOut',
    });

    return tl;
  };

  // Reusable function to handle backward scroll animation
  const createBackwardTimeline = (index: any, i: any) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        index.value = Math.max(i, 0);
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });

    return tl;
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const video = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              video.classList.remove('blur-xs');
            })
            .catch(() => {});
        }
      } else {
        video.pause();
        video.classList.add('blur-xs');
      }
    });
  };

  const stopAllVideos = () => {
    videoRefs.value?.map((video: HTMLVideoElement) => {
      if (video && !video.paused) {
        video.pause();
        video.currentTime = 0; // Reset video to the start
      }
    });
  };
  onBeforeMount(() => {
    selectedWorks.value = textSplitterIntoChar('Selected Works / ', true);
  });

  onMounted(() => {
    stopAllVideos();

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25, // Trigger as soon as 25% of the video is visible
    });

    // Observe each video element
    videoRefs.value?.forEach((video) => {
      observer.observe(video);
    });

    animateSplitText(
      '#selectedWorks .letters',
      '#selected-works-text',
      0.7,
      0.01,
      0,
    );

    // Smooth scroll entrance animation for each card
    gsap.utils.toArray('.work-card').forEach((card: any) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 45,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
        },
      );
    });

    // Apply GSAP animations to each div
    if (!isSmallScreen.value)
      gsap.utils.toArray('.work-card').forEach((div: any, i: any) => {
        gsap.timeline({ defaults: { duration: 0.7 } }).to(div, {
          scrollTrigger: {
            trigger: div,
            // start: 'top 40%',
            start: 'top 25%',
            // end: 'bottom 40%',
            end: 'bottom 25%',
            scrub: 0.01,
            // markers: true,
            onLeaveBack: () => {
              // Backward scroll animation
              if (index.value !== 0) {
                gsap.to('#index', {
                  yPercent: 100,
                  duration: 0.3,
                  ease: 'power4.inOut',
                  onComplete: () => {
                    createBackwardTimeline(index, i - 1);
                  },
                });
              }
            },
          },
          ease: 'power1.inOut',
          onComplete: () => {
            // Forward scroll animation
            if (index.value !== selectedWorksProps.length - 1) {
              gsap.to('#index', {
                yPercent: -100,
                duration: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                  createForwardTimeline(index, i + 1, selectedWorksProps);
                },
              });
            }
          },
        });
      });
  });
</script>
