import request from "@/utils/request";

/**
 * @description: home-banner
 * @param {*}
 * @return {*}
 */
export function getBannerAPI() {
    return request({
        url: "/home/banner"
    })
}

/**
 * @description: new-module
 * @param {*}
 * @return {*}
 */
export function getNewAPI() {
    return request({
        url: "/home/new"
    })
}

/**
 * @description: hot-module
 * @param {*}
 * @return {*}
 */
export function getHotAPI() {
    return request({
        url: "/home/hot"
    })
}

/**
 * @description: all-goods-module
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return request({
      url: '/home/goods'
    })
  }