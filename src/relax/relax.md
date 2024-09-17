<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/relax/relax.json';

const data = ref(newsData);
</script>

# Relax

> Slow rhythm.

> Daily life.

> Real. Simple.

## Video Channels

### Travel

<NavContainer :data="data.videoChannels.travel"/>

## Forum

> Short Information. Input and output.

<NavContainer :data="data.forum"/>

## Read Articles

> Good thoughts and ideas.

<NavContainer :data="data.readArticles"/>

## Organize Notes

> No need to use your brain.

<NavContainer :data="data.organizeNotes"/>

## Read Easy Books

<NavContainer :data="data.readBooks"/>
