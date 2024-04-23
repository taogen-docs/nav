<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/software-design-tools.json';

const data = ref(newsData);
</script>

# Software Design Tools

## MindMap

<NavContainer :data="data.mindMap"/>

## Flowchart

<NavContainer :data="data.flowchart"/>

## UML

<NavContainer :data="data.uml"/>

## Database and Entity Relationship (ER)

<NavContainer :data="data.databaseAndEr"/>

