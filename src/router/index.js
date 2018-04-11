import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import shuidao from '@/components/shuidao'
import gengdao from '@/components/gengdao'
import candao from '@/components/candao'
import pingjia from '@/components/pingjia'
import zaipei from '@/components/zaipei'
import turang from '@/components/turang'
import huanjing from '@/components/huanjing'
import qihou from '@/components/qihou'
import guicheng from '@/components/guicheng'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			component: login,
		},
    	{
			path: '/home',
			name: 'home',
			component: home,
			children: [
				{
					path: '/shuidao',
					name: 'shuidao',
					component: shuidao
				}, {
					path: '/gengdao',
					name: 'gengdao',
					component: gengdao
				} , {
					path: '/candao',
					name: 'candao',
					component: candao
				}, {
					path: '/pingjia',
					name: 'pingjia',
					component: pingjia
				}, {
					path: '/guicheng',
					name: 'guicheng',
					component: guicheng
				}, {
					path: '/zaipei',
					name: 'zaipei',
					component: zaipei
				}, {
					path: '/turang',
					name: 'turang',
					component: turang
				}, {
					path: '/huanjing',
					name: 'huanjing',
					component: huanjing
				}, {
					path: '/qihou',
					name: 'qihou',
					component: qihou
				}
			]
		},
	]
})
