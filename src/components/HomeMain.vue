<template>
  <div>
    <el-button @click="getEnterpriseList"></el-button>
    <el-table
        v-loading="loading"
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'Num', order: 'descending'}"
        highlight-current-row
        @current-change="handleCurrentChange"
    >
      <el-table-column
          prop="Num"
          label="相关度"
          sortable
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
      tableData: this.$store.state.enterpriseList,
      currentRow: null,
      loading:true,
    }
  },
  beforeCreate() {
  },
  created() {
    this.getEnterpriseList();
  },
  mounted: function () {
  },
  computed: {
    ...mapState(["enterpriseList","LOADING"])
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
      console.log(val.enterprisename);
      let routeUrl = this.$router.resolve({name: 'detail', params: {enterprisename: val.enterprisename.trim()}});
      window.open(routeUrl.href, '_blank')
    },
    async getEnterpriseList() {
      //   axios({
      //     method: "get",
      //     url: "http://139.224.233.19:50000/biologicalmedicine/getEnterpriseList",
      //     params: {
      //       chainname: store.state.chainname,
      //       provincename: store.state.provincename,
      //       cityname: store.state.cityname,
      //       keywords: store.state.keywords
      //     },
      //     timeout:60000
      //   })
      //       .then(res => {
      //         store.state.enterpriseList = res.data
      //         console.log("enterpriseList:" + res.data[0])
      //         var preTableData = res.data
      //         for(let i=0; i< preTableData.length;i++){
      //           preTableData[i].words = preTableData[i].words.trim().split(/[ ]+/).slice(0,4).join(",")
      //         }
      //         this.tableData = preTableData
      //       })
      //       .catch(error => console.log(error))
      // },
      this.tableData = await this.$store.dispatch(
          'getEnterpriseList',
          {
            chainname: this.$store.state.chainname,
            provincename: this.$store.state.provincename,
            cityname: this.$store.state.cityname,
            keywords: this.$store.state.keywords
          }
      )
      this.loading = false
      // this.loading =false
      //
      // var preTableData = this.$store.state.enterpriseList
      // console.log('preTableData:', preTableData)
      //
      // for (let i = 0; i < preTableData.length; i++) {
      //
      //   preTableData[i].words = preTableData[i].words.trim().split(/[ ]+/).slice(0, 3).join(" ")
      //
      //   preTableData[i].capital = parseFloat(preTableData[i].capital).toFixed(2) + " "+preTableData[i].capitalcurrency
      //
      //   preTableData[i].establishdate = preTableData[i].establishdate.slice(0,10)
      //
      // }
      //
      // this.tableData = preTableData
    },
  }
}
</script>
