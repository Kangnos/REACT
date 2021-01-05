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
      mode:'read',
      selected_content_id:null,
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
    else if (this.state.mode === "read") {
      for (let i = 0; i < this.state.contents.length; i++) {
        var data = this.state.contents[i]
        console.log(data)
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;   
        }
      }
    }
    return (
      <div className="App">
        {/* state로부터 옴 */}
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){ // onChangepage라는 이벤트 생성
            this.setState({ // 위 constructor 함수에서 이미 state가 생성이 됐기때문에 setstate로 state를 모디파이
              mode:'welcome'
            })
          }.bind(this)}
        >
        </Subject>
        <Nav 
          onChnagePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          })
        }.bind(this)} data={this.state.contents}></Nav>
        <Article title={_title} contents={_desc}></Article>
      </div>
    );
  }
}

export default App;
