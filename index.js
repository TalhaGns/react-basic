const arr = ["talha", "ismail", "elnur", "ahmet"];
const arr2 = ["Congragulations!", "React is awesome"]

class NoteList extends React.Component {
  render() {
    return (
      <ol>
        {React.Children.map(this.props.children, function (child) {
          return <li>
            {child}
          </li>
        })}
      </ol>
    )
  }
}


class HelloNames extends React.Component {
  render() {

    return (
      
        <NoteList>
        {this.props.diffNames.map(name=> <p>Hello {name}</p>)}
        </NoteList>
      
    )
  }
}


class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from Component</h1>
        <p>Hello World</p>

        <HelloNames diffNames={arr} />
        {this.props.diffTags}
        
      </div>
    )
  }
}

function App() {
  return <div>
    <h2>Hello from Function</h2>
    <HelloMessage diffTags={arr2} />
  </div>;
}









ReactDOM.render(


  <App />
  ,


  document.getElementById("example")

)
