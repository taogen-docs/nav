<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/entertainment/book.json';

const data = ref(newsData);
</script>

# Book

## Find Book

<NavContainer :data="data.findBook"/>
