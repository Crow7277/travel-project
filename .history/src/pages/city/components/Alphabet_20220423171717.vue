<template>
    <ul class="list">
        <li
            class="item"
            v-for="(item, key) of cities"
            :key="key"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{ key }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object,
    },
    data() {
        return {
            // 判断手指是否正在触摸
            touchStatus: false,
        };
    },
    methods: {
        handleLetterClick(e) {
            // 触发自定义事件change，该事件有City组件进行监听
            this.$emit('change', e.target.innerText);
        },
        handleTouchStart() {
            // 当开始滑动的时候
            this.touchStatus = true;
        },
        handleTouchMove() {},
        handleTouchEnd() {},
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
        line-height: .4rem
        text-align: center
        color: $bgColor
</style>
