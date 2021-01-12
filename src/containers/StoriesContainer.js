import React, {useEffect, useState} from "react";
import {getStoryIds, getStory} from "../services/hnApi"
import {Story} from "../components/Story"
import {GlobalStyle, StoriesContainerWrapper} from "../styles/StoryContainerStyles"
import {useInfiniteScroll} from "../hooks/useInfiniteScroll"

export const StoriesContainer = ()=>{
    const {count} = useInfiniteScroll()
    const [storyIds, setStoryIds] = useState([])
    
    useEffect(()=>{
      console.log("count", count)
      getStoryIds().then(data=>setStoryIds(data));
    },[])
    if (storyIds.length == 0){ return null }
  
    return (
    <>
    <GlobalStyle />
    <StoriesContainerWrapper data-testid="stories-container">
    <h1>Hacker News Stories</h1>
    {storyIds.data.slice(0,count).map(storyId => <Story key={storyId} storyId={storyId}/>)}
    </StoriesContainerWrapper>
   </>
    )
  }
  
