<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/dev/dev-blogs.json';

const data = ref(newsData);
</script>

# Dev Blogs

## General 

<NavContainer :data="data.general"/>

## Web Frontend

<NavContainer :data="data.webFrontend"/>

## C

## C++

<NavContainer :data="data.cpp"/>

## Golang

<NavContainer :data="data.golang"/>

## Java

<NavContainer :data="data.java"/>

## Python

<NavContainer :data="data.python"/>

## .NET

<NavContainer :data="data.net"/>

## Game Development

<NavContainer :data="data.gameDevelopment"/>

## Software Design

<NavContainer :data="data.softwareDesign"/>
