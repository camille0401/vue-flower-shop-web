import request from "@/utils/request";

/**
 * @description: category-page-data
 * @id {*}
 * @return {*}
 */
export function getCategoryAPI(id) {
    return request({
        url: `/category`,
        method: "GET",
        params: {
            id
        }
    })
}