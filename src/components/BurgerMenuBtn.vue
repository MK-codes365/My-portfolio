<template>
  <MagneticEffect divId="magneto" textId="magnetoText">
    <div v-bind="$attrs" class="fixed right-5 top-5 z-9999 sm:right-8 sm:top-8">
      <div
        id="magneto"
        aria-label="Toggle menu"
        role="button"
        class="flex-center size-12 cursor-pointer rounded-full border border-flax-smoke-700/80 bg-[#161713]/90 shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:border-[#a3e635] hover:bg-[#1f2119] hover:shadow-[0_0_20px_rgba(163,230,53,0.35)] sm:size-14"
      >
        <span
          class="relative flex size-full flex-col items-center justify-center"
          id="magnetoText"
        ></span>
      </div>
    </div>
  </MagneticEffect>
</template>

<script setup lang="ts">
  import MagneticEffect from './MagneticEffect.vue';
</script>

<style scoped>
  #magnetoText::before,
  #magnetoText::after {
    width: 22px;
    content: '';
    display: block;
    height: 2px;
    position: relative;
    margin: auto;
    background-color: #f4f4f1;
    border-radius: 9999px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  #magnetoText::before {
    top: 3.5px;
  }

  #magnetoText::after {
    top: -3.5px;
  }

  .active #magnetoText::before {
    transform: rotate(-45deg);
    top: 1px;
    background-color: #a3e635;
  }

  .active #magnetoText::after {
    transform: rotate(45deg);
    top: -1px;
    background-color: #a3e635;
  }
</style>
