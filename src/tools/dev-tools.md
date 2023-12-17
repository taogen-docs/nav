<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/dev-tools.json';

const data = ref(newsData);
</script>

# Dev Tools

## Editor Online

<NavContainer :data="data.editorOnline"/>
