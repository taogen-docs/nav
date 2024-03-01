<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/living/living.json';

const data = ref(newsData);
</script>

# Living

<NavContainer :data="data.general"/>

