<template>
  <div>
    <div class="relative flex flex-col justify-center bg-orange-300 shadow-md shadow-gray-600 p-2" :style="{
      width: width + 'px', height: height + 'px'}">
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 h-4" :style="{
      width: parseInt(width)/3 + 'px',}" ></div>
      <div class="flex flex-col items-center justify-center font-bold gap-1">
        <div class="text-base text-white">{{ time.month }} 月</div>
        <div class="h-1 w-1/3 from-black to-gray-400 bg-gradient-to-r rounded-md"></div>
        <div class="text-xl text-white">{{ time.day }}</div>
        <div class="h-1 w-2/3 from-black to-gray-400 bg-gradient-to-r rounded-md"></div>
        <div class="text-sm text-white">{{ time.year }}</div>
      </div>

    </div>
    
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  width: string,
  height: string,
  time: {
    year: number,
    month: number,
    day: number
  }
}>()

</script>