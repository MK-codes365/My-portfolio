<template>
  <section
    id="contact-section"
    class="relative min-h-svh w-full overflow-y-clip p-[4vh] select-none"
  >
    <div
      class="flex-center relative h-[92vh] w-full flex-col rounded-lg bg-black uppercase"
    >
      <video
        class="absolute bottom-0 left-0 size-full rounded-lg object-cover object-bottom brightness-50"
        :src="contact"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <!-- :style="'background-image: url(' + contact + ') !important; '" -->
      <div class="flex-center z-10 flex-col gap-y-10">
        <p
          class="heading-4 text-flax-smoke-300 max-w-[30ch] text-center font-mono"
        >
          Your design is a masterpiece waiting to become alive.
        </p>
        <h3
          id="make-it-happen"
          class="heading-1 text-flax-smoke-200 max-w-[10ch] text-center leading-none"
          v-html="makeItHappen"
        ></h3>
        <div
          class="mt-[5%] flex flex-wrap items-center justify-center gap-4 scale-125 lg:scale-[1.3] xl:scale-[1.8] 2xl:scale-[2]"
        >
          <Button label="Get in touch" url="https://wa.me/917535947485" />
          <a
            :href="resumeUrl"
            download="Mukut_Kumar_Resume.pdf"
            target="_blank"
            class="group pointer-events-auto relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-flax-smoke-600 bg-flax-smoke-950 px-5 py-2 font-fancy text-[1rem] font-semibold text-flax-smoke-100 uppercase tracking-normal transition-all duration-300 hover:border-flax-smoke-300 hover:bg-flax-smoke-800 sm:text-sm"
          >
            <svg class="size-4 text-[#a3e635] transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Resume</span>
          </a>
        </div>
      </div>
      <div
        class="absolute bottom-5 flex w-full items-center justify-center px-5 md:justify-between"
      >
        <div class="hidden md:flex">
          <div class="border-flax-smoke-300 relative border">
            <Vue3Lottie
              ref="customControl"
              :animationData="earthLottie"
              :loop="true"
              :autoPlay="true"
            />
          </div>
          <div
            class="flex-center py border-flax-smoke-300 text-flax-smoke-300 w-fit flex-col border border-l-0 font-mono"
          >
            <p
              class="border-flax-smoke-300 flex size-full items-center justify-start border-b pr-2 pl-1 font-bold"
            >
              Working Globally
            </p>
            <p class="flex size-full items-center justify-start pr-2 pl-1">
              Available Sep '24
            </p>
          </div>
        </div>

        <div class="heading-6 text-flax-smoke-500 w-fit">
          <p class="w-full font-bold uppercase">For further inquiries</p>
          <Link
            class="text-flax-smoke-300 h-6 text-right font-medium tracking-wider lowercase"
            label="mukutkumar842@gmail.com"
            :icon="true"
            url="mailto:mukutkumar842@gmail.com"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { earthLottie } from '@/assets/videos';
  import { Button } from '../common';
  import { Vue3Lottie } from 'vue3-lottie';
  import Link from '../Link.vue';
  import { contact } from '@/assets/videos';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { textSplitterIntoChar } from '@/functions';
  import { animateSplitText } from '@/animations';
  import { resumeUrl } from '@/data';
  // import { dataCalConfig, dataCalLink, dataCalNamespace } from '@/data';

  const makeItHappen = ref("Let's Make it happen");
  onBeforeMount(() => {
    makeItHappen.value = textSplitterIntoChar(makeItHappen.value);
  });
  onMounted(() => {
    animateSplitText(
      '#make-it-happen .letters',
      '#make-it-happen',
      1.5,
      0.01,
      0,
    );
  });
</script>

<style>
  .lottie-animation-container {
    height: 100% !important;
  }
  .lottie-animation-container svg {
    height: 100px !important;
    width: fit-content !important;
    margin: -10px -30px !important;
    padding: 0 !important;
  }

  .lottie-animation-container {
    --lottie-animation-container-width: fit-content !important;
    --lottie-animation-container-height: 0% !important;
  }
</style>
