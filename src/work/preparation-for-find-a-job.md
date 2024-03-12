<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/work/preparation-for-find-a-job.json';

const data = ref(newsData);
</script>

# Find Job Helper

## Resume

<NavContainer :data="data.resume"/>

## Job Interview Questions

<NavContainer :data="data.jobInterviewQuestions"/>

## Company Reviews

<NavContainer :data="data.companyReviews"/>




