<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/ai-tools.json';

const data = ref(newsData);
</script>

# AI Tools

## Official Chatbot

<NavContainer :data="data.officialChatbot"/>

## Chatbot Wrapper

<NavContainer :data="data.chatbotWrapper"/>
