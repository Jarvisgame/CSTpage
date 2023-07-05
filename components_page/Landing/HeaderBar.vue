<template>
  <header :class="{
    'bg-transparent border-black': $device.isTop,
    'bg-black bg-opacity-50': !$device.isTop,
  }"
          class="h-16 duration-100 border-transparent text-white">
    <div class="container mx-auto max-w-7xl h-full flex items-center justify-between">
      <RouterLink
        class="ml-2 font-eng flex-shrink-0 py-1 font-bold text-xl"
        to="/">
        <span class="">CST Lab</span>
        <span class="px-2 text-white bg-sky-500 text-xs ml-1 rounded">Beta</span>
      </RouterLink>

      <div class="ml-8 p-2 h-full flex items-center space-x-4 flex-wrap-0 font-bold">
        <RouterLink
          v-for="page in pages"
          :class="[page.to === $route.path ? '' : 'hover:bg-gray-600 hover:bg-opacity-70']"
          :to="page.to"
          class="h-full flex items-center cursor-pointer px-3 relative duration-200 flex-shrink-0 rounded-lg">
          <div
            :class="[page.to === $route.path ? 'w-full' : 'w-0']"
            class="z-0 absolute h-2 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1 rounded
              bg-sky-500 duration-300 ease-out-back"
          ></div>
          <div class="z-1 relative">
            {{ page.name }}
          </div>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>

const pages = ref([
  {
    name: '首页',
    to: '/',
  },{
    name: '学院概况',
    to: '/lab',
  },{
    name: '师资队伍',
    to: '/professor',
  },{
    name: '人才培养',
    to: '/master',
  },{
    name: '科学研究',
    to: '/doctor',
  },{
    name: '学生工作',
    to: '/freshman',
  },{
    name: '党群工作',
    to: '/freshman',
  },{
    name: '招生就业',
    to: '/freshman',
  },{
    name: '合作交流',
    to: '/freshman',
  },{
    name: '信息服务',
    to: '/freshman',
  },
])

</script>