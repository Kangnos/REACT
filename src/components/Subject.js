import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return ( // 하나의 최상의 태그만 가능함
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;