<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/china-news.json';

const data = ref(newsData);
</script>

# China News

## Macro

<NavContainer :data="data.macro"/>

## Micro

<NavContainer :data="data.micro"/>
