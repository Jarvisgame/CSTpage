<template>
  <div>
    <HeaderBar class=" fixed w-full z-50"></HeaderBar>
    <div class="relative bg-white">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

import HeaderBar from '../components_page/Landing/HeaderBar.vue';
</script>