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

## OCR

<NavContainer :data="data.ocr"/>
