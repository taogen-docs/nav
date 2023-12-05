<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/dev.json';

const data = ref(newsData);
</script>

# Dev

<NavContainer :data="data"/>
