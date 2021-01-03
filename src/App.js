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
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {/* state로부터 옴 */}
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <Nav data={this.state.contents}></Nav>
        <Article title="HTML" contents="HTML is HyperText Markup Language."></Article>
      </div>
    );
  }
}

export default App;
