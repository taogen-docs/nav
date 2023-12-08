<script setup>
import { ref } from 'vue';
import NavContainer from '../../components/NavContainer.vue';
import newsData from '../../assets/finance/crypto.json';

const data = ref(newsData);
</script>

# Crypto

<NavContainer :data="data"/>
