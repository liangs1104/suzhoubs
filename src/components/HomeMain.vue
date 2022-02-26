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
  </div>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HomeMain',
  data() {
    return {
      tableData: [{}],
      currentRow: null,
      loading:true,
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
    ...mapState(["enterpriseList","LOADING","nodename"])
  },
  watch:{
    enterpriseList(){
      this.processEnterpriseList()
    },
    LOADING (){
      this.loading = this.$store.state.LOADING
    },
    nodename(){
      this.processEnterpriseList()
    }
  },
  methods: {
    getDetail(val) {
      this.currentRow = val;
      console.log(val.enterprisename);
      let routeUrl = this.$router.resolve({name: 'detail', params: {enterprisename: val.enterprisename.trim()}});
      window.open(routeUrl.href, '_blank')
    },
    processEnterpriseList() {
      let preTableData =JSON.parse(JSON.stringify(this.$store.state.enterpriseList))//浅拷贝
      console.log(this.$store.state.nodename)
      console.log('TableData:', preTableData)
      if(this.$store.state.nodename){
        preTableData = preTableData.filter(item =>{
          // console.log(item.nodes)
          // console.log(item.nodes.indexOf(this.$store.state.nodename))
          return item.nodes.indexOf(this.$store.state.nodename) >-1
        })
        // for(let i in preTableData){
        //   console.log(preTableData[i].nodes)
        //   console.log(preTableData[i].nodes.indexOf(this.$store.state.nodename))
        //   preTableData[i] = preTableData[i]
        //   if(preTableData[i].nodes.indexOf(this.$store.state.nodename) === -1){
        //     preTableData.splice(parseInt(i),1)
        //   }
        // }
      }

      for (let i in preTableData) {
        preTableData[i].words = preTableData[i].words.trim().split(/[ ]+/).slice(0, 3).join(", ")+", ..."
        preTableData[i].nodes = preTableData[i].nodes.trim().split(/[ ]+/).slice(0, 3).join(", ")+", ..."
        // preTableData[i].capital = parseFloat(preTableData[i].capital).toFixed(2) + " "+preTableData[i].capitalcurrency
        preTableData[i].capital = parseFloat(preTableData[i].capital).toFixed(2) + " 万元"
        preTableData[i].establishdate = preTableData[i].establishdate.slice(0,10)
      }
      console.log('TableData:', preTableData)
      this.tableData = preTableData
      this.$store.commit('SetLOADING', false)
    },
  }
}
</script>
