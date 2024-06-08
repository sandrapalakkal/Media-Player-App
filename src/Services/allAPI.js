import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"

//Add Video called by add component
export const addVideoAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/allVideos`, video)
}

//Get all videos called by view component
export const getAllVideoAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos`, "")
}

//Remove Video called by videocard component
export const removeVideoAPI = async (videoId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${videoId}`, {})
}

//Save history called by videocard component
export const saveHistoryAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/history`, video)
}
//Get video history called by history component
export const getVideoHistoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/history`, "")
}

//Remove history called by history component
export const removeHistoryAPI = async (videoId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/history/${videoId}`, {})
}

//Add category called by category component
export const addCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST", `${SERVER_URL}/allCategory`, categoryDetails)
}
//Get category called by category component
export const getCategoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allCategory`, "")
}

//Remove category called by category component
export const removeCategoryAPI = async (categoryId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allCategory/${categoryId}`, {})
}

//Get a video called by category component
export const getAVideoAPI = async (videoId) => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos/${videoId}`, "")
}

//Update category called by category component
export const updateCategoryAPI = async (categoryId, categoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/allCategory/${categoryId}`, categoryDetails)
}
//Get  a category called by category component
export const getSingleCategoryAPI = async (categoryId) => {
    return await commonAPI("GET", `${SERVER_URL}/allCategory/${categoryId}`, "")
}

