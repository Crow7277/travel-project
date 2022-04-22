<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="" />
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props:{
        
    }
    computed: {
        // 判断图标存在于第几页
        pages() {
            const pages = [];
            // 遍历所有图标
            this.iconList.forEach((item, index) => {
                // 由于1页8个图标，因此可以通过index/8来判断在第几页(从0页开始)
                // 由于js语言特性,这里需要向下取整
                const page = Math.floor(index / 8);
                // 如果当前pages为空,也就是当前页为空
                if (!pages[page]) {
                    // 将当前page设置为数组
                    pages[page] = [];
                }
                // 在当且也添加图标
                pages[page].push(item);
            });
            return pages;
        },
    },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
.icons
    margin-top: .1rem
    .icon
        position relative
        overflow: hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()
</style>
