<template>
  <div>
    <el-table
        v-loading="loading"
        :data="proEnterpriseList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)"
        style="width: 100%"
        :default-sort="{prop: 'Num', order: 'descending'}"
        highlight-current-row
        @current-change="gotoDetail"
        @sort-change="sortChange">
      <el-table-column
          type="index"
          label="序号">
        <template scope="scope">
          <span>{{ (currentPage - 1) * pageSize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <!--        查看排序-->
<!--      <el-table-column-->
<!--          prop="Num"-->
<!--          label="相关度"-->
<!--          min-width="20%">-->
<!--        <template slot-scope="scope">-->
<!--          <span v-if="$store.state.chainname !== '生物医药' && $store.state.nodenames.length >0" class="col-cont" v-html=" highlightWord( scope.row.nodewithnum[$store.state.nodenames])"></span>-->
<!--          <span v-else class="col-cont" v-html=" highlightWord( scope.row.Num)"></span>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column
          prop="enterprisename"
          label="企业名称">
        <template slot-scope="scope">
          <span class="col-cont" v-html=" highlightWord( scope.row.enterprisename)"></span>
        </template>
      </el-table-column>
      <el-table-column
          prop="words"
          label="关键词">
        <template slot-scope="scope">
          <span class="col-cont" v-html=" highlightWord( scope.row.words)"></span>
        </template>
      </el-table-column>
      <el-table-column
          prop="nodes"
          label="产业节点">
        <template slot-scope="scope">
          <span class="col-cont" v-html=" highlightWord( scope.row.nodes)"></span>
        </template>
      </el-table-column>
      <el-table-column
          prop="establishdate"
          label="成立时间"
          sortable="establishdate"
          min-width="30%">
        <template slot-scope="scope">
          <span class="col-cont" v-html=" highlightWord( scope.row.establishdate)"></span>
        </template>
      </el-table-column>
      <el-table-column
          prop="capital"
          label="注册资本"
          sortable="capital"
          align="right"
          min-width="35%">
        <template slot-scope="scope">
          <span class="col-cont" v-html=" highlightWord( scope.row.capital)"></span>
        </template>
      </el-table-column>
      <el-table-column
          prop="domicile"
          label="注册地">
        <template slot-scope="scope">
          <span class="col-cont" v-html=" highlightWord( scope.row.domicile)"></span>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" v-if="proEnterpriseList.length >10">
      <el-pagination
          @size-change="handlePageSizeChange"
          @current-change="handleCurrentPageChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          background
          style="text-align: center;"
          layout="total, sizes, prev, pager, next, jumper"
          :total="proEnterpriseList.length">
      </el-pagination>
    </div>
  </div>


</template>

<script>
import {mapState} from 'vuex'
import utils from '../utils'

export default {
  name: 'HomeMain',
  data() {
    return {
      proEnterpriseList: [],//预处理后所有企业数据
      currentRow: null,//当前企业
      loading: true,

      pageSize: 10,//一页包含条数
      currentPage: 1,//当前页码
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
    ...mapState(["enterpriseList", "LOADING", "nodenames"])
  },
  watch: {
    enterpriseList() {
      this.processEnterpriseList(3)
    },
    LOADING() {
      this.loading = this.$store.state.LOADING
      console.log(this.loading)
    },
    nodenames() {
      this.processEnterpriseList(3)
      this.sortChange({prop: 'Num', order: 'descending'})
    }
  },
  methods: {
    gotoDetail(val) {
      if (val) {
        this.currentRow = val;
        console.log("企业详情：", val.enterprisename);
        let routeUrl = this.$router.resolve({
          name: 'detail',
          params: {chainname: this.$store.state.chainname, enterprisename: val.enterprisename.trim()}
        });
        window.open(routeUrl.href, '_blank')
      }
    },
    processEnterpriseList(limit) {
      let proEnterpriseList = JSON.parse(JSON.stringify(this.$store.state.enterpriseList))//浅拷贝

      //产业链节点筛选
      if (this.$store.state.nodenames.length) {
        proEnterpriseList = proEnterpriseList.filter(item => {
          let nodenames = this.$store.state.nodenames
          for (let i in nodenames) {
            if ((" " +item.nodes).indexOf(" "+nodenames[i]+" ") > -1) {
              return true
            }
          }
          return false
        })
      }

      //数据预处理
      for (let i in proEnterpriseList) {
        proEnterpriseList[i].words = utils.limitNum(proEnterpriseList[i].words, limit)
        proEnterpriseList[i].nodes = utils.limitNum(proEnterpriseList[i].nodes, limit)
        proEnterpriseList[i].capital = parseFloat(proEnterpriseList[i].capital).toFixed(2) + " 万" + proEnterpriseList[i].capitalcurrency
        proEnterpriseList[i].establishdate = proEnterpriseList[i].establishdate.slice(0, 10)
      }

      //分页
      this.proEnterpriseList = proEnterpriseList
      // console.log("proEnterpriseList:",proEnterpriseList)
      this.currentPage = 1
      this.$store.commit('SetLOADING', false)
    },
    handlePageSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val
      this.currentPage = 1
    },
    handleCurrentPageChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
    },
    highlightWord(val) {
      val = val + '';
      if (this.$store.state.keywords !== '' && val.indexOf(this.$store.state.keywords) !== -1) {
        return val.replaceAll(this.$store.state.keywords, '<font color="#409EFF">' + this.$store.state.keywords + '</font>')
      } else {
        return val
      }
    },
    sortChange({prop, order}) {
      if (!order) {
        prop = 'Num'
      }

      if(this.$store.state.chainname !== "生物医药" && this.$store.state.nodenames.length >0 && prop === 'Num'){
        let n = this.$store.state.nodenames[0]
        console.log("排序:", n, order)
        this.proEnterpriseList.sort(function(a,b){
          return b['nodewithnum'][n] - a['nodewithnum'][n]
        })
      }else {
        console.log("排序:", prop, order)
        this.proEnterpriseList.sort(utils.compare(prop, order));
      }
    },

  }
}
</script>
