<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/office-tools.json';

const data = ref(newsData);
</script>

# Office Tools

## Translate

<NavContainer :data="data.translate"/>

## Dictionary

### Learner's Dictionary

> "Learner's dictionaries" are monolingual dictionaries focused on the needs of language learners; they focus on more
> common definitions and include more usage notes.

<NavContainer :data="data.learnerDictionary"/>

### General Dictionary

> Standard dictionaries are aimed at native speakers, but may be more complete in their listings of definitions.

<NavContainer :data="data.generalDictionary"/>

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

## Note-Taking

<NavContainer :data="data.note"/>

## Cloud Storage

<NavContainer :data="data.cloudStorage"/>
