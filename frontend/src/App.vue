<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        Content
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      app-tournaments-manager ©2020 UFMG
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Vue from "vue";
import Layout from "ant-design-vue/lib/layout";
import Menu from "ant-design-vue/lib/menu";
import Breadcrumb from "ant-design-vue/lib/breadcrumb";

Vue.use(Layout);
Vue.use(Menu);
Vue.use(Breadcrumb);

export default {
  name: "HelloWorld"
};
</script>

<style lang="scss">
@import "ant-design-vue/dist/antd";
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.layout {
  height: 100%;
}
</style>
