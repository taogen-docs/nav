<template>
    <div :class="$style.container">
        <div :class="$style.item" v-for="item in data">
            <a :href="item.link" target="_blank">
                <img :src="item.img">
                <div :class="$style.title">{{ item.title }}</div>
            </a>
        </div>
    </div>

</template>

<script setup>
const props = defineProps(['data'])
// console.log(props.data);
</script>


<style module>
:root {
    --ds-type-system-serif: "MiloTE", "MiloTESec", Charter, "Bitstream Charter", "Iowan Old Style", "Calisto MT", serif;
}

.container {
    display: flex;
    flex-wrap: wrap;
    //justify-content: center;
    padding: 30px 0 0 0;
    font-size: 16px;
    font-weight: normal;
    font-family: var(--ds-type-system-serif);
}
/*
.container>div:first-child {
    width: auto;
    padding-right: 30px;
}*/

.item {
    padding: 20px 0 20px 0;
    margin-right: 50px;
    //width: 160px;
    //min-width: 90px;
    max-width: 90px;
    //background-color: antiquewhite;
}

/*.item:first-of-type {
//    width: auto;
//    padding-right: 30px;
//}*/

.item a {
    text-decoration: none;
    color: #000;
}

.item img {
    height: 65px;
    width: 65px;
    margin: 0 auto;
}

.item .title {
    margin: 10px 0 0 0;
    margin: 0 auto;
    text-align: center;
}
</style>
