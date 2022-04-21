import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

const router = new Router({
    routes,
});

export default router;

chainWebpack:config=>{
	config.module
	.rule('vue')
	.use('vue-loader')
	.tap(options=>{
	//修改它的选项
		return options	
		})
	},
//实例2：添加一个新的Loader
chainWebpack:config=>{
	//GraphQL Loader
	config.module
	.rule('graphql')
	.test(/\.graphql$)
	.use('graphql-tag/loader')
	.loader('graphql-tag/loader')
	.end()
	//你还可以再添加一个loader
	.use('other-loader')
	.loader('other-loader')
	.end()

	}
}
