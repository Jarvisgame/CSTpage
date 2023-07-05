<template>
  <div v-for="news in newsContent">
    <div class="relative w-full h-auto bg-gray-200 bg-opacity-50 rounded-lg shadow-lg p-2 my-2">
      <!-- 贴纸卡片位置 -->
      <div class="absolute -top-4 -left-4">
        <VStickyNote :time="timeFormat(news)"  width="150" height="150"></VStickyNote>
      </div>
      <!-- 文本内容位置 -->
      <div class=" grid grid-cols-12 pl-36">
        <div class="col-span-8 flex flex-col justify-between p-4 gap-2">
          <!-- 标题部分 -->
          <div class="text-3xl font-bold">{{ news.title }}</div>
          <!-- 简介 -->
          <div class="text-sm">{{ news.text }}</div>
          <!-- 跳转链接 -->
          <div class=" flex justify-end">>>点击查看详情>></div>
        </div>
        <div class="col-span-4 flex flex-col justify-center items-center">
          <img :src="srcFormat(news)"/>
          <!-- <img src="../../assets/image/news/news1.png"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import VStickyNote from '../../components/VStickyNote/VStickyNote.vue';

const props = defineProps<{
  newsContent: any
}>()

function timeFormat(news: any) {
  const temp = news.time.split('-')
  return {
    year: parseInt(temp[0]),
    month: parseInt(temp[1]),
    day: parseInt(temp[2])
  }
}

function srcFormat(news: any) {
  return '_nuxt/assets/image/news/' + news.pic
}

onMounted(() => {
})

</script>