<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/work/occupation.json';

const data = ref(newsData);
</script>

# Occupation

## Company Information

<NavContainer :data="data.companyInfo"/>

## Position Level Benchmarking

<NavContainer :data="data.positionLevelBenchmarking"/>
