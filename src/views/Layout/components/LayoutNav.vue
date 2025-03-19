<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <li>
          <RouterLink to="/"><i class="iconfont icon-home"></i></RouterLink>
        </li>
        <template v-if="userStore?.userInfo?.token">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ userStore?.userInfo?.account }}</a></li>
          <li>
            <el-popconfirm @confirm="confirmLogout" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li>
            <RouterLink to="/login">请先登录</RouterLink>
          </li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
        <li><a href="javascript:;"><i class="iconfont icon-service"></i>&nbsp;4009-939-002</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup name="LayoutNav">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const confirmLogout = () => {
  userStore.clearUserInfo()
  // 2.跳转到登录页
  router.push('/login')
}

</script>

<style scoped lang="scss">
.app-topnav {
  background: #333333;

  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;

    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 1.4rem;
          margin-right: 2px;
        }

        &:hover {
          color: $fs-base-color-dark;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
