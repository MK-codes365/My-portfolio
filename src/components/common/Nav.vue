<template>
  <BurgerMenuBtn
    @click="toggleBtnClickAnimation"
    class="z-9999 scale-0 max-md:scale-100 drop-shadow-xl"
    id="burger"
  />

  <div
    @click="toggleBtnClickAnimation"
    class="fixed inset-0 z-9998 size-full bg-black opacity-50 select-none"
    :class="{ hidden: !isNavbarOpen }"
  ></div>

  <div
    tabindex="0"
    id="navbar"
    @keydown.esc="toggleBtnClickAnimation()"
    class="bg-flax-smoke-950 fixed top-[1dvh] right-0 z-9998 h-[98dvh] w-full translate-x-full overflow-y-auto rounded-s-2xl p-6 will-change-auto select-none focus:outline-hidden max-md:w-[98%] sm:p-8 md:w-3/5 md:px-14 lg:w-[38%]"
  >
    <Circles id="circles" class="absolute top-0 right-0 opacity-25 pointer-events-none" />
    <div class="flex min-h-full flex-col justify-between gap-8">
      <div class="relative z-19 w-full">
        <ul
          class="text-flax-smoke-50 mt-6 font-fancy text-2xl font-extrabold sm:text-3xl md:mt-10 lg:text-4xl"
          id="navLinks"
        >
          <li
            class="overflow-y-clip"
            v-for="l in navbarLinks"
            :key="l.label"
            :id="l.label"
          >
            <a
              :href="l.url"
              @click="gotoSection(l.url)"
              class="group my-1 sm:my-1.5 flex h-full w-fit translate-y-full cursor-pointer items-center justify-start leading-tight will-change-auto"
            >
              <span
                class="bg-[#a3e635] h-3 w-3 scale-0 rounded-full opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 mr-2"
              ></span>
              <p
                class="font-fancy transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-[#a3e635]"
              >
                {{ l.label }}
              </p>
            </a>
          </li>
        </ul>
      </div>

      <div class="w-full">
        <div class="text-flax-smoke-50 mt-2 h-full font-normal">
          <p class="text-left text-sm font-bold uppercase">Email address</p>
          <Link
            class="font-medium tracking-wider"
            tag="p"
            label="mukutkumar842@gmail.com"
            url="mailto:mukutkumar842@gmail.com"
          />
          <div class="mt-4">
            <a
              :href="resumeUrl"
              download="Mukut_Kumar_Resume.pdf"
              target="_blank"
              class="border-flax-smoke-500 inline-flex items-center gap-2 rounded-full border bg-[#1e2019] px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-[#a3e635] uppercase transition-all duration-300 hover:border-[#a3e635] hover:bg-[#a3e635]/15"
            >
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
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
          <div class="mt-6 flex flex-wrap justify-start gap-1">
            <Button
              class="contact border-flax-smoke-600 border opacity-0"
              v-for="social in socialLinks"
              :key="social.label"
              :label="social.label"
              :url="social.url"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <header
    :class="$attrs.class"
    class="padding-x absolute inset-x-0 top-0 z-20 h-fit -translate-y-full pt-6 sm:pt-8 will-change-auto"
  >
    <nav class="flex items-center justify-between gap-4">
      <!-- Logo: Mukut© -->
      <MagneticEffect
        :magnetoStrengthVal="20"
        :magnetoTextStrengthVal="10"
        divId="name-container"
        textId="name"
      >
        <div id="name-container" class="group -m-4 h-fit cursor-pointer p-4">
          <a href="#app" @click.prevent="gotoSection('#app')">
            <h2
              id="name"
              class="font-fancy flex items-start text-xl font-extrabold uppercase tracking-tight text-flax-smoke-950 md:text-2xl lg:text-3xl"
            >
              Mukut
              <span
                class="font-fancy inline! origin-center! text-lg text-flax-smoke-700 transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] md:text-xl"
                >&copy;</span
              >
            </h2>
          </a>
        </div>
      </MagneticEffect>

      <!-- Clean Typography in 2 Lines -->
      <div class="hidden lg:flex items-center justify-start">
        <p
          class="font-fancy text-xs sm:text-sm font-bold uppercase select-none leading-snug tracking-wider text-flax-smoke-900"
        >
          I am a Full Stack Developer <br />
          and SDE (Software Development Engineer)
        </p>
      </div>

      <!-- Desktop Header Navigation (clean, compact, no horizontal collisions) -->
      <div class="hidden md:flex items-center gap-2 lg:gap-3">
        <ul class="flex items-center gap-1 lg:gap-2">
          <li v-for="l in headerNavLinks" :key="l.label">
            <a
              :href="l.url"
              @click.prevent="gotoSection(l.url)"
              class="group relative inline-flex items-center rounded-full px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-flax-smoke-800 transition-all duration-300 hover:text-black hover:bg-flax-smoke-400/40 lg:text-sm"
            >
              <span
                class="mr-1 text-flax-smoke-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >/</span
              >
              {{ l.label }}
            </a>
          </li>
        </ul>

        <!-- Menu button for full drawer access -->
        <button
          @click="toggleBtnClickAnimation"
          aria-label="Open full menu"
          class="group ml-2 flex items-center gap-2 rounded-full border border-flax-smoke-700 bg-flax-smoke-900 px-3.5 py-1.5 font-mono text-xs font-bold text-flax-smoke-100 uppercase tracking-wider transition-all duration-300 hover:border-black hover:bg-black"
        >
          <span>Menu</span>
          <span class="flex flex-col gap-1">
            <span class="h-0.5 w-3.5 rounded-full bg-current transition-transform"></span>
            <span class="h-0.5 w-2 rounded-full bg-current transition-transform"></span>
          </span>
        </button>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';

  import { Link, BurgerMenuBtn, MagneticEffect } from '..';
  import { Circles } from '../design';
  import { Button } from '../common';

  import {
    animateNavbarEnter,
    animateNavbarLeave,
    navbarScale,
  } from '@/animations';
  import {
    navbarLinks,
    headerNavLinks,
    socialLinks,
    resumeUrl,
  } from '@/data';
  import { lenis } from '@/lenis';

  const isNavbarOpen = ref(false);

  const toggleBtnClickAnimation = () => {
    isNavbarOpen.value = !isNavbarOpen.value;

    // animate the X on the button
    document.getElementById('magneto')?.classList.toggle('active');

    const x = document.getElementById('navbar') as HTMLDivElement;
    if (isNavbarOpen.value) {
      animateNavbarEnter('#navbar', '#navLinks li a', '.contact');
      x.focus();
    } else {
      animateNavbarLeave('#navbar', '#navLinks li a', '.contact');
      x.blur();
    }
  };

  const gotoSection = (url: string) => {
    lenis.start();
    lenis.scrollTo(url, { duration: 3 });
    toggleBtnClickAnimation();
  };

  onMounted(() => {
    navbarScale('#burger', '#hero');
  });

  const emit = defineEmits(['isLocked']);
  watch(isNavbarOpen, (newVal) => {
    emit('isLocked', newVal);
  });
</script>
