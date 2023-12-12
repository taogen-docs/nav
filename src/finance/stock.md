<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/finance/stock.json';

const data = ref(newsData);
</script>

# Stock

## Market Analysis

<NavContainer :data="data.marketAnalysis"/>

## Trading

<NavContainer :data="data.trading"/>

