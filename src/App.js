import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import Subject from './components/Subject.js'
import Article from './components/Article.js'
import { Component } from 'react';


// 함수식
// function App() {
//   return (
//     <div className="App">
//       Hello, React!!
//     </div>
//   );
// }


class App extends Component { // 컴포넌트를 만드는 코드
  constructor(props) { // render()보다 먼저 실행되면서 props를 초기화
    super(props);
    this.state = {
      mode:'welcome',
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome:{title:'Welcome', desc:'Hello React'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if (this.state.mode === "welcome" || this.state.mode === "Welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if (this.state.mode == "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* state로부터 옴 */}
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/"onClick={function(e) {
            console.log("e")
            e.preventDefault();
            this.setState({
              mode:'welcome'
            })
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <Nav data={this.state.contents}></Nav>
        <Article title={_title} contents={_desc}></Article>
      </div>
    );
  }
}

export default App;
