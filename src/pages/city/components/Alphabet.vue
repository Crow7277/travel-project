<template>
    <ul class="list">
        <li
            class="item"
            v-for="item of letters"
            :key="item"
            :ref="elem => (elems[item] = elem)"
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
import { onUpdated, ref, computed } from 'vue';
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object,
    },

    setup(props, context) {
        let touchStatus = false;
        let startY = 0;
        let timer = null;
        const elems = ref([]);
        const letters = computed(() => {
            const letters = [];
            for (const i in props.cities) {
                letters.push(i);
            }
            return letters;
        });

        onUpdated(() => {
            console.log(elems.value);
            startY = elems.value['A'].offsetTop;
        });

        function handleLetterClick(e) {
            // 触发自定义事件change，该事件有City组件进行监听
            context.emit('change', e.target.innerText);
        }

        function handleTouchStart() {
            // 当开始滑动的时候
            touchStatus = true;
        }

        function handleTouchEnd() {
            // 当结束滑动的时候
            touchStatus = false;
        }

        function handleTouchMove(e) {
            if (!touchStatus) {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                timer = setTimeout(() => {
                    // 首先获得A字母距离顶部的高度
                    // 获得手指位置距离顶部的高度
                    // 将上面的两个高度做差值就可以得到当前手指位置距离A字母顶部的距离
                    // 将距离除以每个字母的高度就可以当前是第几个字母，之后根据第几个字母触发change事件即可
                    // const startY = this.$refs['A'][0].offsetTop;
                    const touchY = e.touches[0].clientY - 79;
                    const index = Math.floor((touchY - startY) / 20);

                    if (index >= 0 && index < letters.value.length) {
                        context.emit('change', letters.value[index]);
                    }
                }, 8);
            }
        }

        return { elems, letters, handleLetterClick, handleTouchMove, handleTouchEnd };
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
