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
        <div class="search-content">
            <ul>
                <li>1423</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CitySearch',
    props: {
        cities: Object,
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null,
        };
    },
    watch: {
        keyword() {
            // 由于此处会进行多次计算，所以要使用节流函数节流
            // 当keyword发生改变之后100ms，延时函数才会执行
            if (this.timer) clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                const result = [];
                for (let i in this.cities) {
                    // i:A ~ Z
                    // this.cities[i]为cities中的每个字母对应的数组对象
                    this.cities[i].forEach(value => {
                        // value为
                        if (
                            value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword) > -1
                        ) {
                            result.push(value);
                        }
                    });
                }
            }, 100);
        },
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
        overflow hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: green
</style>
