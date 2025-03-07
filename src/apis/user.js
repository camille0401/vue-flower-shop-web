import request from "@/utils/request";

/**
 * @description: category-page-data
 * @data {*}
 * @return {*}
 */
export function getLoginAPI(data) {
  return request({
    url: `/login`,
    method: "POST",
    data,
  });
}
