<template>
    <div v-if="data != null && data.length > 0" :class="$style.container">
        <div v-for="item in data" :class="$style.item">
            <a :href="item.url" target="_blank">
                <img :src="item.icon" alt="icon" loading="lazy">
                <div :class="$style.title">{{ item.name }}</div>
            </a>
        </div>
    </div>

</template>

<script setup>
import DefaultSiteIcon from '../assets/img/globe.svg';

const props = defineProps(['data'])
if (props.data != null && props.data.length > 0) {
    props.data.forEach(item => {
        if (item.icon == null || item.icon == '') {
            item.icon = DefaultSiteIcon
        }
    });
}

// console.log(props.data);
</script>


<style module>
:root {
    --ds-type-system-serif: "MiloTE", "MiloTESec", Charter, "Bitstream Charter", "Iowan Old Style", "Calisto MT", serif;
}

.container {
    display: flex;
    flex-wrap: wrap;
    //justify-content: center; padding: 30px 0 0 0;
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
    //width: 160px; //min-width: 90px; max-width: 90px;
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
    padding: 10px 0 0 0;
    margin: 0 auto;
    text-align: center;
}
</style>
