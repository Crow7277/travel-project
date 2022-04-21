import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home.vue';
import List from '../pages/List/List.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/list',
        name: 'List',
        component: List,
    },
];

const router = new Router({
    routes,
});

export default router;

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let que = [];
    let res = [];
    if (root !== null) {
        que.push(root);
    }
    while (que.length) {
        let len = que.length;
        let list = [];
        for (let i = 0; i < len; i++) {
            let node = que.shift();
            list.push(node.val);
            for (let child of node.children) {
                que.push(child);
            }
        }
        res.push(list);
    }
    return res;
};
