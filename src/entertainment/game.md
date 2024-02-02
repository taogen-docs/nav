<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/entertainment/game.json';

const data = ref(newsData);
</script>

# Game

## Online Games

<NavContainer :data="data.online"/>
