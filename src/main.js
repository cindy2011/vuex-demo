import Vue from "vue";

import VueRouter from "vue-router";
import Moment from "moment";
import Axios from "axios";
import Mint from"mint-ui";
import "mint-ui/lib/style.css";

import App from "./app.vue";
import Home from "./components/home";
import Member from "./components/member";
import Search from "./components/search";
import Shopcart from "./components/shopcart";
import Newslist from "./components/newslist";
import Count from "./components/count";
import "./vendor/mui/css/mui.min.css";



Vue.use(Mint);
Vue.use(VueRouter);
Vue.prototype.$axios=Axios;

Vue.component("Swipe", Mint.Swipe);
Vue.component("SwipeItem", Mint.SwipeItem);
Vue.filter("convertDate",function(value){
   return Moment(value).format("YYYY-MM-DD")
});
let router = new VueRouter({
    linkActiveClass:"mui-active",
    routes: [{
        path: "/",
        redirect: { name: 'home' }
    }, {
        path: "/home",
        name: "home",
        component: Count
    }, {
        path: "/member",
        name: "member",
        component:Member
    }, {
        path: "/shopcart",
        name: "shopcart",
        component:Shopcart
    }, {
        path: "/search",
        name: "search",
        component:Search
    }, {
        path: "/newslist",
        name: "newslist",
        component:Newslist
    }]
})

new Vue({
    el: "#app",
    router,
    render: c => c(App)
})