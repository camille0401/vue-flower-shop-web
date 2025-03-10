<template>
  <div class="fs-login-page">
    <!-- header -->
    <header class="login-header container">
      <h1 class="logo">
        <RouterLink to="/">FLOWER-SHOP</RouterLink>
      </h1>
      <div class="header-right-box">
        <a href="javascript:;" class="tel">
          <i class="iconfont icon-service"></i>
          4009-939-002
        </a>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="section-left">
        <div class="shadow"></div>
        <h1>还未注册?</h1>
        <RouterLink to="/" class="register-btn">
          注册
        </RouterLink>
      </div>
      <div class="section-right">
        <h1>欢迎回来</h1>
        <div class="form">
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" label-position="top"
            label-width="60px" status-icon>
            <el-form-item prop="account" label="邮箱">
              <el-input v-model="loginForm.account" />
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input v-model="loginForm.password" />
            </el-form-item>
            <div class="colum-2">
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox v-model="loginForm.agree" size="large">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <a href="javascript:;">忘记密码？</a>
            </div>
            <el-button size="large" class="subBtn" @click="doLogin">点击登录</el-button>
          </el-form>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup name="Login">
import { reactive, ref } from 'vue'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { getLoginAPI } from '@/apis/user'

const userStore = useUserStore();
const router = useRouter();
const loginFormRef = ref(null);
const loginForm = ref({
  account: "",
  password: "",
  agree: ""
})
const loginRules = reactive({
  account: [
    { required: true, message: '用户名不能为空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 14, message: '密码长度为6-14个字符', trigger: 'blur' },
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        // 自定义校验逻辑
        // 勾选就通过 不勾选就不通过
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选协议'))
        }
      }
    }
  ]
})

const doLogin = () => {
  const { account, password } = loginForm.value
  // 调用实例方法
  loginFormRef.value.validate(async (valid) => {
    // valid: 所有表单都通过校验  才为true
    console.log(valid)
    // 以valid做为判断条件 如果通过校验才执行登录逻辑
    if (valid) {
      // TODO LOGIN
      const res = await getLoginAPI({ account, password })
      userStore.getUserInfo(res.result || {});
      // 1. 提示用户
      ElMessage({ type: 'success', message: '登录成功' })
      // 2. 跳转首页
      router.replace({ path: '/' })
    }
  })
}

</script>
<style scoped lang='scss'>
.login-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center / contain;
    }
  }

  .header-right-box {
    display: flex;
    align-items: center;
    column-gap: 20px;
    font-size: 1.6rem;

    i {
      font-size: 1.4rem;
      color: $fs-base-color;
      letter-spacing: -5px;
    }

    .tel {
      display: flex;
      align-items: center;

      i {
        font-size: 2.2rem;
        margin-right: 10px;
      }
    }
  }
}

.login-section{
  display: flex;
  width: 800px;
  // height: 600px;
  margin: 0 auto;
  border: 1px solid red;
  .section-left{
    position: relative;
    flex: 30%;
    padding-top: 50px;
    text-align: center;
    background: url("@/assets/images/login-pic.jpg") no-repeat center 100%/100%;
    .shadow{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.7);
    }
    h1{
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      font-size: 2.4rem;
      line-height: 2em;
      color: #FFFFFF;

    }
    button{
      position: absolute;
      bottom: 150px;
      transform: translateX(-50%);
    }
  }
  .section-right{
    flex: 70%;
    // border: 1px solid red;
    padding: 50px 0;
    text-align: center;
    h1{
      margin-bottom: 20px;
      font-size: 2.4rem;
      line-height: 2em;
      color: #333;
    }
    .form{
      padding: 0 40px;
    }
    .colum-2{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
      .el-form-item{
        margin-bottom: 0;
      }
    }
  }
}

a:hover{
  color: $fs-base-color;
}

.subBtn {
  background: $fs-base-color;
  width: 100%;
  color: #fff;
}
</style>
