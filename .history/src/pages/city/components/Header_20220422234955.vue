<template>
    <div class="header">城市选择
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    
</template>

<script>
export default {
    name: 'CityHeader',
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
</style>
