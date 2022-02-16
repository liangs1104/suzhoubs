<template>
  <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
    <p>{{ storeChainname }}</p>
    <!--    <el-menu :default-openeds="['1', '2','3']" :collapse-transition="false">-->
    <!--      <el-submenu index="1">-->
    <!--        <template slot="title"><i class="el-icon-message"></i>制药原材料</template>-->
    <!--        <el-menu-item-group>-->
    <!--          <el-menu-item index="1-1">基础化工材料</el-menu-item>-->
    <!--          <el-menu-item index="1-2">医用包材</el-menu-item>-->
    <!--          <el-menu-item index="1-3">药用辅料</el-menu-item>-->
    <!--        </el-menu-item-group>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="2">-->
    <!--        <template slot="title"><i class="el-icon-menu"></i>大宗原料药</template>-->
    <!--        <el-menu-item-group>-->
    <!--          <el-menu-item index="2-1">维生素类</el-menu-item>-->
    <!--          <el-menu-item index="2-2">抗生素类</el-menu-item>-->
    <!--          <el-menu-item index="2-3">解热镇痛类</el-menu-item>-->
    <!--          <el-menu-item index="2-4">激素类</el-menu-item>-->
    <!--        </el-menu-item-group>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="3">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>原料药</template>-->
    <!--        <el-menu-item-group>-->
    <!--          <el-menu-item index="3-1">特色原料药</el-menu-item>-->
    <!--          <el-menu-item index="3-2">药用辅助药</el-menu-item>-->
    <!--        </el-menu-item-group>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="4">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>制药设备</template>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="5">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>传统中药</template>-->
    <!--        <el-menu-item-group>-->
    <!--          <el-menu-item index="5-1">中药材</el-menu-item>-->
    <!--          <el-menu-item index="5-2">中药饮片</el-menu-item>-->
    <!--        </el-menu-item-group>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="6">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>中药</template>-->
    <!--        <el-menu-item-group>-->
    <!--          <el-menu-item index="6-1">中成药</el-menu-item>-->
    <!--        </el-menu-item-group>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="7">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>化学药</template>-->
    <!--        <el-menu-item-group>-->
    <!--          <el-menu-item index="7-1">原料药</el-menu-item>-->
    <!--        </el-menu-item-group>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="8">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>制剂</template>-->
    <!--        <el-menu-item-group>-->
    <!--          <el-menu-item index="8-1">抗感染药</el-menu-item>-->
    <!--          <el-menu-item index="8-2">心血管系统用药</el-menu-item>-->
    <!--          <el-menu-item index="8-1">血液和造血系统用药</el-menu-item>-->
    <!--          <el-menu-item index="8-2">抗肿瘤药</el-menu-item>-->
    <!--          <el-menu-item index="8-1">神经系统用药</el-menu-item>-->
    <!--          <el-menu-item index="8-2">呼吸系统用药</el-menu-item>-->
    <!--          <el-menu-item index="8-1">消化系统用药</el-menu-item>-->
    <!--          <el-menu-item index="8-2">免疫调节剂</el-menu-item>-->
    <!--          <el-menu-item index="8-2">皮肤及五官科药物</el-menu-item>-->
    <!--        </el-menu-item-group>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="9">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>创新药</template>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="10">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>保健品</template>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="11">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>生物制药</template>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="12">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>疫苗</template>-->
    <!--        <el-menu-item-group>-->
    <!--          <el-menu-item index="12-1">一类疫苗</el-menu-item>-->
    <!--          <el-menu-item index="12-2">二类疫苗</el-menu-item>-->
    <!--        </el-menu-item-group>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="13">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>诊断检测</template>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="14">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>医药流通</template>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="15">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>医疗废弃物处理</template>-->
    <!--      </el-submenu>-->
    <!--      <el-submenu index="16">-->
    <!--        <template slot="title"><i class="el-icon-setting"></i>医疗废水处理</template>-->
    <!--      </el-submenu>-->
    <!--    </el-menu>-->

    <!--    <el-tree-->
    <!--        :data="data"-->
    <!--        node-key="id"-->
    <!--        highlight-current="false"-->
    <!--        default-expand-all-->
    <!--        expand-on-click-node="false"-->
    <!--        @node-click="handleClick"-->
    <!--        :allow-drop="allowDrop"-->
    <!--        :allow-drag="allowDrag">-->
    <!--    </el-tree>-->

    <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        default-expand-all
        @row-click="handleClick"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
          prop="nodename"
          label="产业链节点"
          width="180">}
      </el-table-column>
      <el-table-column
          prop="count"
          label="公司数量"
          width="180">
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
      tableData: store.state.initAsideTableData,
    }
  },
  mounted() {
    if(store.state.enterpriseList !== ''){
      this.getTableData()
    }
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
      console.log(tableData)
    },
    handleClick(row) {
      console.log("click:"+row)
    }
  },
}
</script>