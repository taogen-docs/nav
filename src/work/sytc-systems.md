<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/work/sytc-systems.json';

const data = ref(newsData);
</script>

# Sytc Systems

<NavContainer :data="data"/>
