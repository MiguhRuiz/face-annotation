import React from 'react'
import ReactDOM from 'react-dom'

import FaceInterface from './components/FaceInterface'

class App extends React.Component {
    render() {
        return(
            <div className="App">
                <FaceInterface />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))