<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/dev-blogs.json';

const data = ref(newsData);
</script>

# Dev Blogs

## General 

<NavContainer :data="data.general"/>

## Java

<NavContainer :data="data.java"/>

## Web Frontend

<NavContainer :data="data.web-frontent"/>

## Python

<NavContainer :data="data.python"/>

## Golang

<NavContainer :data="data.golang"/>

## C++

<NavContainer :data="data.cpp"/>

## .NET

<NavContainer :data="data.net"/>

## Game Development

<NavContainer :data="data.game-development"/>
