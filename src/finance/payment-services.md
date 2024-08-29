<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/finance/payment-services.json';

const data = ref(newsData);
</script>

# Payment Services

## Virtual credit card

<NavContainer :data="data.virtualCreditCard"/>
