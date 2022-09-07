import { useCalendar } from "@h6s/calendar";
import { format, getDate, isValid } from "date-fns";
import { useEffect } from "react";

const getColor = (day) => {
  if (day.isWeekend && day.isCurrentDate) {
    return "red";
  }

  if (day.isWeekend) {
    return "red";
  }

  return "#151515";
};

const getOpacity = (day) => {
  if (day.isWeekend && !day.isCurrentDate) {
    return 0.3;
  }

  if (day.isWeekend && day.isCurrentDate) {
    return 1;
  }

  if (!day.isCurrentMonth) {
    return 0.4;
  }

  if (day.isCurrentDate) {
    return 1;
  }

  return 1;
};

const Calendar = (props) => {
  const { onSelectDate, value } = props;
  const { headers, body, view, cursorDate, navigation } = useCalendar({
    defaultDate: value || new Date(),
  });

  // Show selected date when user change it from the input
  useEffect(() => {
    if (!!value) {
      const isValidDate = isValid(new Date(value));
      if (isValidDate) {
        navigation.setDate(new Date(value));
      }
    }
  }, [value]);

  return (
    <>
      <div className="flex justify-between items-center px-2 mb-3">
        <p>{format(cursorDate, "MMM yyyy")}</p>
        <div className="flex">
          <button
            type="button"
            onClick={navigation.toPrev}
            className="text-sm mr-2"
          >
            Prev
          </button>
          <button
            type="button"
            className="text-sm"
            onClick={() => {
              onSelectDate(format(new Date(), "yyyy-MM-dd"));
            }}
          >
            Today
          </button>
          <button
            type="button"
            onClick={navigation.toNext}
            className="text-sm ml-2"
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex w-full mb-1">
        {headers.weekDays.map(({ key, value }) => {
          return (
            <span key={key} className="w-12 text-center">
              {format(value, "E")}
            </span>
          );
        })}
      </div>
      <div className="w-full">
        {body.value.map(({ key, value: days }) => (
          <div key={key} className="flex">
            {days.map((day) => {
              const {
                key,
                date,
                isCurrentDate,
                isCurrentMonth,
                isWeekend,
                value,
              } = day;

              const activeClass = isCurrentDate && "bg-sandrift bg-opacity-25";

              return (
                <span
                  key={key}
                  className={`w-12 h-12 text-center cursor-pointer hover:bg-sandrift hover:bg-opacity-25 flex items-center justify-center rounded-full ${activeClass}`}
                  style={{
                    opacity: getOpacity(day),
                    fontWeight: isCurrentDate ? 700 : 400,
                    color: getColor(day),
                  }}
                  onClick={() => onSelectDate(format(value, "yyyy-MM-dd"))}
                >
                  {getDate(value)}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
