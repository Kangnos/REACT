import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import Subject from './components/Subject.js'
import Control from './components/control.js'; //.js는 생략 가능
import ReadContent from './components/ReadContent.js'
import CreateContent from './components/CreateContent';
import { Component } from 'react';

class App extends Component { // 컴포넌트를 만드는 코드
  constructor(props) { // render()보다 먼저 실행되면서 props를 초기화
    super(props);
    this.max_content_id = 3; // 사용하는 정보일뿐 UI에 영향을 주지 않음. 즉 state로 안씀
    console.log(this.max_content_id)
    this.state = {
      mode:'create',
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
    //test
    console.log("App render")

    // 아래 if절들을 위한 변수들    
    var _title, _desc, _article = null;

    // mode값에 따라 다르게 작동하게 하는 if구문들
    if (this.state.mode === "welcome" || this.state.mode === "Welcome") {
      this.state.selected_content_id = null;
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
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
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if (this.state.mode === "create") {
      this.state.selected_content_id = null;
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id += 1
        // var _contents = this.state.contents.concat( // concat은 원본 데이터를 바꾸기 않으면서 데이터를 없앰. 그냥 push의 상위호환이라고 생각하자
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // )
        var newContents = Array.from(this.state.contents) // 배열을 바꾸고 싶을때 Array.from() 객체를 바꾸고 싶을땐 Array.assign()
        var _contents = newContents.concat({id:this.max_content_id, title:_title, desc:_desc})
        this.setState({
          contents:_contents
        })
        // add content to this.state.content
        console.log(_title, _desc)
      }.bind(this)}></CreateContent>
    }

    // UI 구현 부분
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
          });
        }.bind(this)}
        data={this.state.contents}></Nav>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;


// props와 state의 차이점
// props는 수정이 될 수 없으므로 상위 컴포넌트로 데이터를 전달할때는 event를 사용함.
// state는 컴포넌트에서 setstate로 수정이 가능하다