<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'Num', order: 'descending'}"
  >
    <el-table-column
        prop="Num"
        label="序号"
        sortable
        width="110px">
    </el-table-column>
    <el-table-column
        prop="enterprisename"
        label="企业名称"
        width="110px">
    </el-table-column>
    <el-table-column
        prop="words"
        label="关键词"
        width="110px">
    </el-table-column>
    <el-table-column
        prop="nodes"
        label="产业节点"
        width="110px">
    </el-table-column>
    <el-table-column
        prop="establishdate"
        label="成立时间"
        sortable
        width="110px">
    </el-table-column>
    <el-table-column
        prop="capital"
        label="注册资本"
        sortable
        width="110px">
    </el-table-column>
    <el-table-column
        prop="capitalcurrency"
        label="注册资本单位"
        width="110px">
    </el-table-column>
    <el-table-column
        prop="domicile"
        label="注册地"
        width="110px">
    </el-table-column>
  </el-table>
</template>

<script>
import { store } from "../store.js"
const axios = require('axios')

export default {
  name: 'Main',
  data() {
    return {
      tableData: null
    }
  },
  mounted: function () {
    this.getEnterpriseList();
    this.tableData = store.state.enterpriseList;//进一步处理
    console.log("enterpriseTable:", this.tableData)
  },
  methods: {
    getEnterpriseList: () => {
      axios({
        method: "get",
        url: "http://139.224.233.19:50000/biologicalmedicine/getEnterpriseList",
        params: {
          chainname: store.state.chainname,
          provincename: store.state.provincename,
          cityname: store.state.cityname,
          keywords: store.state.keywords
        }
      })
          .then(res => {
            store.state.enterpriseList = res.data
            console.log("enterpriseList:" + res.data[0])
          })
          .catch(error => console.log(error))
    },
  }
}
</script>
