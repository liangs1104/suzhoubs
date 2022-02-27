<template>
  <div>
<!--    <el-button @click="processEnterpriseList"></el-button>-->
    <el-table
        v-loading="loading"
        :data="proEnterpriseListPage"
        style="width: 100%"
        :default-sort="{prop: 'Num', order: 'descending'}"
        highlight-current-row
        @current-change="gotoDetail"
    >
      <el-table-column
          type="index"
          label="序号"
          >
        <template scope="scope">
          <span>{{(currentPage - 1) * pageSize + scope.$index + 1}}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="enterprisename"
          label="企业名称"
          >
      </el-table-column>
      <el-table-column
          prop="words"
          label="关键词"
          >
      </el-table-column>
      <el-table-column
          prop="nodes"
          label="产业节点"
          >
      </el-table-column>
      <el-table-column
          prop="establishdate"
          label="成立时间"
          sortable
          min-width="30%"
          >
      </el-table-column>
<!--      排序不对-->
      <el-table-column
          prop="capital"
          label="注册资本"
          sortable
          min-width="35%"
          >
      </el-table-column>
      <el-table-column
          prop="domicile"
          label="注册地"
          >
      </el-table-column>
    </el-table>
    <div class="block" v-if="proEnterpriseList.length >10">
      <el-pagination
          @size-change="handlePageSizeChange"
          @current-change="handleCurrentPageChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="proEnterpriseList.length">
      </el-pagination>
    </div>
  </div>


</template>

<script>
import {mapState} from 'vuex'
import utils from '../utils'

export default {
  name: 'HomeMain',
  data() {
    return {
      proEnterpriseList:[],//预处理后所有企业数据
      proEnterpriseListPage: [{}],//当前页数据
      currentRow: null,//当前企业
      loading:true,

      pageSize:10,//一页包含条数
      currentPage: 1,//当前页码
    }
  },
  async created() {
    await this.$store.dispatch(
        'getEnterpriseList',
        {
          chainname: this.$store.state.chainname,
          provincename: this.$store.state.provincename,
          cityname: this.$store.state.cityname,
          keywords: this.$store.state.keywords
        }
    )
  },
  mounted: function () {
  },
  computed: {
    ...mapState(["enterpriseList","LOADING","nodenames"])
  },
  watch:{
    enterpriseList(){
      this.processEnterpriseList(3)
    },
    LOADING (){
      this.loading = this.$store.state.LOADING
    },
    nodenames(){
      this.processEnterpriseList(3)
    }
  },
  methods: {
    gotoDetail(val) {
      this.currentRow = val;
      console.log("企业详情：",val.enterprisename);
      let routeUrl = this.$router.resolve({name: 'detail', params: {enterprisename: val.enterprisename.trim()}});
      window.open(routeUrl.href, '_blank')
    },
    processEnterpriseList(limit) {
      let proEnterpriseList =JSON.parse(JSON.stringify(this.$store.state.enterpriseList))//浅拷贝

      //产业链节点筛选
      if(this.$store.state.nodenames.length){
        proEnterpriseList = proEnterpriseList.filter(item =>{
          let nodenames= this.$store.state.nodenames
          for(let i in nodenames){
            if(item.nodes.indexOf(nodenames[i]) >-1){
              return true
            }
          }
          return false
        })
      }

      //数据预处理
      for (let i in proEnterpriseList) {
        proEnterpriseList[i].words = utils.limitNum(proEnterpriseList[i].words,limit)
        proEnterpriseList[i].nodes = utils.limitNum(proEnterpriseList[i].nodes,limit)
        proEnterpriseList[i].capital = parseFloat(proEnterpriseList[i].capital).toFixed(2) + " 万元"
        proEnterpriseList[i].establishdate = proEnterpriseList[i].establishdate.slice(0,10)
      }

      //分页
      this.proEnterpriseList = proEnterpriseList
      this.proEnterpriseListPage = proEnterpriseList.slice(0,this.pageSize)
      this.currentPage = 1
      this.$store.commit('SetLOADING', false)
    },
    handlePageSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val
      this.proEnterpriseListPage = this.proEnterpriseList.slice(0,this.pageSize)
      this.currentPage = 1
    },
    handleCurrentPageChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
      this.proEnterpriseListPage = this.proEnterpriseList.slice((val-1)*this.pageSize,val*this.pageSize)
    }
  }
}
</script>
