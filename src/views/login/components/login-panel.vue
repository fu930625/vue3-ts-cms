<template>
  <div class="login-main">
    <h1 class="login-title"></h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span
            ><el-icon><User /></el-icon> 账号登录</span
          >
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span
            ><el-icon><Cellphone /></el-icon> 手机登录</span
          >
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="login-control">
      <el-checkbox>记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login-main {
  width: 320px;
  .login-title {
    text-align: center;
  }
  .login-control {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%
  }
}
</style>
