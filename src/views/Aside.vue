<template>
  <el-aside style="width: 310px; height: 500px">
    <p>{{ storeChainname }}</p>
    <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        default-expand-all
        highlight-current-row
        @row-click="handleClick"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
          prop="nodeName"
          label="产业链节点"
          width="150px">}
      </el-table-column>
      <el-table-column
          prop="count"
          label="公司数量"
          width="150px">
      </el-table-column>
    </el-table>
  </el-aside>
</template>

<script>
import {store} from "../store.js"

// @ is an alias to /src
export default {
  name: 'Aside',
  data() {
    return {
      storeChainname: store.state.chainname,
      tableData: store.state.initAsideTableData
    }
  },
  mounted() {
    // console.log(store.state.initAsideTableData)
    this.getTableData()
  },
  methods: {
    getTableData() {
      var nodeCounts = {}
      // eslint-disable-next-line no-unused-vars
      for(let enterprise in store.state.enterpriseList){
        // eslint-disable-next-line no-unused-vars
        var nodes =enterprise.nodes.trim().split(" ")
        // eslint-disable-next-line no-unused-vars
        for(let node in nodes){
          if(node!==""){
            nodeCounts[node]++;
          }
        }
      }

      var tableData = store.state.initAsideTableData
      for (var i = 0; i < tableData.length; i++) {
        tableData[i].count = nodeCounts[tableData[i].nodename]
        if(tableData[i].count === undefined){
          tableData[i].count = 0
        }
        if (tableData[i].children) {
          let j;
          for (j = 0; j < tableData[i].children.length; j++) {
            tableData[i].children[j].count = nodeCounts[tableData[i].children[j].nodename];
            if(tableData[i].children[j].count === undefined){
              tableData[i].children[j].count = 0
            }
          }
        }
      }
      this.tableData = tableData
      console.log("产业链:",tableData)
    },
    handleClick(row) {
      console.log("产业链节点:"+row.nodeName)
    }
  },
}
</script>