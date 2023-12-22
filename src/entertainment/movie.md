<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/entertainment/movie.json';

const data = ref(newsData);
</script>

# Movie

## Find Movie

<NavContainer :data="data.findMovie"/>

## Watch Movie Online

<NavContainer :data="data.watchMovie"/>

## Documentary

<NavContainer :data="data.documentary"/>

## Animation

<NavContainer :data="data.animation"/>
