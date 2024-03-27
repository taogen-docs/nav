<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/paid-news.json';

const data = ref(newsData);
</script>

# Paid News

<NavContainer :data="data"/>
