<template>
  <el-container id="detail" style="height: 500px; border: 1px solid #eee">
    <el-header style="height: 80px;background-color: rgb(238, 241, 246);padding: 0;">
      <home-header></home-header>
    </el-header>
    <el-container>
      <el-main>
        <el-descriptions class="margin-top" :title="title" border :data="baseInfo" :column="1" v-if="baseInfo !== null" >
          <el-descriptions-item label="关键词">{{ baseInfo.words }}</el-descriptions-item>
          <el-descriptions-item label="产业节点">{{ baseInfo.nodes }}</el-descriptions-item>
          <el-descriptions-item label="成立时间">{{ baseInfo.establishdate }}</el-descriptions-item>
          <el-descriptions-item label="注册资本">{{ baseInfo.capital }}{{ baseInfo.capitalcurrency}}</el-descriptions-item>
          <el-descriptions-item label="注册地">{{ baseInfo.domicile }}</el-descriptions-item>
        </el-descriptions>

        <el-divider></el-divider>

        <el-descriptions class="margin-top" title="工商信息" :data="businessInfo"  v-if="businessInfo !== null" :column="3" border>
          <el-descriptions-item label="统一社会信用编码">{{ businessInfo['统一社会信用编码'] }}</el-descriptions-item>
          <el-descriptions-item label="负责人">{{ businessInfo['负责人'] }}</el-descriptions-item>
          <el-descriptions-item label="登记状态">{{ businessInfo['登记状态'] }}</el-descriptions-item>
          <el-descriptions-item label="成立时间">{{ businessInfo['成立时间'] }}</el-descriptions-item>
          <el-descriptions-item label="注册资本">{{ businessInfo['注册资本'] }}</el-descriptions-item>
          <el-descriptions-item label="企业类型">{{ businessInfo['企业类型'] }}</el-descriptions-item>
          <el-descriptions-item label="经营范围">{{ businessInfo['经营范围'] }}</el-descriptions-item>
          <!--          <el-descriptions-item v-for="(value, key) in businessInfo" :label="key" :key="value">{{ value }}</el-descriptions-item>-->
        </el-descriptions>

        <el-divider></el-divider>
        <p>专利信息</p>
        <el-table
            :data="patentInfo"
            style="width: 100%">
          <el-table-column
              type="index"
              label="序号">
          </el-table-column>
          <el-table-column
              prop="专利名称"
              label="专利名称">
          </el-table-column>
          <el-table-column
              prop="专利关键词"
              label="专利关键词">
          </el-table-column>
          <el-table-column
              prop="专利申请日期"
              label="专利申请日期">
          </el-table-column>
          <el-table-column
              prop="专利摘要"
              label="专利摘要" :formatter="stateFormat">
          </el-table-column>
        </el-table>

        <el-divider></el-divider>

        <el-descriptions class="margin-top" title="百科信息" :data="baikeInfo"  v-if="baikeInfo != null" :column="3" border>
          <el-descriptions-item label="百科信息详细">{{ baikeInfo['百科信息详细'] }}</el-descriptions-item>
          <!--          <el-descriptions-item v-for="(value, key) in businessInfo" :label="key" :key="value">{{ value }}</el-descriptions-item>-->
        </el-descriptions>

        <el-divider></el-divider>

        <p>新闻信息</p>
        <el-table
            :data="newsInfo"
            style="width: 100%">
          <el-table-column
              type="index"
              label="序号">
          </el-table-column>
          <el-table-column
              prop="新闻标题"
              label="新闻标题">
          </el-table-column>
          <el-table-column
              prop="新闻摘要"
              label="新闻摘要">
          </el-table-column>
        </el-table>

        <el-divider></el-divider>

        <p>投标信息</p>
        <el-table
            :data="tendeInfo"
            style="width: 100%">
          <el-table-column
              type="index"
              label="序号">
          </el-table-column>
          <el-table-column
              prop="标题"
              label="投标标题">
          </el-table-column>
          <el-table-column
              prop="摘要"
              label="投标摘要">
          </el-table-column>
        </el-table>

        <el-divider></el-divider>

        <p>中标信息</p>
        <el-table
            :data="awardTenderInfo"
            style="width: 100%">
          <el-table-column
              type="index"
              label="序号">
          </el-table-column>
          <el-table-column
              prop="标题"
              label="中标标题">
          </el-table-column>
          <el-table-column
              prop="标题"
              label="中标标题">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import axios from "axios";

export default {
  name: "Detail",
  data() {
    return {
      title: this.$route.params.enterprisename,
      contentLength:10,
      baseInfo:null,
      businessInfo: null,
      patentInfo: null,
      baikeInfo:null,
      newsInfo:null,
      tendeInfo:null,
      awardTenderInfo: null,
    }
  },
  components: {
    "home-header": HomeHeader,
  },
  mounted() {
    this.getEnterpriseInfo(this.$route.params.enterprisename)
    this.getEnterpriseInformation()
  },
  methods: {
    getEnterpriseInfo(keywords) {
      axios({
        method: "get",
        url: "http://139.224.233.19:50000/biologicalmedicine/getEnterpriseList",
        params: {
          keywords: keywords
        },
        timeout:60000
      })
          .then(res => {
            var baseInfo = res.data[0]
            baseInfo.words = baseInfo.words.trim()
            baseInfo.capital = parseFloat(baseInfo.capital).toFixed(2) + " "+baseInfo.capitalcurrency
            baseInfo.establishdate = baseInfo.establishdate.slice(0,10)
            this.baseInfo= baseInfo
          })
          .catch(error => console.log(error))
    },
    getEnterpriseInformation() {
      axios({
        method: "get",
        url: "http://139.224.233.19:50000/biologicalmedicine/getEnterpriseInformation",
        params: {
          enterprisename: this.$route.params.enterprisename
        },
        timeout: 60000
      })
          .then(res => {
            var enterpriseInfo = res.data
            // console.log("getEnterpriseInformation:" + res.data)
            this.businessInfo = enterpriseInfo['工商信息'][0]
            this.patentInfo = enterpriseInfo['专利信息']
            this.baikeInfo = enterpriseInfo['百科信息'][0]
            this.newsInfo = enterpriseInfo['新闻信息']
            this.tendeInfo = enterpriseInfo['招标信息']
            this.awardTenderInfo = enterpriseInfo['中标信息']
          })
          .catch(error => console.log(error))
    },
    stateFormat(row, column, cellValue){
      // console.log(row);
      // console.log(column);
      // console.log(cellValue);
      if(row.flag){
        if (!cellValue) return '';
        if (cellValue.length > this.contentLength) {   // 超过contentLength长度的内容隐藏
          return cellValue.slice(0, this.contentLength) + '...';
        }
        return cellValue;
      }else{
        return cellValue;
      }
    },
  },

};
</script>
<style>
p{
  font-size: 16px;
  font-weight: 700;
}
</style>