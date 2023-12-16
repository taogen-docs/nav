<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/finance/stock.json';

const data = ref(newsData);
</script>

# Stock

## Technical Analysis

<NavContainer :data="data.technicalAnalysis"/>

## Market Cap

<NavContainer :data="data.marketCap"/>

## Trading

<NavContainer :data="data.trading"/>

