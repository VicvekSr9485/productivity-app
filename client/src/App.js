import { useEffect, useState } from "react";

import "./App.css";

const App = () => {
    const [activities, setActivities] = useState([]);

    return <div><div className="app">
    <header className="app-header">
      <h1>Productivity Tracker</h1>
      <form>
        <div>
          <label htmlFor="activity">Activity:</label>
          <input
            type="text"
            id="activity"
            name="activity"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="time">Time Taken:</label>
          <input type="text" id="time" name="time" autoComplete="off" />
        </div>
        <button type="submit">Add</button>
      </form>
    </header>
    <main className="app-main">
        <h2>Today</h2>

        {activities && activities.length > 0 ? (
          <ol>
            {activities.map((activity) => (
              <li key={activity._id}>
                {activity.name} - {activity.time}
              </li>
            ))}
          </ol>
        ) : (
          <p>No activities yet</p>
        )}
      </main>
  </div>
  </div>;
}

export default App;
