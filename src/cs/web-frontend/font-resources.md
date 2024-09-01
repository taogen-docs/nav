<script setup>
import { ref } from 'vue';
import NavContainer from '../../components/NavContainer.vue';
import newsData from '../../assets/cs/font-resources.json';

const data = ref(newsData);
</script>

# Font Resources

## Chinese

<NavContainer :data="data.chinese"/>

## English

<NavContainer :data="data.english"/>
