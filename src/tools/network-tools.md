<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/network-tools.json';

const data = ref(newsData);
</script>

# Network Tools

## Whois Lookup

<NavContainer :data="data.whoisLookup"/>
