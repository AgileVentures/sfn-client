import React from 'react'
import Chart from './Chart'
import { shallow } from 'enzyme'

describe('<Chart/>', () => {
    it('creates a component without breaking', ()=>{
        let chart = <Chart/>
    })
    it('has <ResponsiveBar/> tag', ()=>{
        let chartWrapper = shallow(<Chart/>)
        expect(chartWrapper.find('ResponsiveBar').length).toEqual(1)
    })
})