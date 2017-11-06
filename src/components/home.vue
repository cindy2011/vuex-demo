<template>
  <div>我是首页<br>
  <router-link :to="{name:'newslist'}">新闻资讯</router-link>
  <mt-swipe :auto="4000">
	  <mt-swipe-item>1</mt-swipe-item>
	  <mt-swipe-item>2</mt-swipe-item>
	  <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
  </div>
</template>
<script>
export default{
	data(){
		return {}
	}
}
</script>
<style scoped>
.mint-swipe{
	max-height:50px;
}
</style>