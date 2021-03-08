import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <form>
        <input type="checkbox" value="second" />
        <label>First Task</label>
        <br />
        <input type="checkbox" value="second" />
        <label>Second Task</label>
        <br />
        <input type="checkbox" value="third" />
        <label>Third Task</label>
        <br />
        <input type="checkbox" value="fourth" />
        <label>Fourth Task</label>
        <br />
        <input type="checkbox" value="fifth" />
        <label>Fifth Task</label>
      </form>
    </div>
  );
}
