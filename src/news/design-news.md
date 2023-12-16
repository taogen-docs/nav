<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/design-news.json';

const data = ref(newsData);
</script>

# Design

## Design News

<NavContainer :data="data.news"/>

## Design Portfolio

<NavContainer :data="data.portfolio"/>

