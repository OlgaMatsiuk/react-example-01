import logo from './logo.svg';
import './App.css';
import Statistics from './components/Statistics';
import statisticsData from './statistical-data.json';
console.log(statisticsData);


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
         <div>
     <h1>Главный компонент-контейнер</h1>
     <Statistics
     url="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      />
     {/* <Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />; */}
      <Statistics  
      label={statisticsData[1].label}
      percentage={statisticsData[1].percentage}
      // title='Upload stats'
      />
     {/* <UsersList users={users} /> */}
   </div>
      </header>
    </div>
  );
}

export default App;
