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
        width="180">
    </el-table-column>
    <el-table-column
        prop="enterprisename"
        label="企业名称"
        width="180">
    </el-table-column>
    <el-table-column
        prop="words"
        label="关键词"
        width="180">
    </el-table-column>
    <el-table-column
        prop="nodes"
        label="产业节点"
        width="180">
    </el-table-column>
    <el-table-column
        prop="establishdate"
        label="成立时间"
        sortable
        width="180">
    </el-table-column>
    <el-table-column
        prop="capital"
        label="注册资本"
        sortable
        width="180">
    </el-table-column>
    <el-table-column
        prop="capitalcurrency"
        label="注册资本单位"
        width="180">
    </el-table-column>
    <el-table-column
        prop="domicile"
        label="注册地"
        width="180">
    </el-table-column>
  </el-table>
</template>

<script>
import { store } from "../store.js"

export default {
  data() {
    return {
      tableData: null
    }
  }, mounted() {
    store.getEnterpriseList();
    this.tableData=store.enterpriseList;//进一步处理
  }, methods: {

    // formatter(row, column) {
    //   return row.address;
    // }
  }
}
</script>