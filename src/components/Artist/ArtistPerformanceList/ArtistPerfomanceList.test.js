import React from 'react'
import ArtistPerformanceList from './ArtistPerformanceList'
import ArtistPerformance from '../ArtistPerformance/ArtistPerformance'
import {shallow} from 'enzyme'

let wrapped

describe('ArtistPerfomanceList', ()=>{
    beforeEach(()=>{
        wrapped = shallow( <ArtistPerformanceList/> )
      })

    it('has 3 ArtistPerfomence',() => {
         expect(wrapped.find('ArtistPerformance').length).toEqual(3)
    })
})