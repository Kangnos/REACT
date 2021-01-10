import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form action="create_process" method = "post" autocomplete="off"
                    onSubmit={function(e){
                        console.log(e.value)
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        )
                    }.bind(this)}
                >
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p>
                        <textarea name="desc"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        )
    }
}
  
export default CreateContent;