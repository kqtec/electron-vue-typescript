<template>
  <div class="hero">
    <section class="section">
      <div class="container">
  <h1 class="title">electron-vue 跨平台桌面开发TypeScript脚手架</h1>
      <button class="button is-primary" @click="print">{{printip}}</button>
      </div>
     
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <a href="javascript:void(0)" @click="contectus">{{demo}}</a>
          <a href="javascript:void(0)" @click="contectus">联系我们</a>
        </p>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { remote } from "electron";
const { BrowserWindow } = remote;

export default Vue.extend({
  data() {
    return {
      printip: "打印测试页"
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
      this.printip = "三秒后开始打印";
      const win = new BrowserWindow({ show: false });
      win.loadURL("http://giapanda.com");
      setTimeout(() => {
        win.webContents.print();
        this.printip = "打印测试页";
      }, 3000);
      console.log("BrowserWindow:", win);
    },
    contectus() {
      this.$electron.shell.openExternal(
        "http://giapanda.com/api/app/kefu/qq.php"
      );
    }
  }
});
</script>
<style lang="scss">
@import "~bulma/bulma.sass";

.container {
  .seetion {
    padding: $section-padding-large;
  }
}
</style>

