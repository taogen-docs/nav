<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/office-tools.json';

const data = ref(newsData);
</script>

# Office Tools

## Writing

<NavContainer :data="data.writing"/>

## Markdown Online

<NavContainer :data="data.markdownOnline"/>

## Drawing

<NavContainer :data="data.drawing"/>
