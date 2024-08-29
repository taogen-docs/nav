<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/ai-tools.json';

const data = ref(newsData);
</script>

# AI Tools

## Chatbot

<NavContainer :data="data.chatbot"/>

## Web Search

<NavContainer :data="data.webSearch"/>

## Chatbot Wrapper

<NavContainer :data="data.chatbotWrapper"/>

## AI Service API

<NavContainer :data="data.aiServiceAPI"/>
