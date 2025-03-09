import request from "@/utils/http";

/**
 * @description: cart-api
 * @data {*}
 * @return {*}
 */
export const insertCartAPI = ({ skuId, count }) => {
  return request({
    url: "/member/cart",
    method: "POST",
    data: {
      skuId,
      count,
    },
  });
};
