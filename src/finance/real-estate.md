<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/finance/real-estate.json';

const data = ref(newsData);
</script>

# Real Estate

## Analysis

<NavContainer :data="data.analysis"/>

## Tools

<NavContainer :data="data.tools"/>
