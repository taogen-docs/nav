<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/entertainment/live-tv.json';

const data = ref(newsData);
</script>

# Live TV

<NavContainer :data="data.liveTv"/>
