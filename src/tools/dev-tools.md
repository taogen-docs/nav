<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/tools/dev-tools.json';

const data = ref(newsData);
</script>

# Dev Tools

## Editor Online

<NavContainer :data="data.editorOnline"/>

## Frontend Editor

<NavContainer :data="data.frontendEditor"/>

## Regex

<NavContainer :data="data.regex"/>

## Formatter

<NavContainer :data="data.formatter"/>

## Crypto

<NavContainer :data="data.crypto"/>

## Random

<NavContainer :data="data.random"/>

## Others

<NavContainer :data="data.others"/>
