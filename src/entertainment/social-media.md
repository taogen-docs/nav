<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/entertainment/social-media.json';

const data = ref(newsData);
</script>

# Social Media

## Microblogging

<NavContainer :data="data.microblogging"/>

## Forum

<NavContainer :data="data.forum"/>

## QA

<NavContainer :data="data.qa"/>

## Video Sharing

<NavContainer :data="data.videoSharing"/>

## Photo Sharing

<NavContainer :data="data.photoSharing"/>

## Messaging

<NavContainer :data="data.messaging"/>

## Professional Networking

<NavContainer :data="data.professionalNetworking"/>

## Communication

<NavContainer :data="data.communication"/>
