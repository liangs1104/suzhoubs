<template>
  <div>
<!--    <el-button @click="processEnterpriseList"></el-button>-->
    <el-table
        v-loading="loading"
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'Num', order: 'descending'}"
        highlight-current-row
        @current-change="getDetail"
    >
      <el-table-column
          type="index"
          label="序号"
          :index="startIndex"
          >
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
          >
      </el-table-column>
      <el-table-column
          prop="capital"
          label="注册资本"
          sortable
          >
      </el-table-column>
      <el-table-column
          prop="domicile"
          label="注册地"
          >
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalEnterpriseNum">
      </el-pagination>
    </div>
  </div>


</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HomeMain',
  data() {
    return {
      preTableData:[],
      tableData: [{}],
      currentRow: null,
      loading:true,

      pageSize:10,
      totalEnterpriseNum:0,
      currentPage: 1,
      startIndex:1
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
      this.processEnterpriseList()
    },
    LOADING (){
      this.loading = this.$store.state.LOADING
    },
    nodenames(){
      this.processEnterpriseList()
    }
  },
  methods: {
    getDetail(val) {
      this.currentRow = val;
      console.log("企业详情：",val.enterprisename);
      let routeUrl = this.$router.resolve({name: 'detail', params: {enterprisename: val.enterprisename.trim()}});
      window.open(routeUrl.href, '_blank')
    },
    processEnterpriseList() {
      let preTableData =JSON.parse(JSON.stringify(this.$store.state.enterpriseList))//浅拷贝
      // console.log(this.$store.state.nodenames)
      // console.log('TableData:', preTableData)
      //产业链节点筛选
      if(this.$store.state.nodenames.length){
        preTableData = preTableData.filter(item =>{
          // console.log(item.nodes)
          let nodenames= this.$store.state.nodenames
          for(let i in nodenames){
            // console.log(item.nodes.indexOf(nodenames[i]) >-1)
            if(item.nodes.indexOf(nodenames[i]) >-1){
              return true
            }
          }
          return false
        })
      }

      //数据预处理
      for (let i in preTableData) {
        preTableData[i].words = preTableData[i].words.trim().split(/[ ]+/).slice(0, 3).join(", ")+", ..."
        preTableData[i].nodes = preTableData[i].nodes.trim().split(/[ ]+/).slice(0, 3).join(", ")+", ..."
        preTableData[i].capital = parseFloat(preTableData[i].capital).toFixed(2) + " 万元"
        preTableData[i].establishdate = preTableData[i].establishdate.slice(0,10)
      }

      // console.log('TableData:', preTableData)
      this.preTableData = preTableData
      this.tableData = preTableData.slice(0,this.pageSize)
      this.startIndex = 1
      this.currentPage = 1
      this.totalEnterpriseNum = preTableData.length
      this.$store.commit('SetLOADING', false)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val
      this.tableData = this.preTableData.slice(0,this.pageSize)
      this.startIndex = 1
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
      this.tableData = this.preTableData.slice((val-1)*this.pageSize,val*this.pageSize)
      this.startIndex = this.pageSize*(val-1)+1
    }
  }
}
</script>
