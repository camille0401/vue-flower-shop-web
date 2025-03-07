import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref({});

    const getUserInfo = (data) => {
      userInfo.value = data;
    };
    const clearUserInfo = () => {
      userInfo.value = {};
    };

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true,
  }
);
