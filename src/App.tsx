import Day1 from "./2023/Day1";
import "./App.css";

/**
 * const { part1Result, part2Result } = Template();
 *
 * <div className="container">
 *    <h2>Day Template</h2>
 *
 *    <p>Part 1: {part1Result}</p>
 *    <p>Part 2: {part2Result}</p>
 * </div>
 */
function App() {
    const { part1Result, part2Result } = Day1();
    return (
        <div className="App">
            <h1>Advent of Code 2023</h1>

            <div className="container">
                <h2>Day 1</h2>

                <p>Part 1: {part1Result}</p>
                <p>Part 2: {part2Result}</p>
            </div>
        </div>
    );
}

export default App;
