<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/image-tools.json';

const data = ref(newsData);
</script>

# Image Tools

## Conversion

<NavContainer :data="data.conversion"/>

## Compression

<NavContainer :data="data.compression"/>

## Upscale

<NavContainer :data="data.upscale"/>

## Remove Background

<NavContainer :data="data.removeBackground"/>

## OCR

<NavContainer :data="data.ocr"/>

## Image to ICO

<NavContainer :data="data.imageToIco"/>
