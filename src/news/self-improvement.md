<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/self-improvement.json';

const data = ref(newsData);
</script>

# Self Improvement

<NavContainer :data="data.general"/>
