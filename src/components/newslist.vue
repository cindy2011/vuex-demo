<template>
  <div>
  	 <ul>
  	 	<li v-for="data in datalist">
  	 		<span v-html="data.title"></span>
  	 		<i >{{data.date|convertDate}}</i>
  	 	</li>
  	 	
  	 </ul>

  </div>
</template>
<script>
export default{
	data(){
		return {
			datalist:[{
				title:"哈哈哈1",
				date:"2017-11-06T02:16:02.038Z"
			},{
				title:"哈哈哈2",
				date:"2017-11-06T02:16:02.038Z"
			},{
				title:"哈哈哈3",
				date:"2017-11-06T02:16:02.038Z"
			}]
		}
	}
}
</script>
<style>
</style>