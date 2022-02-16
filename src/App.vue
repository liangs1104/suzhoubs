<template>
<el-container id="app" style="height: 500px; border: 1px solid #eee">
<app-header></app-header>
<app-aside></app-aside>
<app-Main></app-Main>
</el-container>
</template>

<script>
import Header from './views/Header'
import Aside from './views/Aside'
import Main from './views/Main'
export default {
  // name: "苏州银行系统",
  data() {
    return {

    }
  },
  components:{
    "app-header":Header,
    "app-aside":Aside,
    "app-Main":Main
  },
  methods: {

  },

};
</script>