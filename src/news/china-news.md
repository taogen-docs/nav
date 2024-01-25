<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/china-news.json';

const data = ref(newsData);
</script>

# China News

<NavContainer :data="data"/>
