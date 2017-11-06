<template>
  <div>
  	<h2>{{msg}}</h2><hr>
  	<h3>{{countBefore}}</h3>
  		<p><button @click="add">加</button><button @click="reduce">减</button></p>
  </div>
</template>
<script>
import store from "../vuex/store.js";
import { mapState,mapMutations,mapGetters } from 'vuex';
export default{
	data(){
		return {
			msg:"Hello World"
		}
	},
	computed:{
		...mapState(["count"]),
		...mapGetters(["countBefore"])
	},
	methods:mapMutations(['add','reduce'])
    ,
	store
}
</script>
<style>
</style>