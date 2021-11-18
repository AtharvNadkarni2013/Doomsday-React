import "./App.css";

function App() {
  const centuryIndices = { 18: 5, 19: 3, 20: 2, 21: 0 };
  const names = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  const getYearDay = (year) => {
    const century = Math.floor(year / 100);
    let t = year % 100;
    if (t % 2 === 1) {
      t += 11;
    }
    t /= 2;
    if (t % 2 === 1) {
      t += 11;
    }
    t = 7 - (t % 7);
    return t + centuryIndices[century];
  };
  return (
    <div>
      <h1>Doomsday App</h1>
      <input
        type="number"
        name=""
        id="year"
        placeholder="Year"
        min="1800"
        max="2199"
      />
    </div>
  );
}

export default App;
