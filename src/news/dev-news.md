<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/dev-news.json';

const data = ref(newsData);
</script>

# Dev News

## General

<NavContainer :data="data.general"/>

## Web Frontend

<NavContainer :data="data.webFrontend"/>

## Mobile

<NavContainer :data="data.mobile"/>
