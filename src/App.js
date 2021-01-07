
function Food({favourite}){
  return (<h3>Я люблю {favourite}</h3>);
}

function App() {
  return (
    <div>
      <h1>Привет!!!!!</h1>
      <Food favourite='борщ' />
      <Food favourite='бутерброды' />
      <Food favourite='баранину' />
    </div>
  );
}

export default App;
