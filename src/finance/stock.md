<script setup>
import { ref } from 'vue';
import NavContainer from '../components/NavContainer.vue';
import newsData from '../assets/finance/stock.json';

const data = ref(newsData);
</script>

# Stock

## Technical Analysis

### Market Trends

<NavContainer :data="data.technicalAnalysis.marketTrends"/>

### Market Cap

<NavContainer :data="data.technicalAnalysis.marketCap"/>

### Stock Heatmap

<NavContainer :data="data.technicalAnalysis.heatmap"/>

## Security Companies

<NavContainer :data="data.securityCompanies"/>

## A Stock

> 上证指数 SSE Composite Index

### Stock Heatmap

<NavContainer :data="data.aStock.heatmap"/>

大盘云图

1. A 股的板块轮动特别明显，有非常清晰的齐涨齐跌现象，个股非常容易就被气候带跑偏了。
2. 能看出明显的二八分化的迹象，头部前 20%的个股，占了整个行业 80%的市值，剩下 80%的公司分割 20%的份额。
3. 能整体把握大盘的走向，大盘的走势，一览无遗。
