<template>
    <div v-if="data != null && data.length > 0">
        <div :class="$style.container">
            <div v-for="item in data" :class="$style.item">
                <img :class="$style.item_img" :src="item.icon" alt="icon" loading="lazy">
                <div>
                    <div :class="$style.title">{{ item.name }}</div>
                    <div :class="$style.desc" style="">{{ item.desc }}</div>
                </div>
            </div>
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
    gap: 3%;
}

.item {
    display: flex;
    align-items: center;
    background-color: #fafbfc;
    width: 48.5%;
    margin-top: 20px;
    padding: 4%;
}

.item_img {
    width: 48px;
    height: 48px;
    margin-right: 5%;
}

.title {
    height: 1.5em;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.title:hover {
    overflow: visible;
    text-overflow: clip;
}

.desc {
    height: 2em;
    margin-top: 5px;
    color: #86909c;
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.desc:hover {
    //font-weight: bold;
    overflow: visible;
    //height: 4em;
    //white-space: initial;
    text-overflow: clip;
    //word-wrap: break-word;
    //height:auto;
    //position:absolute;
    //max-width:20em;
}
</style>
