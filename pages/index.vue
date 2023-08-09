<template>
  <div class="bg-blue-700 bg-opacity-90 justify-center overflow-x-hidden">
    <div class="fixed inset-0 top-0 left-0 w-full h-full object-cover">
      <img class="h-full" src="../assets/image/background-fix.jpg"/>
    </div>
    <div class="w-full h-full">
      <!-- 顶层 -->
      <div class="relative flex justify-center w-full">
        <div class="absolute flex flex-col max-w-8xl justify-items-start justify-center gap-4 z-10 text-white" style="min-height: 70vh; padding-top: 20vh; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
          <div class=" text-5xl">欢迎来到</div>
          <div class=" text-5xl">北京理工大学</div>
          <div class=" text-6xl">网络安全实验室</div>
          <div class=" text-3xl h-full">Welcome to Beijing Institute of Technology Network Security Laboratory</div>
          <div class="flex justify-start pt-4 gap-24">
            <VButton icon="ui-play"
                    circle
                    type="white"
                    spacing="xl"
                    to="/news"
                    class="bg-opacity-70"
            >
              <span class="text-white">近期新闻</span>
            </VButton>
            <VButton icon="ui-play"
                    circle
                    type="white"
                    spacing="xl"
                    to="/join"
                    class="bg-opacity-70"
            >
            <span class="text-white">加入我们</span>
            </VButton>
          </div>
        </div>
        <img class="relative w-full" style="min-height: 80vh;"  src="../assets/image/background1.jpg"/>
      </div>
      <!-- 中间间隔 -->
      <div class="relative h-8 w-full bg-white z-10"></div>
      <!-- 第二层 -->
      <div class="relative w-full bg-sky-700 bg-opacity-50">
        <div class="relative flex flex-col justify-items-center items-center mx-auto max-w-7xl gap-20 text-white" style="min-height: 60vh; padding-top: 10vh; padding-bottom: 10vh; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
          <div class="text-6xl">{{ infoContent.title }}</div>
          <div class=" grid grid-cols-4 items-center justify-items-center gap-6">
            <div v-for="info in infoContent.content" class="flex flex-col items-center justify-items-center gap-6">
              <div class="text-6xl text-yellow-400">
                {{ info.number }}
              </div>
              <div class="">{{ info.text }}</div>
            </div>
          </div>
          <div class=" flex flex-col text-3xl justify-items-center">
            <div v-for="desc in infoContent.describe" class="flex justify-center">{{ desc }}</div>
          </div>
        </div>
      </div>
      <!-- 中间间隔 -->
      <div class="relative h-8 w-full bg-white z-10"></div>
      <!-- 第三层 -->
      <div class="relative w-full bg-white z-10">
        <div class="relative flex flex-col justify-items-center items-center mx-auto max-w-7xl font-bold gap-20 z-10" style="min-height: 60vh; padding-top: 10vh; padding-bottom: 10vh;">
          <div class="text-5xl">{{ newsContent.title }}</div>
          <div class="grid grid-cols-3 gap-6 p-3 justify-center items-center">
            <img v-for="news in newsContent.content" :src="'_nuxt/assets/image/news/' + `${news.pic}`" />
            <div v-for="news in newsContent.content">
              <div class="text-2xl">
                {{ news.title }}
              </div>
              <div class="text-xl font-thin shadow-none pt-3">
                {{ news.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间间隔 -->
      <div class="relative h-8 w-full bg-white z-10" id="background-change"></div>
      <!-- 第四层 -->
      <div class="relative w-full bg-sky-700 bg-opacity-50">
        <div class="relative flex flex-col justify-items-center items-center mx-auto max-w-7xl font-bold gap-6 text-white" style="min-height: 60vh; padding-top: 10vh; padding-bottom: 10vh; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
          <div class="text-5xl">{{ achieveContent.title }}</div>
          <div class="text-xl" style="padding-left: 50vh;">{{ achieveContent.subtitle }}</div>
          <div class=" grid grid-cols-3 items-center justify-items-center gap-24">
            <div v-for="achi in achieveContent.content" class="flex flex-col items-center justify-items-center gap-6">
              <div class="text-6xl text-yellow-400">
                {{ achi.number }}
              </div>
              <div class="">{{ achi.text }}</div>
            </div>
          </div>
          <div class="flex flex-col text-4xl justify-items-center" style="padding-top: 10vh;">
            <div v-for="desc in achieveContent.describe" class="flex justify-center">{{ desc }}</div>
          </div>
        </div>
      </div>
      <!-- 中间间隔 -->
      <div class="relative h-8 w-full bg-white z-10" id="background-change"></div>
      <!-- 第五层 -->
      <div class="relative w-full bg-sky-700 bg-opacity-50">
        <div class="relative flex flex-col justify-items-center items-center mx-auto max-w-7xl font-bold gap-6 text-white" style="padding-top: 10vh; padding-bottom: 10vh; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
          <div class="text-5xl">测试展示内容（新闻）</div>
        </div>
      </div>
      <!-- 中间间隔 -->
      <div class="relative h-8 w-full bg-white z-10" id="background-change"></div>
      <div class="relative w-full bg-white z-10">
        <div class="relative flex flex-col justify-items-center items-center mx-auto max-w-7xl gap-20 z-10" style="min-height: 60vh; padding-top: 10vh; padding-bottom: 10vh">
          <div class="text-5xl">{{ newsContent.title }}</div>
          <div class="grid grid-cols-4 justify-items-center items-center gap-3 overflow-hidden">
            <div class="relative col-span-2 w-full shadow-lg">
              <div class="absolute text-white text-lg font-bold p-2 z-10 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">{{ newsContent.content[0].title }}</div>
              <img class="relative h-full" :src="'_nuxt/assets/image/news/' + `${newsContent.content[0].pic}`" />
              <div class="absolute bottom-0 w-full h-8 bg-gradient-to-t from-gray-900 to-transparent shadow"></div>
            </div>

            <div class="relative col-span-1 flex flex-col gap-3 w-full h-full">
              <div class="relative bg-opacity-50 flex justify-center p-6 text-xl shadow-lg h-full">
                {{ newsContent.content[0].title }}
                <div class="absolute w-full h-1 bg-sky-600 bottom-0"></div>
              </div>
              <div class="relative bg-opacity-50 flex justify-center p-6 text-xl shadow-lg h-full">
                {{ newsContent.content[1].title }}
                <div class="absolute w-full h-1 bg-sky-600 bottom-0"></div>
              </div>
            </div>

            <div class="relative col-span-1 flex flex-col gap-3 w-full h-full">
              <div class="relative bg-opacity-50 flex justify-center p-6 text-xl shadow-lg h-full">
                {{ newsContent.content[2].title }}
                <div class="absolute w-full h-1 bg-sky-600 bottom-0"></div>
              </div>
              <div class="relative bg-opacity-50 flex justify-center p-6 text-xl shadow-lg h-full">
                {{ newsContent.content[1].title }}
                <div class="absolute w-full h-1 bg-sky-600 bottom-0"></div>
              </div>
            </div>

            <div class="relative col-span-1 flex flex-col gap-3 w-full h-full">
              <div class="relative bg-opacity-50 flex justify-center p-6 text-xl shadow-lg h-full">
                {{ newsContent.content[2].title }}
                <div class="absolute w-full h-1 bg-sky-600 bottom-0"></div>
              </div>
              <div class="relative bg-opacity-50 flex justify-center p-6 text-xl shadow-lg h-full">
                {{ newsContent.content[1].title }}
                <div class="absolute w-full h-1 bg-sky-600 bottom-0"></div>
              </div>
            </div>

            <div class="relative col-span-1 flex flex-col gap-3 w-full h-full">
              <div class="relative bg-opacity-50 flex justify-center p-6 text-xl shadow-lg h-full">
                {{ newsContent.content[2].title }}
                <div class="absolute w-full h-1 bg-sky-600 bottom-0"></div>
              </div>
              <div class="relative bg-opacity-50 flex justify-center p-6 text-xl shadow-lg h-full">
                {{ newsContent.content[1].title }}
                <div class="absolute w-full h-1 bg-sky-600 bottom-0"></div>
              </div>
            </div>

            <div class="relative col-span-2 w-full shadow-lg">
              <div class="absolute text-white text-lg font-bold p-2 z-10 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">{{ newsContent.content[1].title }}</div>
              <img class="relative h-full" :src="'_nuxt/assets/image/news/' + `${newsContent.content[1].pic}`" />
              <div class="absolute bottom-0 w-full h-8 bg-gradient-to-t from-gray-900 to-transparent shadow"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">

definePageMeta({ layout: 'landing'})

const changebackground = ref(true)

onMounted(() => {
  if (window.IntersectionObserver) {
    const scrollObserver = new IntersectionObserver((entries) => {
      changebackground.value = entries[0].isIntersecting
    })
    scrollObserver.observe(document.getElementById('background-change')!)
  }
})

const newsContent = {
  title: 'X101 · 要闻',
  content: [{
    time: '2023-06-21',
    title: '北京理工大学网络空间安全学院2023年全国优秀大学生暑期夏令营圆满落幕',
    text: '北京理工大学网络空间安全学院于6月19日至6月21日成功举办了“北京理工大学网络空间安全学院2023年全国优秀大学生暑期夏令营”，来自全国多所重点高校的91名相关专业优秀大学生从366位报名者中脱颖而出，参加了此次夏令营。本次夏令营全程采取线上的形式，历时3天，主要包括云印象北理、云学院学科介绍、云师生交流等在线交流活动。',
    link: '',
    pic: 'news1.png'
  },{
    time: '2023-06-20',
    title: '网络空间安全学院开展“就业引航，助力成长”主题宣讲',
    text: '为贯彻凝心聚力促就业，科创领航促发展的培养理念，帮助同学们掌握正确的求职方法与求职心态，在毕业季寻找到适合自己的岗位，2023年6月14日晚，学院团学联学术创新部组织开展了“就业引航，助力成长”就业主题宣讲，为学生们的就业保驾护航。本次宣讲邀请到了优秀毕业年级学生王亚杰和刘星彤。',
    link: '',
    pic: 'news2.png'
  },{
    time: '2023-06-14',
    title: '网络空间安全学院与生命学院机关党支部开展“联学共建聚合力、互学共谋促发展”主题党日活动',
    text: '北京理工大学网络空间安全学院于6月19日至6月21日成功举办了“北京理工大学网络空间安全学院2023年全国优秀大学生暑期夏令营”，来自全国多所重点高校的91名相关专业优秀大学生从366位报名者中脱颖而出，参加了此次夏令营。本次夏令营全程采取线上的形式，历时3天，主要包括云印象北理、云学院学科介绍、云师生交流等在线交流活动。',
    link: '',
    pic: 'news3.jpg'
}]}

const infoContent = {
  title: '在网络安全实验室实现你的学术梦想',
  content: [{
    number: '90+',
    text: '个国家和地区的学者参与学习',
  },{
    number: '43',
    text: '个相关专业和研究方向',
  },{
    number: '18',
    text: '个正在进行的国家级项目',
  },{
    number: '1：11',
    text: '的师生比例',
  }],
  describe: ['作为一家致力于推动网络安全领域前沿研究和创新的实验室','我们提供一个充满挑战和机遇的学术环境，旨在培养出杰出人才']
}

const achieveContent = {
  title: '“国内顶尖网络安全研究中心”',
  subtitle: '————我自己说的',
  content: [{
    number: '4',
    text: '个省部级平台',
  },{
    number: '1',
    text: '项全国首批虚拟教研室建设试点',
  },{
    number: '1',
    text: '项北京市教学成果奖一等奖',
  }],
  describe: ['查看更多细节信息']
}

</script>