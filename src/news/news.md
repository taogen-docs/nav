<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/news.json';

const data = ref(newsData);
</script>

# News

## Selected

<NavContainer :data="data.news"/>

## Optional News

<NavContainer :data="data.optionalNews"/>
