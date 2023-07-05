<template>
  <div class="bg-white">
    <div class="w-full h-full">
      <!-- 顶层 -->
      <div class="relative w-full bg-black">
        <div class="absolute flex flex-col mx-auto max-w-7xl items-start justify-center font-bold gap-4 z-10" style="min-height: 80vh; padding-top: 20vh; padding-bottom: 10vh; padding-left: 13vw">
          <div class=" text-5xl text-white">北京理工大学</div>
          <div class=" text-6xl text-white">网络空间安全学院</div>
          <div class=" text-3xl h-full from-blue-400 to-green-400 bg-gradient-to-r bg-clip-text text-transparent">School of Cyberspace Science and Technology</div>
          <div class="flex justify-start pt-4 gap-24">
            <VButton icon="ui-play"
                    circle
                    type="dark"
                    spacing="xl"
                    to="/news"
                    class="bg-opacity-70"
            >
              近期新闻
            </VButton>
            <VButton icon="ui-play"
                    circle
                    type="dark"
                    spacing="xl"
                    to="/join"
                    class="bg-opacity-70"
            >
              加入我们
            </VButton>
          </div>
        </div>
        <img class="relative opacity-60 w-full" src="../assets/image/background.png"/>
      </div>
      <!-- 第二层 -->
      <div class="flex justify-between mx-auto max-w-7xl font-bold gap-20" style="min-height: 20vh; padding-top: 10vh; padding-bottom: 10vh;">
        <div>为服务国家战略、贯彻落实总体国家安全观，北京理工大学网络空间安全学院于2020年正式成立。学院以建成“中国特色、世界一流”的网络空间安全学院为目标，按照“抢抓战机、高点起步、增量发展、创新机制”的思路推动学院高质量跨越式发展。</div>
        <div class=" flex flex-col items-end text-3xl h-full whitespace-nowrap">
          <span>关于我们</span>
          <div class="h-1 w-1/3 from-blue-400 to-green-400 bg-gradient-to-r mt-2"></div>
        </div>
      </div>
      <!-- 第三层 -->
      <div class="relative w-full bg-black">
        <div class="absolute flex flex-col mx-auto items-start justify-start pt-12  z-10" style="min-height: 80vh; padding-bottom: 10vh; padding-left: 13vw; padding-right: 13vw" >
          <div class=" grid grid-cols-12">
            <div class="col-span-2 flex flex-col font-bold whitespace-nowrap">
              <div class=" text-3xl text-white">News</div>
              <div class=" text-6xl text-white">新闻</div>
            </div>
            <div class=" col-span-10 flex flex-col justify-center items-center">
              <!-- 这里放新闻卡片 -->
              <NewsCard :newsContent="newsContent"></NewsCard>
            </div>
          </div>

        </div>
        <img class="relative opacity-60 w-full" src="../assets/image/background1.jpg"/>
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