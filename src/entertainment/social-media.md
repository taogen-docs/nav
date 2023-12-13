<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/entertainment/social-media.json';

const data = ref(newsData);
</script>

# Social Media

## Social Media

<NavContainer :data="data.socialMedia"/>

## Video Sharing

<NavContainer :data="data.videoSharing"/>

## Photo Sharing

<NavContainer :data="data.photoSharing"/>
