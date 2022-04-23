<template>
    <ul class="list">
        <li
            class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{ item }}
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
            startY: 0,
            timer: null,
        };
    },
    computed: {
        letters() {
            const letters = [];
            for (let i in this.cities) {
                letters.push(i);
            }
            // console.log(letters);
            return letters;
        },
    },
    updated() {
        this.startY = this.$refs['A'][0].offsetTop;
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
        handleTouchMove(e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    // 首先获得A字母距离顶部的高度
                    // 获得手指位置距离顶部的高度
                    // 将上面的两个高度做差值就可以得到当前手指位置距离A字母顶部的距离
                    // 将距离除以每个字母的高度就可以当前是第几个字母，之后根据第几个字母触发change事件即可
                    // const startY = this.$refs['A'][0].offsetTop;
                    const touchY = e.touches[0].clientY - 79;
                    const index = Math.floor((touchY - this.startY) / 20);
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index]);
                    }
                }, 5);
            }
        },
        handleTouchEnd() {
            // 当结束滑动的时候
            this.touchStatus = false;
        },
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
