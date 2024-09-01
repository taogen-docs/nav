<script setup>
import { ref } from 'vue';
import NavContainer from '../../components/NavContainer.vue';
import newsData from '../../assets/cs/web-frontend-technologies.json';

const data = ref(newsData);
</script>

# Web Frontend Technical Stack

## General

<NavContainer :data="data.general"/>

## Package Management

<NavContainer :data="data.packageManagement"/>

## JS Frameworks

<NavContainer :data="data.jsFrameworks"/>

## JS Light Frameworks

<NavContainer :data="data.jsLightFrameworks"/>

## CSS Frameworks

<NavContainer :data="data.cssFrameworks"/>

## Build Tools

### Module Bundlers

<NavContainer :data="data.buildTools.moduleBundlers"/>

### Task Runners

<NavContainer :data="data.buildTools.taskRunners"/>

### Linters and Formatters

<NavContainer :data="data.buildTools.lintersAndFormatters"/>

## Testing

<NavContainer :data="data.testing"/>

## Type Checkers

<NavContainer :data="data.typeCheckers"/>

## Server Side Rendering

<NavContainer :data="data.serverSideRendering"/>

## HTTP Request

<NavContainer :data="data.httpRequest"/>

## GraphQL

<NavContainer :data="data.graphql"/>

## Static Site Generators

<NavContainer :data="data.staticSiteGenerators"/>

## Mobile Applications

<NavContainer :data="data.mobileApplications"/>

## Desktop Applications

<NavContainer :data="data.desktopApplications"/>
