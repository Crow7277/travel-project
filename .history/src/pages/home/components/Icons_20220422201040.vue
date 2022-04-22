<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/package.png" alt="" />
            </div>
            <p>热门景点</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
};
</script>

<style lang="stylus" scoped>
.icons
    height: 0
    padding-bottom: 50%
    overflow: hidden
    background-color: pink
    .icon
        position relative
        float: left
        width: 25%
        padding-bottom: 25%
        background-color: skyblue
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
</style>
