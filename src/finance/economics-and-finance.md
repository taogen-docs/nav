<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/finance/economics-and-finance.json';

const data = ref(newsData);
</script>

# Economics & Finance

<NavContainer :data="data"/>
