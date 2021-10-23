import logo from './logo.svg';
import './App.css';

// const data = ['Rubel', 'Sakib', 'Mahmudul', 'Rahim'];
// const heroStyle = {
//   border: "1px solid red",
//   margin: "10px",
//   width: "400px"
// }

const friends = ['Sakib', 'Rashib', 'Shuvo', 'Emu', 'Monir', 'Mridul', 'Fahim'];

const friendsDetails = [
    {
      name: "Sakib",
      id: 101,
      location: "Dhaka"
    },
    {
      name: "Rashib",
      id: 102,
      location: "Mymensing"
    },
    {
      name: "Shuvo",
      id: 103,
      location: "Bogura"
    },
    {
      name: "Emu",
      id: 104,
      location: "Dhaka"
    },
    {
      name: "Monir",
      id: 105,
      location: "Dhaka"
    },
    {
      name: "Mridul",
      id: 106,
      location: "Bogura"
    },
    {
      name: "Fahim",
      id: 107,
      location: "Bogura"
    }
];

const friendsCardStyle = {
  backgroundColor: "#d3d3d3",
  color: "black",
  height: "200px",
  width: "200px",
  borderRadius: "5px",
  padding: "10px",
  margin: "10px",
  float: "left"
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am learning React Js.
        </p>

        <div>
          {
            friendsDetails.map(details =>{
              return <FriendsCard name= {details.name} Location = {details.location}></FriendsCard>
            })
          }
        </div>




          {/* <Hero name = {data[0]} status = "Very bad"></Hero>
          <Hero name = {data[1]} status = "Bad"></Hero>
          <Hero name = {data[2]} status = "Very Good"></Hero>
          <Hero name = {data[3]} status = "Good"></Hero> */}
      </header>
    </div>
  );
}

// function Hero(props){
//   return(
//         <div style = {heroStyle}>
//           <h2>Name: {props.name}</h2>
//           <p>Status: {props.status}</p>
//         </div>
//   )
// }


function FriendsCard(props){
  return(
    <div style = {friendsCardStyle}>
      <h3>{props.name}</h3>
      <p>{props.Location}</p>
      <button>Ghuta Maro</button>
    </div>
  )
}


export default App;
