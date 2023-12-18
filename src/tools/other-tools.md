<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/other-tools.json';

const data = ref(newsData);
</script>

# Other Tools

## Torrent Search

<NavContainer :data="data.torrentSearch"/>

## eBook Download

<NavContainer :data="data.ebookDownload"/>

## Video Downloader

<NavContainer :data="data.videoDownloader"/>

## Software Download

<NavContainer :data="data.softwareDownload"/>

## Wallpaper

<NavContainer :data="data.wallpaper"/>

## Symbols

<NavContainer :data="data.symbols"/>
