import React from 'react'

import Point from '../Point/index.jsx'

class Image extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            points: []
        }

        this.addPoint = this.addPoint.bind(this)
    }
    addPoint(ev) {
        const currentPositions = this.state.points
        const postions = `${ev.clientX},${ev.clientY}`
        currentPositions.push(postions)
        this.setState({ points: currentPositions })
    }
    render() {
        const renderPoints = (this.state.points.length > 0) ? this.state.points.map((point, index) => {
                                                                    const coords = point.split(',')
                                                                    const realPointNum = index + 1
                                                                    return <Point X={coords[0]} Y={coords[1]} number={realPointNum}/>
                                                                }) : ''
        return(
            <div className="Image">
                <img src="http://lorempixel.com/500/500/people/" onClick={this.addPoint}/>
                {renderPoints}
            </div>
        )
    }
}

export default Image