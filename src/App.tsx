import React, { Component } from 'react';
import Map from './Map';

interface IMapProps {
    
}

interface IMapState {
    
}

class App extends Component<IMapProps, IMapState> {
    private map: Map | null = null;
    constructor (props: IMapProps) {
        super(props);
    }

    componentDidMount() {
        this.map = new Map();
    }

    render () {
        return (<canvas id="map"></canvas>);
    }
}

export default App;