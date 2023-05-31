import React, { useState } from "react";
import { weekDays, today } from "../../utils/const";
import { displayMonth, formatDate } from "../../utils/functions";
import "./style.css";

const InnerCalendar = ({ choosenYear, choosenMonth, setSelectedDate, setIsCalendarOpen, language, dateFormat }) => {
	const [timeStamp, setTimeStamp] = useState();
	return (
		<>
			<div className="calendarRow">
				{weekDays.map((day, dayIndex) => (
					<div key={dayIndex}>
						<div className="day">{day}</div>
						{displayMonth(choosenYear.toString(), choosenMonth.toString()).map((date, index) =>
							date.getDay() === dayIndex ? (
								<div
									className={
										date.getDate() === today.getDate() &&
										date.getMonth() === today.getMonth() &&
										choosenMonth === today.getMonth()
											? "today"
											: date.getMonth() !== choosenMonth
											? "otherMonthDay"
											: date.getDate() === new Date(timeStamp).getDate()
											? "selectedDay"
											: "notSelectedDay"
									}
									key={index}
								>
									<div
										className="date"
										onClick={
											date.getMonth() === choosenMonth
												? () => {
														setSelectedDate(formatDate(date, dateFormat));
														setTimeStamp(date);
														//setIsCalendarOpen(false);
												  }
												: null
										}
									>
										{date.getDate()}
									</div>
								</div>
							) : null,
						)}
					</div>
				))}
			</div>
		</>
	);
};

export default InnerCalendar;
