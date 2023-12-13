<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/cs-tools.json';

const data = ref(newsData);
</script>

# CS Tools

## Editor Online

<NavContainer :data="data.editorOnline"/>
