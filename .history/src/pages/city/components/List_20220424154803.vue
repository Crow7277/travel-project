<template>
    <div class="list" ref="wrapper">
        <div class="content">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ currentCity }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                        class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleCity(item.name)"
                    >
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div
                        class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                        @click="handleCity(innerItem.name)"
                    >
                        {{ innerItem.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter: String,
    },
    watch: {
        letter() {
            if (this.letter) {
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        },
    },
    computed: {
        ...mapState({
            currentCity: 'city',
        }),
    },
    methods: {
        handleCity(city) {
            // 没有异步操作，直接进入Mutations
            this.changeCity(city);
            this.$router.push('/');
        },
        ...mapMutations(['changeCity']),
    },

    // activated() {
    //     this.scroll.refresh();
    // },
    // updated() {
    //     this.scroll.refresh();
    // },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, { click: true });
        });
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
    &:before
        border-color: #ccc
    &:after
        border-color: #ccc
.border-bottom
    &:before
        border-color: #ccc
.list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
        line-height: .54rem
        background: #eee
        padding-left: .2rem
        color: #666
        font-size: .26rem
    .button-list
        padding: .1rem .6rem .1rem .1rem
        overflow: hidden
        .button-wrapper
            float: left
            width: 33.33%
            .button
                margin: .1rem
                padding: .1rem 0
                text-align: center
                border: .02rem solid #ccc
                border-radius: .06rem
    .item-list
        .item
            line-height: .76rem
            padding-left: .2rem
</style>
