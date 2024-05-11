<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/other-tools.json';

const data = ref(newsData);
</script>

# Other Tools

## Symbols

<NavContainer :data="data.symbols"/>

## Speed Test

<NavContainer :data="data.speedTest"/>

## Map

<NavContainer :data="data.map"/>
