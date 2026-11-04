<template>
  <component
    :is="tag"
    class="relative inline-block h-[1.35em] overflow-hidden leading-tight select-none whitespace-nowrap"
  >
    <a @click.prevent="gotoSection(url)" :href="url" class="group block h-full">
      <p
        class="font-fancy flex items-center transition-transform duration-300 ease-in-out will-change-transform group-hover:-translate-y-full"
      >
        <svg
          v-if="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          class="mr-1 -scale-x-75 scale-y-75 fill-current"
        >
          <path
            d="M7.82834 17.2929L10.1213 19.586L8.70709 21.0001L4 16.2929L8.7071 11.5858L10.1213 13L7.82844 15.2929L18 15.2928L17.9999 3H19.9999L20 16.2928C20 16.8451 19.5523 17.2928 19 17.2928L7.82834 17.2929Z"
          ></path>
        </svg>
        <span>{{ label }}</span>
      </p>
      <p
        aria-hidden="true"
        class="font-fancy flex items-center transition-transform duration-300 ease-in-out will-change-transform group-hover:-translate-y-full"
      >
        <svg
          v-if="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          class="mr-1 -scale-x-75 scale-y-75 fill-current"
        >
          <path
            d="M7.82834 17.2929L10.1213 19.586L8.70709 21.0001L4 16.2929L8.7071 11.5858L10.1213 13L7.82844 15.2929L18 15.2928L17.9999 3H19.9999L20 16.2928C20 16.8451 19.5523 17.2928 19 17.2928L7.82834 17.2929Z"
          ></path>
        </svg>
        <span>{{ label }}</span>
      </p>
    </a>
  </component>
</template>

<script setup lang="ts">
  import { gotoSection } from '@/functions';

  defineProps({
    tag: {
      type: String,
      default: 'p', // Default tag if not provided
    },
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  });
</script>
