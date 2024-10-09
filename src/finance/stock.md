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

## US Stock

### Index

- [Nasdaq 100 Index](https://www.tradingview.com/chart/yZRaRQET/?symbol=NASDAQ%3ANDX)
- [S&P 500 Index](https://www.tradingview.com/chart/yZRaRQET/?symbol=SP%3ASPX)
- [Dow Jones Industrial Average Index](https://www.tradingview.com/chart/yZRaRQET/?symbol=DJ%3ADJI)

Fund

- 广发纳斯达克100ETF联接（QDII）C类 - 006479，2018年，广发基金公司，刘杰，42亿。（支付宝）
- 华夏纳斯达克100ETF - [513300](https://www.tradingview.com/chart/yZRaRQET/?symbol=SSE%3A513300)
  ，2020年，华夏基金公司，赵宗庭，44亿。（中信证券）

## A Stock

市场反应和股民情绪

- 网络热榜
  -
  社交媒体：[微博热搜](https://weibo.com/hot/search)、[微博热搜-要闻](https://weibo.com/hot/news)、[知乎热榜](https://www.zhihu.com/hot)
  -
  互联网新闻：[今日头条热榜](https://www.toutiao.com/)、[百度热搜](https://top.baidu.com/board?tab=realtime)、[搜狗-全网实时热榜](https://ie.sogou.com/top/)
  - 短视频：[抖音热点榜](https://www.douyin.com/hot)、[快手热榜](https://www.kuaishou.com/?isHome=1)
-
新闻门户网站：[网易-首页-要闻](https://www.163.com/)、[搜狐-24小时热点](https://www.sohu.com/xtopic/TURBd01ERTJNRE13)、[新浪网-首页-新闻](https://www.sina.com.cn/)、[腾讯网-热点榜](https://news.qq.com/)
- 论坛：[V2EX - 投资](https://v2ex.com/go/invest)

对股民情绪的影响

- 冲动：市场火热，晒收益截图，离谱的故事。
- 信心：刻舟求剑，大v预测，强行编造理由、制造因果关系，专家分析。
- 迷惑：外界信息时真时假、真假难辨。

整体趋势

- 股票指数趋势
  - [上证指数 SSE Composite Index - 000001](https://www.tradingview.com/chart/yZRaRQET/?symbol=SSE%3A000001)
  - [沪深300指数 CSI 300 Index](https://www.tradingview.com/chart/yZRaRQET/?symbol=SSE%3A000300)

板块趋势

- 板块-排行（中信证券内）：净流入、当日幅度、10日涨幅
- 板块-股票热图：[大盘云图](https://dapanyuntu.com/)
- 板块-指数/基金ETF趋势
  - 白酒（跟整体趋势大涨大跌）
    - [中证白酒指数 - CSI 399997](https://www.tradingview.com/chart/yZRaRQET/?symbol=SSE%3A399997)
    - [鹏华中证酒ETF - 512690](https://www.tradingview.com/chart/yZRaRQET/?symbol=SSE%3A512690)，2019年，92亿
  - 证券（逆势上涨）
    - 易方达中证香港证券ETF - 513090
    - [鹏华国证证券龙头ETF - 159993](https://www.tradingview.com/chart/yZRaRQET/?symbol=SZSE%3A159993)，2019年，12亿
  - 半导体（逆势上涨）
    - 鹏华国证半导体芯片ETF - 159813，2020年，32亿
  - 计算机（软件/计算机设备/互联网/大数据云计算/人工智能）（部分逆势上涨）
    - 天弘中证计算机ETF - 159998，2020年，18亿
    - 嘉实中证软件服务ETF - 159852，2021年，9亿
    - 华夏恒生互联网科技技术ETF - 513330，2021年，274亿
  - 通信
    - 国泰中证全指通信设备ETF - 515880，2019年，23亿
  - 新能源（新能源汽车、电池）
    - 华夏中证新能源汽车ETF - 515030，2020年，50亿
    - 广发国证新能源车电池ETF - 159755，2021年，28亿

### Index

**A股指数**

- 上证指数（SSE Composite Index）：上海证券综合指数简称“上证指数”或“上证综指”，其样本股是在**上海证券交易所全部上市股票**
  ，包括A股和B股，反映了上海证券交易所上市股票价格的变动情况，自1991年7月15日起正式发布。
- 沪深300指数（CSI 300 Index）：由沪深市场中**规模大、流动性好的最具代表性的300只证券**组成，于2005年4月8日正式发布，以反映沪深市场上市公司证券的整体表现。

**交易所和板块**

- 上海证券交易所
  - 主板
  - 科创板
  - B股
- 深圳证券交易所
  - 主板
  - 中小板：进入门槛较高，上市条件较为严格，接近于主板市场
  - 创业板：进入门槛较低，上市条件较为轻松
  - B股
- 新三板：定位于非上市股份公司股票公开转让和发行融资的市场平台，为公司提供股票交易、发行融资、并购重组等相关服务，为市场参与人提供信息、技术和培训服务
- 北交所

**基金类型**

1

- 场内基金：只有证券账号才能购买
- 场外公募基金：不需要证券账号也能购买，如：支付宝上的基金。

2

- 股票型（股票>80%）：规模适中为好。
  - 若规模很大，大额交易对股票冲击很大，对投资中小盘股影响更大，严重影响基金经理操作的灵活性，所以规模不易过大。
  - 若是规模过小，对于由基金资产支出的固定费用，如信息披露费用、审计费、律师费等，分摊到单位份额上的成本就越高。同时，规模过小，对于基金经理应对申购赎回的压力甚至会影响到基金经理的正常管理。
  - 总的来说，一般偏股权益型基金的规模还是适中为好，在5亿-50亿比较合理。
- 债券型（债券>80%）：规模影响不大
- 混合型
- 指数型（股票>95%，跟踪指数）
- FOF（投资其他基金的基金）
- QDII（买国外股票债券的基金）
- 货币基金（余额宝）：规模越大越好

3

- 交易型开放式指数基金/交易所交易基金（Exchange Traded Fund，简称ETF）：可以像普通股票一样，在被拆分成更小交易单位后，在交易所二级市场进行买卖。

**股市交易时间**

[股市交易时间](https://baike.baidu.com/item/%E8%82%A1%E5%B8%82%E4%BA%A4%E6%98%93%E6%97%B6%E9%97%B4/1579365)：周一至周五，上午时段
9:30-11:30，下午时段 13:00-15:00。周六、周日及上海证券交易所、深圳证券交易所公告的休市日不交易。

交易日：周一～周五（法定节日除外）

- 09：15 —— 09：25 集合竞价
- 09：30 —— 11：30 前市，连续竞价
- 13：00 —— 15：00 后市，连续竞价
- （14：57——15：00 为收盘集合竞价）

### Stock Heatmap

<NavContainer :data="data.aStock.heatmap"/>

大盘云图

1. A 股的板块轮动特别明显，有非常清晰的齐涨齐跌现象，个股非常容易就被气候带跑偏了。
2. 能看出明显的二八分化的迹象，头部前 20%的个股，占了整个行业 80%的市值，剩下 80%的公司分割 20%的份额。
3. 能整体把握大盘的走向，大盘的走势，一览无遗。
