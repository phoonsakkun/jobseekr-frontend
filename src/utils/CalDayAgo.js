import React from "react";

function CalDayAgo(startDate, endDate) {
  const newStartDate = new Date(startDate);
  const newEndDate = new Date(endDate);

  const dayAgo = (newEndDate - newStartDate) / 24 / 3600 / 1000;
  return dayAgo;
}

export default CalDayAgo;

CalDayAgo();
