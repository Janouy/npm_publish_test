import React, { useState } from "react";
import Calendar from "./lib/pages/Calendar";
import "./App.css";

function App() {
	const [isCalendarOpen, setIsCalendarOpen] = useState(true);
	const [date, setDate] = useState();
	let language = "fr";
	let defaultDateFormat = "mm/dd/yyyy";
	return (
		<div className="App">
			<Calendar
				isCalendarOpen={isCalendarOpen}
				setIsCalendarOpen={setIsCalendarOpen}
				selectedDate={date}
				handleSelectedDate={setDate}
				language={language}
				dateFormat={defaultDateFormat}
			/>
		</div>
	);
}

export default App;
