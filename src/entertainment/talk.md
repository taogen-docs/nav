<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/entertainment/talk.json';

const data = ref(newsData);
</script>

# Talks

<NavContainer :data="data.general"/>
