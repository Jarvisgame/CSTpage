<template>
  <div class="bg-red-700 bg-opacity-90 justify-center">
    <div class="fixed inset-0 top-0 left-0 w-full h-full object-cover">
      <img src="../assets/image/background-fix.jpg"/>
    </div>
    <div class="w-full h-full">
      <!-- 顶层 -->
      <div class="relative flex justify-center w-full">
        <div class="absolute flex flex-col max-w-8xl justify-items-start justify-center font-bold gap-4 z-10 text-white" style="min-height: 70vh; padding-top: 20vh; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
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
      <div class="relative w-full bg-red-700 bg-opacity-50">
        <div class="relative flex flex-col justify-items-center items-center mx-auto max-w-7xl font-bold gap-20 text-white" style="min-height: 60vh; padding-top: 10vh; padding-bottom: 10vh; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
          <div class="text-5xl">在网络安全实验室实现你的学术梦想</div>
          <div class=" grid grid-cols-4 items-center justify-items-center gap-6">
            <div class="flex flex-col items-center justify-items-center gap-6">
              <div class="text-6xl text-yellow-400">
                90+
              </div>
              <div class="">个国家和地区的学者参与学习</div>
            </div>
            <div class="flex flex-col items-center justify-items-center gap-6">
              <div class="text-6xl text-yellow-400">
                43
              </div>
              <div>个相关专业和研究方向</div>
            </div>
            <div class="flex flex-col items-center justify-items-center gap-6">
              <div class="text-6xl text-yellow-400">
                18
              </div>
              <div>个正在进行的国家级项目</div>
            </div>
            <div class="flex flex-col items-center justify-items-center gap-6">
              <div class="text-6xl text-yellow-400">
                1：11
              </div>
              <div>的师生比例</div>
            </div>
          </div>

          <div class=" flex flex-col text-3xl justify-items-center">
            <div class=" flex justify-center">作为一家致力于推动网络安全领域前沿研究和创新的实验室</div>
            <div class=" flex justify-center">我们提供一个充满挑战和机遇的学术环境，旨在培养出杰出人才</div>
          </div>
        </div>
      </div>
      <!-- 中间间隔 -->
      <div class="relative h-8 w-full bg-white z-10"></div>
      <!-- 第三层 -->
      <div class="relative w-full bg-white z-10">
        <div class="relative flex flex-col justify-items-center items-center mx-auto max-w-7xl font-bold gap-20 z-10" style="min-height: 60vh; padding-top: 10vh; padding-bottom: 10vh; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
          <div class="text-5xl">实验室新闻和故事</div>
          <div class="grid grid-cols-3 gap-6 p-3 justify-center items-center">
            <img src="../assets/image/news/news1.png" />
            <img src="../assets/image/news/news2.png" />
            <img src="../assets/image/news/news3.jpg" />
            <div>
              <div class="text-2xl">
                北京理工大学网络空间安全学院2023年全国优秀大学生暑期夏令营圆满落幕
              </div>
              <div class="text-xl font-thin shadow-none pt-3">
                北京理工大学网络空间安全学院于6月19日至6月21日成功举办了“北京理工大学网络空间安全学院2023年全国优秀大学生暑期夏令营”，来自全国多所重点高校的91名相关专业优秀大学生从366位报名者中脱颖而出，参加了此次夏令营。本次夏令营全程采取线上的形式，历时3天，主要包括云印象北理、云学院学科介绍、云师生交流等在线交流活动。
              </div>
            </div>
            <div>
              <div class="text-2xl">
                网络空间安全学院开展“就业引航，助力成长”主题宣讲'
              </div>
              <div class="text-xl font-thin shadow-none pt-3">
                为贯彻凝心聚力促就业，科创领航促发展的培养理念，帮助同学们掌握正确的求职方法与求职心态，在毕业季寻找到适合自己的岗位，2023年6月14日晚，学院团学联学术创新部组织开展了“就业引航，助力成长”就业主题宣讲，为学生们的就业保驾护航。本次宣讲邀请到了优秀毕业年级学生王亚杰和刘星彤。
              </div>
            </div>
            <div>
              <div class="text-2xl">
                网络空间安全学院与生命学院机关党支部开展“联学共建聚合力、互学共谋促发展”主题党日活动
              </div>
              <div class="text-xl font-thin shadow-none pt-3">
                北京理工大学网络空间安全学院于6月19日至6月21日成功举办了“北京理工大学网络空间安全学院2023年全国优秀大学生暑期夏令营”，来自全国多所重点高校的91名相关专业优秀大学生从366位报名者中脱颖而出，参加了此次夏令营。本次夏令营全程采取线上的形式，历时3天，主要包括云印象北理、云学院学科介绍、云师生交流等在线交流活动。
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间间隔 -->
      <div class="relative h-8 w-full bg-white z-10"></div>
      <!-- 第三层 -->
      <div class="relative w-full bg-red-700 bg-opacity-50">
        <div class="relative flex flex-col justify-items-center items-center mx-auto max-w-7xl font-bold gap-6 text-white" style="min-height: 60vh; padding-top: 10vh; padding-bottom: 10vh; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
          <div class="text-5xl">“国内顶尖网络安全研究中心”</div>
          <div class="text-xl" style="padding-left: 50vh;">————我自己说的</div>
          <div class=" grid grid-cols-3 items-center justify-items-center gap-24">
            <div class="flex flex-col items-center justify-items-center gap-6">
              <div class="text-6xl text-yellow-400">
                4
              </div>
              <div class="">个省部级平台</div>
            </div>
            <div class="flex flex-col items-center justify-items-center gap-6">
              <div class="text-6xl text-yellow-400">
                1
              </div>
              <div>项全国首批虚拟教研室建设试点</div>
            </div>
            <div class="flex flex-col items-center justify-items-center gap-6">
              <div class="text-6xl text-yellow-400">
                1
              </div>
              <div>项北京市教学成果奖一等奖</div>
            </div>
          </div>

          <div class="flex flex-col text-4xl justify-items-center" style="padding-top: 10vh;">
            <div class=" flex justify-center">查看更多细节信息</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import NewsCard from '../components_page/News/NewsCard.vue'

definePageMeta({ layout: 'landing'})

const newsContent = [{
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
}]

</script>