<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/entertainment/music.json';

const data = ref(newsData);
</script>

# Music

## Music Streaming

<NavContainer :data="data.musicStreaming"/>

## Classical Music

<NavContainer :data="data.classicalMusic"/>
