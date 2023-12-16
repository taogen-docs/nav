<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/finance/crypto.json';

const data = ref(newsData);
</script>

# Crypto

## Technical Analysis

<NavContainer :data="data.technicalAnalysis"/>

## Market Cap

<NavContainer :data="data.marketCap"/>

## NFT

<NavContainer :data="data.nft"/>

## Exchanges

<NavContainer :data="data.exchanges"/>
