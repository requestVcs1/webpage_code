<template>
  <div class="register-wrap">
    <div class="logo"></div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          {
            validator: usernameValidator,
            message: '4到16位（字母，数字，下划线，减号）',
          },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          {
            validator: passwordValidator,
            message: '密码至少包含 数字和英文，长度6-20',
          },
        ]"
      />
      <van-field
        v-model="phone"
        type="phone"
        name="phone"
        label="手机号"
        placeholder="手机号"
        :rules="[
          {
            validator: phoneValidator,
            message: '请输入正确的手机号码',
          },
        ]"
      />
      <div class="btn-wrap">
        <van-button
          round
          block
          type="info"
          class="sub-btn"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { RegisterApi } from './api'
export default {
  data() {
    return {
      username: '',
      password: '',
      phone: '',
    }
  },
  methods: {
    // 验证用户名
    usernameValidator(val) {
      return /^[a-zA-Z0-9_-]{4,16}$/.test(val)
    },
    // 验证密码
    passwordValidator(val) {
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(val)
    },
    // 验证手机
    phoneValidator(val) {
      return /^1[3456789]\d{9}$/.test(val)
    },
    // 提交注册
    onSubmit(values) {
      RegisterApi(values).then((res) => {
        if (res.code === 200) {
          this.$notify({
            type: 'success',
            message: res.message,
            duration: 1000,
            onClose: () => {
              this.$router.push('/login')
            },
          })
        } else {
          this.$notify({ type: 'danger', message: res.message, duration: 1000 })
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.register-wrap {
  width: 100%;
  height: 100%;
  .logo {
    height: 300px;
  }
  .btn-wrap {
    margin-top: 60px;
  }
}
</style>
