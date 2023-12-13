<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/other-tools.json';

const data = ref(newsData);
</script>

# Other Tools

## Torrent Search

<NavContainer :data="data.torrentSearch"/>

