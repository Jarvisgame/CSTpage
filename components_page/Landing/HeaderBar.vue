<template>
  <header :class="{
    'bg-transparent border-black': $device.isTop,
    'bg-black bg-opacity-50': !$device.isTop,
  }"
          class="h-16 duration-100 border-transparent text-white">
    <div class="container mx-auto max-w-7xl h-full flex items-center">
      <RouterLink
        class="ml-2 font-eng flex-shrink-0 py-1 font-bold text-xl"
        to="/">
        <span class="">CST Lab</span>
        <span class="px-2 text-white bg-sky-500 text-xs ml-1 rounded">Beta</span>
      </RouterLink>

      <div class="ml-8 p-2 h-full flex items-center space-x-4 flex-wrap-0">
        <RouterLink
          v-for="page in pages"
          :class="[page.to === $route.path ? '' : 'hover:bg-gray-200']"
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

      <!-- <div v-if="!userStore.isLoggedIn"
           class="ml-auto flex-shrink-0"
      >
        <VButton
          :to="'/login'"
          icon="ui-log-in-03"
          shadow
          spacing="xl"
          circle
          size="small"
          type="purple">
          登录
        </VButton>
      </div>
      <div v-else
           class="ml-auto h-full flex items-center space-x-4 flex-shrink-0  relative px-4"
           style="background: linear-gradient(to right, transparent 0px, white 30px)">
        <RouterLink
          class="h-full flex-center cursor-pointer px-3 relative duration-200 hover:bg-gray-200"
          to="/learn/space">
          <div class="z-1 relative">
            <VIcon name="ui-home-04"></VIcon>
            <span class="ml-1">学习空间</span>
          </div>
        </RouterLink>
        <div class="h-full px-2 flex items-center cursor-pointer hover:bg-gray-200"
             @click="showUserMenu">
          <VIcon name="ui-user-03"></VIcon>
          <div class="ml-1  text-center transform scale-90 text-gray-600 whitespace-nowrap line-ellipse"
               style="max-width: 150px">
            {{ userStore.user.name }}
          </div>
        </div>
      </div> -->
    </div>
  </header>
</template>

<script lang="ts" setup>
import Device, { IDevice } from 'plugins/Device';


const $device = useNuxtApp().$device as IDevice
const pages = ref([
  {
    name: '首页',
    to: '/',
  },{
    name: '养鸡场',
    to: '/lab',
  },{
    name: '农场主',
    to: '/professor',
  },{
    name: '硕士火鸡',
    to: '/master',
  },{
    name: '博士火鸡',
    to: '/doctor',
  },{
    name: '鸡饲料',
    to: '/freshman',
  },
])

</script>