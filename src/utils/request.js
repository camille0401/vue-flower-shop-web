import axios from "axios";
import "element-plus/theme-chalk/el-message.css";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

// 创建axios实例
const request = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// axios请求拦截器
request.interceptors.request.use(
  (config) => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore();
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
request.interceptors.response.use(
  (res) => {
    console.log(res);
    return Promise.resolve(res.data);
  },
  (error) => {
    console.log(error);
    // 401 token timeout
    const userStore = useUserStore();
    const router = useRouter();
    if (error.response.status === 401) {
      userStore.clearUserInfo();
      router.push("/login");
    }
    // 统一错误提示
    ElMessage({
      type: "warning",
      message: error.response.data.message,
    });
    return Promise.reject(error);
  }
);

export default request;
