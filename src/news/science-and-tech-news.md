<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/science-and-tech-news.json';

const data = ref(newsData);
</script>

# Science and Technology News

## General

<NavContainer :data="data.general"/>

## Science News

<NavContainer :data="data.science"/>

## Technology News

<NavContainer :data="data.technology"/>
