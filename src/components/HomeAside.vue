<template>
  <div class="sidebar">
    <el-aside style="width: 280px">
      <el-table
          ref="industryChain"
          class="table"
          :data="tableData"
          style="width: 100%"
          :cell-style="{background: 'rgb(50, 65, 87)',color:'rgb(191, 203, 217)',border:'0px'}"
          :header-cell-style="{background:'rgb(50, 65, 87) !important',color:'rgb(191, 203, 217)',borderTop:'1px solid #EBEEF5'}"
          row-key="id"
          default-expand-all
          highlight-current-row
          @current-change="handleNodenameChange"
          @row-click="nodenameClick"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column
            prop="nodeName"
            label="产业链节点">
        </el-table-column>
        <el-table-column
            prop="count"
            label="公司数量"
            min-width="40%"
            align="center">
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
      clickFirst: true
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
        if (!nodeCounts[industryChain[i].nodeName]) {
          nodeCounts[industryChain[i].nodeName] = new Set()
        }

        if (industryChain[i].children) {
          for (let j in industryChain[i].children) {
            industryChain[i].children[j].count = 0
            if (nodeCounts[industryChain[i].children[j].nodeName]) {
              industryChain[i].children[j].count = nodeCounts[industryChain[i].children[j].nodeName].size
            }

            if(industryChain[i].children[j].children){
              for (let k in industryChain[i].children[j].children) {
                industryChain[i].children[j].children[k].count = 0
                if (nodeCounts[industryChain[i].children[j].children[k].nodeName]) {
                  industryChain[i].children[j].children[k].count = nodeCounts[industryChain[i].children[j].children[k].nodeName].size
                  nodeCounts[industryChain[i].children[j].nodeName] = new Set([...nodeCounts[industryChain[i].children[j].children[k].nodeName], ...nodeCounts[industryChain[i].children[j].nodeName]])
                }
              }
            }

            if (nodeCounts[industryChain[i].children[j].nodeName]) {
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
      this.currentRow = row
      this.clickFirst = true
    },
    nodenameClick(row) {
      if (!this.clickFirst) {
        this.$refs.industryChain.setCurrentRow()  //如过重复选中，则取消选中
        this.$store.commit('Setnodenames', [])
      } else {
        let nodenames = [row.nodeName]
        for (let i in row.children) {
          nodenames.push(row.children[i].nodeName)
        }
        this.$store.commit('Setnodenames', nodenames)
      }
      console.log("产业链节点:" + this.$store.state.nodenames)
      this.clickFirst = !this.clickFirst
    },
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
/*选中效果*/
/deep/ .el-table__body tr.current-row > td {
  color: rgb(32, 160, 255) !important;
  background-color: rgb(50, 65, 87) !important;
}
/*鼠标放置效果*/
/deep/ .el-table__body tr:hover > td {
  background-color: rgb(40, 52, 70) !important;
}
/*多级表格对齐*/
/deep/ .el-table__row:not([class*='el-table__row--level-']) td:first-child {
  padding-left: 24px;
}
/*下拉符号颜色*/
/deep/ .el-table__expand-icon{
  color:rgb(191, 203, 217);
}
</style>