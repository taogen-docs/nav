<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/career-news.json';

const data = ref(newsData);
</script>

# Career News

<NavContainer :data="data.careerNews"/>
