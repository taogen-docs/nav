<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/finance/crypto.json';

const data = ref(newsData);
</script>

# Crypto

## Market Analysis

<NavContainer :data="data.marketAnalysis"/>

## Exchanges

<NavContainer :data="data.exchanges"/>
