import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form action="create_process" method = "post"
                    onSubmit={function(e){
                        console.log(e.value)
                        e.preventDefault();
                        debugger;
                        alert('submit')
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