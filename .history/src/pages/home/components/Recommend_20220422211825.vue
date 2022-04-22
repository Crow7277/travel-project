<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom">
                <img
                    class="item-img"
                    src="	https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg"
                />
                <div class="item-info">
                    <p class="item-title">马鞍山 - 三亚</p>
                    <p class="item-desc">5天跟团旅游包含飞机票</p>
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
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
</style>
