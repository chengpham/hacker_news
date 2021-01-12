import axios from "axios";
import {selectFields} from "../selectors/selectFields"
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
export const newsStoryUrl = `${baseUrl}newstories.json`
export const storyUrl = `${baseUrl}item/`

export const getStory = async storyId => {
    const result = await axios.get(`${storyUrl + storyId}.json`).then(({data})=>data && selectFields(data))
    return result
}
export const getStoryIds = async ()=>{
    const result = await axios.get(newsStoryUrl).then(data=> data)
    return result
}