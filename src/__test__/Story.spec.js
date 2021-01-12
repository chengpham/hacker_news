import React from 'react'
import { Story } from '../components/Story'
import { singularStory } from '../fixtures'
import { getStory } from '../services/hnApi'
import { cleanup } from '@testing-library/react'

beforeEach(()=>{
    cleanup()
    jest.resetAllMocks()
})

jest.mock('../services/hnApi', ()=>({
    getStory: jest.fn(),
    getStoryIds: jest.fn()
}))

test('renders the application', async () => {
    getStory.mockImplementation(() => Promise.resolve(singularStory))
        const { getByText, getByTestId } = render(<Story storyId="1" />)
        await waitForElement(()=>[
            expect(getbyTestId('story')).toBeTruthy(),
            expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
            expect(getByTestId('story-by').textContent).toEqual('By: Karl Hadwen')
        ])
})
