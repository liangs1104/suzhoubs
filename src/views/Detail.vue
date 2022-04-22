<template>
  <el-container>
    <el-header style="height: 80px;background-color: rgb(238, 241, 246);padding: 0;">
      <home-header></home-header>
    </el-header>
    <div class="content-box">
      <div class="content">
        <el-container>
          <el-main>
            <el-descriptions class="margin-top" :title="$route.params.enterprisename" border :data="baseInfo" :column="1" v-if="baseInfo">
              <el-descriptions-item label="关键词">{{ baseInfo.words }}</el-descriptions-item>
              <el-descriptions-item label="产业节点">{{ baseInfo.nodes }}</el-descriptions-item>
              <el-descriptions-item label="成立时间">{{ baseInfo.establishdate }}</el-descriptions-item>
              <el-descriptions-item label="注册资本">{{ baseInfo.capital }}</el-descriptions-item>
              <el-descriptions-item label="注册地">{{ baseInfo.domicile }}</el-descriptions-item>
            </el-descriptions>

            <el-divider></el-divider>

            <el-descriptions class="margin-top" title="工商信息" :data="businessInfo" v-if="businessInfo" :column="3"
                             border>
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
                :data="patentInfoPage"
                :cell-class-name="tableCellClassName"
                @cell-click="clickContent"
                style="width: 100%">
              <el-table-column
                  type="index"
                  label="序号">
                <template scope="scope">
                  <span>{{(currentPage - 1) * pageSize + scope.$index + 1}}</span>
                </template>
              </el-table-column>
              <el-table-column
                  prop="专利名称"
                  label="专利名称"
                  min-width="25%">
              </el-table-column>
              <el-table-column
                  prop="专利关键词"
                  label="专利关键词"
                  min-width="25%">
              </el-table-column>
              <el-table-column
                  prop="专利申请日期"
                  label="专利申请日期"
                  min-width="10%">
              </el-table-column>
              <el-table-column
                  prop="专利摘要"
                  label="专利摘要"
                  :formatter="stateFormat">
              </el-table-column>
            </el-table>
            <div class="block" v-if="patentInfo && patentInfo.length >10">
              <el-pagination
                  @size-change="handlePageSizeChange"
                  @current-change="handleCurrentPageChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="pageSize"
                  background
                  style="text-align: center;"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="patentInfo.length">
              </el-pagination>
            </div>
            <el-divider></el-divider>

            <el-descriptions class="margin-top" title="百科信息" :data="baikeInfo" v-if="baikeInfo" :column="3" border>
              <el-descriptions-item label="百科信息详细">{{ baikeInfo['百科信息详细']}}</el-descriptions-item>
              <!--          <el-descriptions-item v-for="(value, key) in businessInfo" :label="key" :key="value">{{ value }}</el-descriptions-item>-->
            </el-descriptions>

            <el-divider></el-divider>

            <p>新闻信息</p>
            <el-table
                :data="newsInfoPage"
                :cell-class-name="tableCellClassName"
                @cell-click="clickContent"
                style="width: 100%">
              <el-table-column
                  type="index"
                  label="序号">
                <template scope="scope">
                  <span>{{(newsCurrentPage - 1) * newsPageSize + scope.$index + 1}}</span>
                </template>
              </el-table-column>
              <el-table-column
                  prop="新闻标题"
                  label="新闻标题"
                  min-width="25%">
              </el-table-column>
              <el-table-column
                  prop="新闻摘要"
                  label="新闻摘要"
                  :formatter="stateFormat">
              </el-table-column>
            </el-table>
            <div class="block" v-if="newsInfo && newsInfo.length >10">
              <el-pagination
                  @size-change="handleNewsPageSizeChange"
                  @current-change="handleNewsCurrentPageChange"
                  :current-page="newsCurrentPage"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="newsPageSize"
                  background
                  style="text-align: center;"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="newsInfo.length">
              </el-pagination>
            </div>
            <el-divider></el-divider>

            <p>招标信息</p>
            <el-table
                :data="tenderInfoPage"
                :cell-class-name="tableCellClassName"
                @cell-click="clickContent"
                style="width: 100%">
              <el-table-column
                  type="index"
                  label="序号">
                <template scope="scope">
                  <span>{{(tenderCurrentPage - 1) * tenderPageSize + scope.$index + 1}}</span>
                </template>
              </el-table-column>
              <el-table-column
                  prop="标题"
                  label="招标标题"
                  min-width="25%">
              </el-table-column>
              <el-table-column
                  prop="摘要"
                  label="招标摘要"
                  :formatter="stateFormat">
              </el-table-column>
            </el-table>
            <div class="block" v-if="tenderInfo && tenderInfo.length >10">
              <el-pagination
                  @size-change="handleTenderPageSizeChange"
                  @current-change="handleTenderCurrentPageChange"
                  :current-page="tenderCurrentPage"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="tenderPageSize"
                  background
                  style="text-align: center;"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="tenderInfo.length">
              </el-pagination>
            </div>
            <el-divider></el-divider>

            <p>中标信息</p>
            <el-table
                :data="awardTenderInfoPage"
                :cell-class-name="tableCellClassName"
                @cell-click="clickContent"
                style="width: 100%">
              <el-table-column
                  type="index"
                  label="序号">
                <template scope="scope">
                  <span>{{(awardCurrentPage - 1) * awardPageSize + scope.$index + 1}}</span>
                </template>
              </el-table-column>
              <el-table-column
                  prop="标题"
                  label="中标标题"
                  min-width="25%">
              </el-table-column>
              <el-table-column
                  prop="摘要"
                  label="中标摘要"
                  :formatter="stateFormat">
              </el-table-column>
            </el-table>
            <div class="block" v-if="awardTenderInfo && awardTenderInfo.length >10">
              <el-pagination
                  @size-change="handleAwardPageSizeChange"
                  @current-change="handleAwardCurrentPageChange"
                  :current-page="awardCurrentPage"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="awardPageSize"
                  background
                  style="text-align: center;"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="awardTenderInfo.length">
              </el-pagination>
            </div>
          </el-main>
        </el-container>
      </div>
    </div>

  </el-container>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import axios from "axios";
