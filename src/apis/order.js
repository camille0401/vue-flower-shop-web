import request from "@/utils/request";

/**
 * @description: checkinfo-detail-api
 * @return {*}
 */
export const getCheckInfoAPI = () => {
  return request({
    url: "/member/order/pre",
    method: "GET",
  });
};

/**
 * @description: order-api
 * @return {*}
 */
export const createOrderAPI = (data) => {
  return request({
    url: "/member/order",
    method: "POST",
    data,
  });
};
