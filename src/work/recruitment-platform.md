<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/work/recruitment-platform.json';

const data = ref(newsData);
</script>

# Find Job

## Chinese Jobs

<NavContainer :data="data.china"/>

## Asia Jobs

<NavContainer :data="data.asia"/>

## US Jobs

<NavContainer :data="data.us"/>

## EU Jobs

<NavContainer :data="data.eu"/>
