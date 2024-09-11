<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/news/dev-news.json';

const data = ref(newsData);
</script>

# Programming News

## Article Recommendation

<NavContainer :data="data.articleRecommendation"/>

## Community Articles

<NavContainer :data="data.communityArticles"/>


## Web Frontend

<NavContainer :data="data.webFrontend"/>

## Mobile

<NavContainer :data="data.mobile"/>

## Optional

<NavContainer :data="data.optional"/>
