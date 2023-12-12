<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/work/work.json';

const data = ref(newsData);
</script>

# Work

## Office

<NavContainer :data="data.office"/>

## Daily Work

<NavContainer :data="data.dailyWork"/>

## Dictionary

<NavContainer :data="data.dict"/>
