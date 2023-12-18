<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/office-tools.json';

const data = ref(newsData);
</script>

# Office Tools

## Dictionary and Translate

<NavContainer :data="data.dict"/>

## Writing

<NavContainer :data="data.writing"/>

## Markdown Online

<NavContainer :data="data.markdownOnline"/>

## Drawing

<NavContainer :data="data.drawing"/>

## Text Share

<NavContainer :data="data.textShare"/>

## File Share

<NavContainer :data="data.fileShare"/>

## Todo List

<NavContainer :data="data.todoList"/>

## Note

<NavContainer :data="data.note"/>

## Cloud Storage

<NavContainer :data="data.cloudStorage"/>
