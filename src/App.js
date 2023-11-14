import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <DatePicker />
    </div>
  );
}

const DatePicker = () => {
  const today = new Date();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderCalendar = () => {
    const weekDay = new Date(1).getDay();
    const days = new Date(0).getDate() + weekDay;
    const result = [];
    for (let i = 1; i <= days; i += 7) {
      const row = [];
      let j = i;
      while (j < i + 7 && j < days) {
        const displayNumber = j - weekDay < 1 ? "" : j - weekDay;
        row.push(
          <td>
            <span
              onClick={() => {
                console.log(displayNumber);
              }}
            >
              {displayNumber}
            </span>
          </td>
        );
        j++;
      }
      result.push(<tr>{row}</tr>);
    }

    const daysUi = result;

    return (
      <table className="days-container">
        <thead className="days-row">
          {weekDays.map((name) => (
            <td className="day-header">{name}</td>
          ))}
        </thead>
        <tbody className="days-row">{daysUi}</tbody>
      </table>
    );
  };

  return <div>{renderCalendar()}</div>;
};
