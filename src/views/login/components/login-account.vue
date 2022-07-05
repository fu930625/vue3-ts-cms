<template>
  <div>
  <el-form
    ref="ruleFormRef"
    :model="formData"
    :rules="rules"
    label-width="60px"
  >
    <el-form-item label="账号" prop="user">
      <el-input v-model="formData.user" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formData.password" />
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive ,ref} from 'vue'
import type { FooterInstance, FormRules} from 'element-plus'
import {rules} from '../config/account-config'
export default defineComponent({
  setup () {
    const ruleFormRef = ref<FooterInstance>()
    const formData = reactive({ user: '', password: ''})

    return {
      ruleFormRef,
      formData,
      rules
    }
  }
})
</script>

<style scoped>

</style>
