<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item">
                <div class="item-img-wrapper">
                    <img class="item-img" src="	https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg
" alt="" />
                </div>
                <div class="item-info">
                    <p class="item-title"></p>
                    <p class="item-desc"></p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
};
</script>

<style lang="stylus" scoped>
.title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
.item
    overflow: hidden
    display: flex
    height: 1.9rem
    background-color: red
</style>
