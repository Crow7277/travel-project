<template>
    <div class="container">
        <div class="wrapper"></div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallery',
};
</script>

<style lang="stylus" scoped>
.container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
        background: #fff
</style>
