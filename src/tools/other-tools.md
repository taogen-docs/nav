<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/other-tools.json';

const data = ref(newsData);
</script>

# Other Tools

## Torrent Download

### Torrent Download for Free

<NavContainer :data="data.torrentDownloadFree"/>

Torrent Download by Login

<NavContainer :data="data.torrentDownloadLogin"/>

## Subtitle Download

### Movie Subtitle Download

<NavContainer :data="data.movieSubtitleDownload"/>

### YouTube Subtitle Download

<NavContainer :data="data.youtubeSubtitleDownload"/>

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

## Speed Test

<NavContainer :data="data.speedTest"/>

## Map

<NavContainer :data="data.map"/>
