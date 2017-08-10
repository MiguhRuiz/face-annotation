import React from 'react'

const styles = {
        general: {
            display: 'flex',
            flexDirection: 'column'
        },
        circle: {
            width: '10px',
            height: '10px',
            borderRadius: 100,
            background: 'green',
            position: 'absolute',
            top: 0,
            left: 0
        },
        number: {
            position: 'absolute',
            top: '-20px',
            left: 0,
            color: 'green'
        }
    }

class Point extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const el = this.refs.point
        console.log(el)
        el.style.position = 'absolute'
        el.style.left = this.props.X + 'px'
        el.style.top = this.props.Y + 'px'
    }
    render() {
        return(
            <div className="Point" style={styles.general} ref="point">
                <span className="Point-num" style={styles.number}>{this.props.number}</span>
                <div className="Point-circle" style={styles.circle}></div>
            </div>
        )
    }
}

export default Point