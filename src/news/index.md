<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news.json';

const data = ref(newsData);
</script>

# News

<NavContainer :data="data"/>

