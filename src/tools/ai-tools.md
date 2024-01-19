<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/ai-tools.json';

const data = ref(newsData);
</script>

# AI Tools

## AI Chatbot

<NavContainer :data="data.aiChatbot"/>
