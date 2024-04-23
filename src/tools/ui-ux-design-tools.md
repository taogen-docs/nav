<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/ui-ux-design-tools.json';

const data = ref(newsData);
</script>

# Design Tools

## Logo Maker

<NavContainer :data="data.logoMaker"/>

## Avatar Maker

<NavContainer :data="data.avatarMaker"/>

## Color Wheel

<NavContainer :data="data.colorWheel"/>

## Prototype

<NavContainer :data="data.prototype"/>

## UI

<NavContainer :data="data.ui"/>
