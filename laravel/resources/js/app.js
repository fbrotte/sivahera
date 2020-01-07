import Vue from 'vue'
import VueRouter from 'vue-router'
import Lang from 'vue-lang'
import App from './components/App'
import Welcome from './components/Welcome'
var VueScrollTo = require('vue-scrollto');

Vue.use(VueRouter)
Vue.use(VueScrollTo, {
	duration: 2000,
	easing: "ease"
})


const locales = {
	'fr': require('../lang/fr.json'),
	'en': require('../lang/en.json'),
  }
  
Vue.use(Lang, {lang: 'fr', locales: locales})

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Welcome
		},
	],
});

const app = new Vue({
	el: '#app',
	data: {
		image_src: '/img/cerises-vertes.jg'
	},
	components: { App },
	router,
});