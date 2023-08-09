<template>
  <div>
    <div v-show="!$device.isTop" class="w-full h-1 bg-sky-800 bg-opacity-80"></div>
    <header :class="{
      'bg-white text-sky-800 text-xl': $device.isTop,
      'bg-sky-800 text-white bg-opacity-80 text-base': !$device.isTop,
    }"
            class="h-auto duration-300 border-transparent p-3">
      <div class="container mx-auto max-w-8xl h-auto flex items-center justify-between">
        <RouterLink
          class="ml-2 font-eng flex-shrink-0 py-1 font-bold"
          to="/">
          <span>CST Lab</span>
          <span class="px-2 text-white bg-yellow-400 ml-1 rounded" :class="{
            'text-sm': $device.isTop,
            ' text-xs': !$device.isTop
          }">Beta</span>
        </RouterLink>

        <div class="ml-8 h-full flex items-center space-x-4 flex-wrap-0 font-bold">
          <RouterLink
            v-for="page in pages"
            :class="[page.to === $route.path ? '' : 'hover:bg-yellow-400 hover:bg-opacity-70']"
            :to="page.to"
            class="h-full flex items-center cursor-pointer px-3 relative duration-200 flex-shrink-0 rounded-lg">
            <div
              :class="[page.to === $route.path ? 'w-full' : 'w-0']"
              class="z-0 absolute h-2 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1 rounded
                bg-yellow-400 duration-300 ease-out-back"
            ></div>
            <div class="z-1 relative">
              {{ page.name }}
            </div>
          </RouterLink>
        </div>
      </div>
    </header>
  </div>
  
</template>

<script lang="ts" setup>

const pages = ref([
  {
    name: '首页',
    to: '/',
  },{
    name: '实验室概况',
    to: '/overview',
  },{
    name: '师资团队',
    to: '/professor',
  },{
    name: '教育教学',
    to: '/master',
  },{
    name: '科研学术',
    to: '/doctor',
  },{
    name: '人才培养',
    to: '/freshman',
  },{
    name: '国际合作',
    to: '/cooperation',
  }
])

</script>