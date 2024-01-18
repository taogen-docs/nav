<script setup>
import { ref } from 'vue';
import NavContainer from '../../components/NavContainer.vue';
import newsData from '../../assets/dev/java-technologies.json';

const data = ref(newsData);
</script>

# Java Technologies

## Utilities

### General

<NavContainer :data="data.utilities.general"/>

### Parser

<br>

#### JSON Parser

<NavContainer :data="data.utilities.parser.jsonParser"/>

#### XML Parser

<NavContainer :data="data.utilities.parser.xmlParser"/>

#### HTML Parser

<NavContainer :data="data.utilities.parser.htmlParser"/>

### IO

<NavContainer :data="data.utilities.io"/>

### File Handling

#### Document

<NavContainer :data="data.utilities.fileHandling.document"/>

#### PDF

<NavContainer :data="data.utilities.fileHandling.pdf"/>

### HTTP Client

<NavContainer :data="data.utilities.httpClient"/>

### Schedule

<NavContainer :data="data.utilities.schedule"/>

### Work Flow

<NavContainer :data="data.utilities.workFlow"/>

### Logging

<NavContainer :data="data.utilities.logging"/>

### Testing

<NavContainer :data="data.utilities.testing"/>

### Others

<NavContainer :data="data.utilities.others"/>

## Data Access

### Cache

<NavContainer :data="data.dataAccess.cache"/>

### Connection Pool

<NavContainer :data="data.dataAccess.connectionPool"/>

### ORM Framework

<NavContainer :data="data.dataAccess.orm"/>

### Search Engine

<NavContainer :data="data.dataAccess.searchEngine"/>

## Web Development

### Web Server

<NavContainer :data="data.webDevelopment.webServer"/>

### Web Framework

<NavContainer :data="data.webDevelopment.webFramework"/>

### Web Security

<NavContainer :data="data.webDevelopment.webSecurity"/>

### Web API

<NavContainer :data="data.webDevelopment.webApi"/>

## Network Programing

### Socket

<NavContainer :data="data.networkPrograming.socket"/>

### Web Socket

<NavContainer :data="data.networkPrograming.webSocket"/>

### RPC

<NavContainer :data="data.networkPrograming.rpc"/>

## Middleware

### Database

<br>

#### In-Memory Database

<NavContainer :data="data.middleware.database.inMemoryDatabase"/>

#### Cache

<NavContainer :data="data.middleware.database.cache"/>

#### Relational Database (RDBMS)

<NavContainer :data="data.middleware.database.rdbms"/>

#### OLAP

<NavContainer :data="data.middleware.database.olap"/>

#### OLTP

<NavContainer :data="data.middleware.database.oltp"/>

#### Search Engine

<NavContainer :data="data.middleware.database.searchEngine"/>

### Message Queue

<NavContainer :data="data.middleware.messageQueue"/>

## Performance

<NavContainer :data="data.performance"/>

## Tools

## Distributed System
