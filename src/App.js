import logo from './logo.svg';
import './App.css';

const data = ['Rubel', 'Sakib', 'Mahmudul', 'Rahim'];
const heroStyle = {
  border: "1px solid red",
  margin: "10px",
  width: "400px"
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am learning React Js.
        </p>
          <Hero name = {data[0]} status = "Very bad"></Hero>
          <Hero name = {data[1]} status = "Bad"></Hero>
          <Hero name = {data[2]} status = "Very Good"></Hero>
          <Hero name = {data[3]} status = "Good"></Hero>
      </header>
    </div>
  );
}

function Hero(props){
  return(
        <div style = {heroStyle}>
          <h2>Name: {props.name}</h2>
          <p>Status: {props.status}</p>
        </div>
  )
}

export default App;
