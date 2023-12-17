<script setup>
import { ref } from 'vue';
import NavContainer from '../../components/NavContainer.vue';
import newsData from '../../assets/dev/image-resources.json';

const data = ref(newsData);
</script>

# Image Resources

<NavContainer :data="data"/>
