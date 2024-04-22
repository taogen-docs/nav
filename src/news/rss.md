<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/rss.json';

const data = ref(newsData);
</script>

# RSS

## RSS Reader

<NavContainer :data="data.rssReader"/>