import utils from '../utils'

export default {
  name: "Detail",
  data() {
    return {
      baseInfo: [],

      businessInfo: [],
      patentInfo: [],
      patentInfoPage:[],
      baikeInfo: {},
      newsInfo: [],
      newsInfoPage:[],
      tenderInfo: [],
      tenderInfoPage: [],
      awardTenderInfo: [],
      awardTenderInfoPage: [],

      pageSize:10,//一页包含条数
      currentPage: 1,//当前页码

      newsPageSize:10,//一页包含条数
      newsCurrentPage: 1,//当前页码
      tenderPageSize:10,//一页包含条数
      tenderCurrentPage: 1,//当前页码
      awardPageSize:10,//一页包含条数
      awardCurrentPage: 1,//当前页码
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
        url: this.$store.state.chainnameUrl[this.$route.params.chainname]+"/getEnterpriseList",
        params: {
          keywords: keywords
        }
      })
          .then(res => {
            this.baseInfo = res.data[0]
            this.processEnterpriseInfo(this.baseInfo, 20)
          })
          .catch(error => console.log(error))
    },
    processEnterpriseInfo(baseInfo, limit) {
      baseInfo.words = utils.limitNum(baseInfo.words, limit)

      baseInfo.nodes = utils.limitNum(baseInfo.nodes, limit)

      baseInfo.capital = parseFloat(baseInfo.capital).toFixed(2) + " 万"+baseInfo.capitalcurrency

      baseInfo.establishdate = baseInfo.establishdate.slice(0, 10)
    },
    getEnterpriseInformation() {
      axios({
        method: "get",
        url: this.$store.state.chainnameUrl[this.$route.params.chainname]+"/getEnterpriseInformation",
        params: {
          enterprisename: this.$route.params.enterprisename
        },
        timeout: 60000
      })
          .then(res => {
            var enterpriseInfo = res.data
            this.businessInfo = enterpriseInfo['工商信息'][0]
            this.processBusinessInfo(this.businessInfo)

            this.patentInfo = enterpriseInfo['专利信息']
            this.processPatentInfo(this.patentInfo, 10)

            this.baikeInfo = enterpriseInfo['百科信息'][0]
            if(!this.baikeInfo){
              this.baikeInfo = {'百科信息详细':'暂无数据'}
            }

            this.newsInfo = enterpriseInfo['新闻信息']
            this.processNewsInfo(this.newsInfo)

            this.tenderInfo = enterpriseInfo['招标信息']
            this.processTenderInfo(this.tenderInfo)

            this.awardTenderInfo = enterpriseInfo['中标信息']
            this.processAwardTenderInfo(this.awardTenderInfo)

          })
          .catch(error => console.log(error))
    },
    processBusinessInfo(businessInfo) {
      businessInfo['成立时间'] = businessInfo['成立时间'].substr(0, 10)
      businessInfo['注册资本'] = parseFloat(businessInfo['注册资本']).toFixed(2) + " 万元"
    },
    processPatentInfo(patentInfo, limit) {
      for (let i in patentInfo) {
        patentInfo[i]["专利关键词"] = utils.limitNum(patentInfo[i]["专利关键词"], limit)
      }
      if(patentInfo && patentInfo.length > 10){
        this.currentPage = 1
        this.patentInfoPage = patentInfo.slice(0,this.pageSize)
      }else {
        this.patentInfoPage = patentInfo
      }
      this.addContentLimitFlag(this.patentInfoPage)
    },
    processNewsInfo(newsInfo) {//以下三个函数，处理方式一样，但是变量不一样，如何改进代码
      if(newsInfo && newsInfo.length > 10){
        this.newsCurrentPage = 1
        this.newsInfoPage = newsInfo.slice(0,this.newsPageSize)
      }else {
        this.newsInfoPage = newsInfo
      }
      this.addContentLimitFlag(this.newsInfoPage)
    },
    processTenderInfo(tenderInfo) {
      if(tenderInfo && tenderInfo.length>10) {
        this.tenderCurrentPage = 1
        this.tenderInfoPage = tenderInfo.slice(0, this.tenderPageSize)
      }else {
        this.tenderInfoPage = tenderInfo
      }
      this.addContentLimitFlag(this.tenderInfoPage)
    },
    processAwardTenderInfo(awardTenderInfo) {
      if(awardTenderInfo && awardTenderInfo > 10){
        this.awardCurrentPage = 1
        this.awardTenderInfoPage = awardTenderInfo.slice(0,this.awardPageSize)
      }else {
        this.awardTenderInfoPage = awardTenderInfo
      }
      this.addContentLimitFlag(this.awardTenderInfoPage)
    },
    addContentLimitFlag(info){
      for(let i in info){
        info[i].flag = true
      }
    },
    stateFormat(row, column, cellValue) {
      if (row.flag) {
        if (!cellValue) return '';
        if (cellValue.length > this.$store.state.limitLength) {   // 超过长度的内容隐藏
          return cellValue.slice(0, this.$store.state.limitLength) + '  ...';
        }
        return cellValue;
      } else {
        return cellValue;
      }
    },
    tableCellClassName({row, column, rowIndex, columnIndex}){//注意这里是解构
      //利用单元格的 className 的回调方法，给行列索引赋值
      row.index=rowIndex;
      column.index=columnIndex;
    },
    clickContent(row, column) {
      if (column.label === "专利摘要") {  // 只有点击数据内容列时才会展开
        row.flag = !row.flag;  // 这个参数是当时将数据存储到表格中时特意加上控制表格的展开和省略的
        this.$set(this.patentInfoPage,row.index,row)
      }
      if (column.label === "新闻摘要") {
        row.flag = !row.flag;
        this.$set(this.newsInfo,row.index,row)
      }
      if (column.label === "招标摘要") {
        row.flag = !row.flag;
        this.$set(this.tenderInfo,row.index,row)
      }
      if (column.label === "中标摘要") {
        row.flag = !row.flag;
        this.$set(this.awardTenderInfo,row.index,row)
      }
    },
    handlePageSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val
      this.patentInfoPage = this.patentInfo.slice(0,this.pageSize)
      this.currentPage = 1
    },
    handleCurrentPageChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val
      this.patentInfoPage = this.patentInfo.slice((val-1)*this.pageSize,val*this.pageSize)
      this.addContentLimitFlag(this.patentInfoPage)
    },
    handleNewsPageSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.newsPageSize = val
      this.newsInfoPage = this.newsInfo.slice(0,this.newsPageSize)
      this.newsCurrentPage = 1
    },
    handleNewsCurrentPageChange(val) {
      // console.log(`当前页: ${val}`);
      this.newsCurrentPage = val
      this.newsInfoPage = this.newsInfo.slice((val-1)*this.newsPageSize,val*this.newsPageSize)
      this.addContentLimitFlag(this.newsInfoPage)
    },
    handleTenderPageSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.tenderPageSize = val
      this.tenderInfoPage = this.tenderInfo.slice(0,this.tenderPageSize)
      this.tenderCurrentPage = 1
    },
    handleTenderCurrentPageChange(val) {
      // console.log(`当前页: ${val}`);
      this.tenderCurrentPage = val
      this.tenderInfoPage = this.tenderInfo.slice((val-1)*this.tenderPageSize,val*this.tenderPageSize)
      this.addContentLimitFlag(this.tenderInfoPage)
    },
    handleAwardPageSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.awardPageSize = val
      this.awardTenderInfoPage = this.awardTenderInfo.slice(0,this.awardPageSize)
      this.awardCurrentPage = 1
    },
    handleAwardCurrentPageChange(val) {
      // console.log(`当前页: ${val}`);
      this.awardCurrentPage = val
      this.awardTenderInfoPage = this.awardTenderInfo.slice((val-1)*this.awardPageSize,val*this.awardPageSize)
      this.addContentLimitFlag(this.awardTenderInfoPage)
    }
  },

};
</script>
<style>
p {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>