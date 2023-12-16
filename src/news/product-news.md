<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/product-news.json';

const data = ref(newsData);
</script>

# Product

<NavContainer :data="data
"/>

