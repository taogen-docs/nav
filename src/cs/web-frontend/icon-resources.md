<script setup>
import { ref } from 'vue';
import NavContainer from '../../components/NavContainer.vue';
import newsData from '../../assets/cs/icon-resources.json';

const data = ref(newsData);
</script>

# Icon Resources

<NavContainer :data="data"/>

