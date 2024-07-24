<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/living-tools.json';

const data = ref(newsData);
</script>

# Living Tools

## Weather Tools

<NavContainer :data="data.weatherTools"/>
