<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/work/side-hustles.json';

const data = ref(newsData);
</script>

# Side Hustles

## Challenge

<NavContainer :data="data.challenge"/>

## Freelance

<NavContainer :data="data.freelance"/>

## Test

<NavContainer :data="data.test"/>

## Bug Hunting

<NavContainer :data="data.bugHunting"/>

## Tutoring

<NavContainer :data="data.tutoring"/>

## Digital Content

<NavContainer :data="data.digitalContent"/>
