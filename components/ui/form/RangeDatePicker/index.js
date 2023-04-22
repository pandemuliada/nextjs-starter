import {
  useCalendars,
  useDatePickerState,
  useDaysPropGetters,
  useDays,
} from "@rehookify/datepicker";
import classNames from "classnames";
import { format } from "date-fns";
import { last } from "lodash";
import { useEffect } from "react";

const config = { dates: { mode: "range" } };

const RangeDatePicker = () => {
  const [state, dispatch] = useDatePickerState(config);
  const { calendars, weekDays } = useCalendars(state);
  const { dayButton } = useDaysPropGetters(state, dispatch);
  const { selectedDates, formattedDays } = useDays(state);

  const { month, year, days } = calendars[0];

  useEffect(() => {
    // console.log(selectedDates);
  }, [selectedDates]);
  return (
    <section>
      <header>
        <div>
          <p>
            {month} {year}
          </p>
        </div>
        <ul className="grid grid-cols-7">
          {weekDays.map((day) => (
            <li key={`${month}-${day}`} className="text-center">
              {day}
            </li>
          ))}
        </ul>
      </header>
      {console.log(selectedDates[0])}
      <ul className="grid grid-cols-7">
        {days.map((dpDay) => (
          <li key={`${month}-${dpDay.date}`}>
            {console.log(dpDay.$date == selectedDates[0])}
            <div
              {...dayButton(dpDay)}
              className={classNames("text-center", {
                "bg-red-500":
                  // dpDay.date == format(selectedDates[0], "MM/dd/yyyy"),
                  dpDay.$date == selectedDates[0],

                // "bg-red-500":
                //   dpDay.date >= format(selectedDates?.[0], "MM/dd/yyyy") &&
                //   dpDay.date <=
                //     format(selectedDates?.[1] ?? null, "MM/dd/yyyy"),
              })}
            >
              {dpDay.day}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RangeDatePicker;
