<template>
  <div class="sidebar">
    <!--  <p v-if="storeChainname" style="font-size: 16px;font-weight: 700;">{{ storeChainname }}</p>-->
    <el-aside style="">
      <el-table
          :data="tableData"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          row-key="id"
          default-expand-all
          highlight-current-row
          @current-change="handleCurrentChange"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column
            prop="nodeName"
            label="产业链节点"
            width="200px">
        </el-table-column>
        <el-table-column
            prop="count"
            label="公司数量"
            width="80px">
        </el-table-column>
      </el-table>
    </el-aside>
  </div>
</template>

<script>

// @ is an alias to /src
export default {
  name: 'HomeAside',
  data() {
    return {
      storeChainname: this.$store.state.chainname,
      tableData: this.$store.state.initAsideTableData,
      currentRow: null,
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      var nodeCounts = {}
      var enterpriseList = this.$store.state.enterpriseList
      console.log(enterpriseList)
      for (let i in enterpriseList) {
        console.log(enterpriseList[i])
        var nodes = enterpriseList[i].nodes.trim().split(/[ ]+/)
        for (let j in nodes) {
          if (nodes[j] !== "") {
            nodeCounts[nodes[j]] = (nodeCounts[nodes[j]] + 1) || 1;
          }
        }
      }
      console.log(nodeCounts)

      var tableData = this.$store.state.initAsideTableData
      console.log(tableData)
      for (let i in tableData) {
        tableData[i].count = nodeCounts[tableData[i].nodeName] || 0
        // if (tableData[i].count === undefined) {
        //   tableData[i].count = 0
        // }
        if (tableData[i].children) {
          for (let j in tableData[i].children) {
            tableData[i].children[j].count = nodeCounts[tableData[i].children[j].nodeName] || 0
            // if (tableData[i].children[j].count === undefined) {
            //   tableData[i].children[j].count = 0
            // }
          }
        }
      }
      this.tableData = tableData
      console.log("产业链:", tableData)
    },
    handleCurrentChange(row) {
      console.log("产业链节点:" + row.nodeName)
      this.currentRow = row;

    },
// :cell-style="cellStyle"
    // cellStyle(){
    //   return 'background-color: #242f42;color:#bfcbd9'
    // }
  },
}
</script>
<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar > table {
  height: 100%;
}

</style>