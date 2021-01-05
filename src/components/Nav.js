import React, { Component } from 'react';

class Nav extends Component {
    render() {
        var list = [];
        var data = this.props.data
        for (let i = 0; i < data.length; i++) {
            list.push(
                <li key={data[i].id}> 
                    <a 
                        href={"/content/" + data[i].id}
                        data-id={data[i].id}
                        onClick={function(e) {
                            e.preventDefault();
                            this.props.onChnagePage(e.target.dataset.id);
                        }.bind(this)}
                    >{data[i].title}</a>
                </li>)
        }
        return (
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        );
    }
}

export default Nav // Nav 송출기