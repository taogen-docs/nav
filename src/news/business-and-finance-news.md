<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/business-and-finance-news.json';

const data = ref(newsData);
</script>

# Business & Financial News

## Business & Financial News

<NavContainer :data="data.general"/>

## Business News

<NavContainer :data="data.business"/>

## Financial News

<NavContainer :data="data.financial"/>

## Stock News

<NavContainer :data="data.stock"/>

## Crypto News

<NavContainer :data="data.crypto"/>
