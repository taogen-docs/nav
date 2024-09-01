<script setup>
import { ref } from 'vue';
import NavContainer from '../../components/NavContainer.vue';
import newsData from '../../assets/cs/image-resources.json';

const data = ref(newsData);
</script>

# Image Resources

## EN

<NavContainer :data="data.en"/>

## Chinese

<NavContainer :data="data.chinese"/>

