<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/website-tools.json';

const data = ref(newsData);
</script>

# Network Tools

## Whois Lookup

<NavContainer :data="data.whoisLookup"/>

## Web Traffic and Ranking

<NavContainer :data="data.webTrafficAndRanking"/>

## Check IP Information

<NavContainer :data="data.ipInformation"/>
