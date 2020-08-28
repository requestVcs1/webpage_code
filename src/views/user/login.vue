<template>
  <div class="login-form">
    <div class="logo">
      <img src="../../../public/image/timg (2).jpg" alt="" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '' }]"
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
        <van-button to="/register" round block type="primary" class="reg-btn">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { LoginApi } from './api'
import { setStore } from '../../utils/localStore'
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit(values) {
      LoginApi(values).then((res) => {
        if (res.code === 200) {
          setStore('token', res.token)
          this.$notify({
            type: 'success',
            message: res.message,
            duration: 1000,
            onClose: () => {
              this.$router.push('/')
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
.login-form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .logo {
    width: 100%;
    height: 300px;
    font: {
      size: 20px;
      family: none;
    }
  }
  .van-form {
    flex: 1;
  }
  .btn-wrap {
    margin: 50px 10px;
    .reg-btn {
      margin-top: 10px;
    }
  }
}
</style>
