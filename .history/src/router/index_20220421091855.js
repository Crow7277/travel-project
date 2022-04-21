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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let que = [];
    let res = [];
    if (root !== null) {
        que.push(root);
    }
    while (que.length) {
        let size = que.length;
        for (let i = 0; i < size; i++) {
            const node = que.shift();
            if (i === size - 1) {
                res.push(node.val);
            }
            node.left && que.push(node.left);
            node.right && que.push(node.right);
        }
    }
    return res;
};
