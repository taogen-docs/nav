<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/dev-news.json';

const data = ref(newsData);
</script>

# Dev News

## General

English

<NavContainer :data="data.general"/>

中文

<NavContainer :data="data.generalCN"/>

## Web Frontend

<NavContainer :data="data.webFrontend"/>

## Mobile

<NavContainer :data="data.mobile"/>
