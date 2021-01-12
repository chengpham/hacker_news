/* eslink-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, memo} from 'react';
import {getStory} from '../services/hnApi'
import {StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement} from '../styles/StoryStyles'
import {timeAgo} from "../mappers/mapTime"

export const Story = memo(function Story({storyId}){
    const [story,setStory] = useState({});
    useEffect(()=>{
        getStory(storyId).then(data=> data && data.url && setStory(data))
    }, []);

    return story && story.url ? (
        <StoryWrapper data-testid="story">
        <StoryTitle><a href={story.url}>{story.title}</a></StoryTitle>
        <StoryMeta>
            <span data-testid="story_by">
                <StoryMetaElement color="#000">By: </StoryMetaElement>{story.by}
            </span>
            <span data-testid="story_time">
                <StoryMetaElement color="#000">Posted: </StoryMetaElement>{timeAgo(story.time)}
            </span>
        </StoryMeta>
        </StoryWrapper>
    ) : null
})