<template>
  <div class="sidebar">
    <el-aside style="">
      <el-table
          :data="tableData"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          row-key="id"
          default-expand-all
          highlight-current-row
          @current-change="handleNodenameChange"
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
import {mapState} from "vuex";

export default {
  name: 'HomeAside',
  data() {
    return {
      // storeChainname: this.$store.state.chainname,
      tableData: this.$store.state.industryChain[this.$store.state.chainname],
      currentRow: null,
    }
  },
  computed: {
    ...mapState(["enterpriseList"])
  },
  watch: {
    enterpriseList() {
      this.getIndustryChainCount(this.$store.state.industryChain[this.$store.state.chainname])
    }
  },
  mounted() {
  },
  methods: {
    getIndustryChainCount(industryChain) {
      var nodeCounts = {}
      var enterpriseList = this.$store.state.enterpriseList
      for (let i in enterpriseList) {
        var nodes = enterpriseList[i].nodes.trim().split(/[ ]+/)
        for (let j in nodes) {
          if (!nodeCounts[nodes[j]]) {
            nodeCounts[nodes[j]] = new Set()
          }

          nodeCounts[nodes[j]].add(i)
        }
      }
      for (let i in industryChain) {
        if(!nodeCounts[industryChain[i].nodeName]){
          nodeCounts[industryChain[i].nodeName] = new Set()
        }

        if (industryChain[i].children) {
          for (let j in industryChain[i].children) {
            industryChain[i].children[j].count = 0
            if (nodeCounts[industryChain[i].children[j].nodeName]) {
              industryChain[i].children[j].count = nodeCounts[industryChain[i].children[j].nodeName].size
            }

            if(nodeCounts[industryChain[i].children[j].nodeName]){
              nodeCounts[industryChain[i].nodeName] = new Set([...nodeCounts[industryChain[i].children[j].nodeName], ...nodeCounts[industryChain[i].nodeName]])
            }
          }
        }

        industryChain[i].count = 0
        if (nodeCounts[industryChain[i].nodeName]) {
          industryChain[i].count = nodeCounts[industryChain[i].nodeName].size
        }
      }
      this.tableData = industryChain
    },
    handleNodenameChange(row) {
      this.currentRow = row;
      let nodenames = [row.nodeName]
      for (let i in row.children) {
        nodenames.push(row.children[i].nodeName)
      }
      console.log("产业链节点:" + nodenames)
      this.$store.commit('Setnodenames', nodenames)
    },
// :cell-style="cellStyle"
//     cellStyle(){
//       return 'background-color: #242f42;color:#bfcbd9'
//     }
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

/*.el-table__row:not([class*='el-table__row--level-']) > td:first-child {*/
/*  padding-left: 24px;*/
/*}*/

</style>