<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/work/sytc-systems.json';

const data = ref(newsData);
</script>

# Syct

## Platforms

<NavContainer :data="data.platforms"/>

## Third-Party Services

<NavContainer :data="data.thirdPartyServices"/>

## Systems

<NavContainer :data="data.product"/>

## Customized Systems

<NavContainer :data="data.customized"/>
