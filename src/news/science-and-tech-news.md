<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/science-and-tech-news.json';

const data = ref(newsData);
</script>

# Technology and Science News

## Technology News

<NavContainer :data="data.technology"/>

## Optional Technology News

<NavContainer :data="data.optionalTech"/>

## Science News

<NavContainer :data="data.science"/>

