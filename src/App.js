import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


// 함수식
// function App() {
//   return (
//     <div className="App">
//       Hello, React!!
//     </div>
//   );
// }

class Subject extends Component{
  render(){
    return ( // 하나의 최상의 태그만 가능함
      <header> 
        <h1>WEB</h1>
        world wide web
      </header>
    );
  }
}


class Nav extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li> <a href="1.html">HTML</a></li>
            <li> <a href="2.html">CSS</a> </li>
            <li> <a href="3.html">JavaScript</a> </li>
        </ul>
      </nav>
    );
  }
}

class Article extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    )
  }
}

class App extends Component { // 컴포넌트를 만드는 코드
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <Nav></Nav>
        <Article></Article>
      </div>
    );
  }
}

export default App;
