<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/image-tools.json';

const data = ref(newsData);
</script>

# Image Tools

## Convert Image Format

<NavContainer :data="data.conversion"/>

## Convert Image to ICO

<NavContainer :data="data.imageToIco"/>

## Compression

<NavContainer :data="data.compression"/>

## Upscale

<NavContainer :data="data.upscale"/>

## Resize

<NavContainer :data="data.resize"/>

## Merge Images

<NavContainer :data="data.mergeImages"/>

## Remove Background

<NavContainer :data="data.removeBackground"/>

## Remove Watermark

<NavContainer :data="data.removeWatermark"/>

## OCR

<NavContainer :data="data.ocr"/>

