<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/dev/cloud-services.json';

const data = ref(newsData);
</script>

# Cloud Services

## Domain

### Domain Registry

<NavContainer :data="data.domain"/>

### SSL Certificates

<NavContainer :data="data.sslCertificates"/>

## Server

### Cloud Server

<NavContainer :data="data.cloudServer"/>

### VPS

<NavContainer :data="data.vps"/>

### Serverless

<NavContainer :data="data.serverless"/>

## CDN

### General CDN

<NavContainer :data="data.cdn"/>

### CDN for NPM Packages

<NavContainer :data="data.cdnForNpmPackage"/>

## Hosting

### Static Website Hosting

<NavContainer :data="data.staticWebsiteHosting"/>

## Cloud Storage

### Cloud Database

### Cloud Object Storage

<NavContainer :data="data.cloudObjectStorage"/>

## DevOps

### CI/CD

<NavContainer :data="data.cicd"/>

## Code Source Repositories

<NavContainer :data="data.codeSourceRepo"/>

## Send SMS Service

<NavContainer :data="data.sendSms"/>
