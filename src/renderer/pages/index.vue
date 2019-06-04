<template>
  <div>
    <h1>electron-vue 跨平台桌面开发TypeScript脚手架</h1>
    <p>{{demo}}</p>
    <button @click="contectus">联系我们</button>
    <button @click="print" type="submit">{{printip}}</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from "vuex";
import { remote } from "electron";
const { BrowserWindow } = remote;

export default Vue.extend({
  data() {
    return {
      printip:"打印测试页"
    };
  },
  computed: {
    ...mapGetters({
      demo: "Demo/main"
    })
  },
  created() {},
  methods: {
    jump(url) {
      this.$router.push(url);
    },
    print() {
       this.printip="三秒后开始打印"
      const win = new BrowserWindow({ show: false });
      win.loadURL("http://giapanda.com");
      setTimeout(() => {
        win.webContents.print();
        this.printip='打印测试页'
      }, 3000);
      console.log("BrowserWindow:", win);
    },
    contectus(){
       this.$electron.shell.openExternal("http://giapanda.com/api/app/kefu/qq.php")
    }
  }
})
</script>

