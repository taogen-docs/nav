<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/product-and-design-news.json';

const data = ref(newsData);
</script>

# Product & Design News

## Product News

<NavContainer :data="data.product"/>

## Design News

<NavContainer :data="data.design"/>

## Design Portfolio

<NavContainer :data="data.designPortfolio"/>

