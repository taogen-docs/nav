<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/entertainment/watch-movie-online.json';

const data = ref(newsData);
</script>

# Watch Movie Online

<NavContainer :data="data"/>

