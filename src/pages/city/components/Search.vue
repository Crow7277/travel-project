<template>
    <div>
        <div class="search">
            <input
                v-model="keyword"
                class="search-input"
                type="text"
                placeholder="输入城市名或拼音"
            />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li
                    class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCity(item.name)"
                >
                    {{ item.name }}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';

export default {
    name: 'CitySearch',
    props: {
        cities: Object,
    },
    setup(props) {
        const keyword = ref('');
        const list = ref([]);
        let timer = null;
        const store = useStore();
        const router = useRouter();
        const search = ref(null);

        let hasNoData = computed(() => {
            return !list.length;
        });

        watch(keyword, (keyword, prevKeyword) => {
            // 由于此处会进行多次计算，所以要使用节流函数节流
            // 当keyword发生改变之后100ms，延时函数才会执行
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            if (!keyword) {
                list.value = [];
            }
            timer = setTimeout(() => {
                const result = [];
                for (const i in props.cities) {
                    // i:A ~ Z
                    // this.cities[i]为cities中的每个字母对应的数组对象
                    props.cities[i].forEach(value => {
                        // value为cities中的每个字母对应的数组对象的每个元素
                        // 判断keyword是否存在于spell与name中，不存在就push
                        if (value.spell.indexOf(keyword) > -1 || value.name.indexOf(keyword) > -1) {
                            result.push(value);
                        }
                    });
                }
                list.value = result;
            }, 100);
        });

        function handleCity(city) {
            // 没有异步操作，直接进入Mutations
            store.commit('changeCity', city);
            router.push('/');
        }

        onMounted(() => {
            new BScroll(search.value, {
                click: true,
            });
        });
        return { keyword, list, hasNoData, handleCity, search };
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .search
        height: .72rem
        padding: 0 .1rem
        background $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding: 0 .1rem
            line-height: .62rem
            text-align: center
            border-radius: .06rem
            color: #666
    .search-content
        z-index: 1
        overflow hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            color: #666
            background: #fff
</style>
