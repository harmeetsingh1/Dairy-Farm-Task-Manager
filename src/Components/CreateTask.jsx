import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { useTaskContext } from "../Context/TaskContext";
import { useTranslation } from "react-i18next";
registerLocale("es", es);

function CreateTask() {
  const { t } = useTranslation();

  const { addTask } = useTaskContext();
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTime1, setSelectedTime1] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isTaskCreated, setIsTaskCreated] = useState(false);
  const [taskCreatedMessage, setTaskCreatedMessage] = useState("");

  useEffect(() => {
    
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};

    // Set initial values based on stored data
    setSelectedTime(storedData.selectedTime || new Date());
    setSelectedTime1(storedData.selectedTime1 || new Date());
    setSelectedDate(storedData.selectedDate || new Date());
  }, []);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleTimeChange1 = (time) => {
    setSelectedTime1(time);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCreateTask = () => {
    if (!selectedTime || !selectedTime1 || !selectedDate) {
      setTaskCreatedMessage(t("Fill all the fields first!"));
      setIsTaskCreated(true);
      return;
    }

    const task = {
      feedingTime: selectedTime,
      milkingSchedule: selectedTime1,
      veterinaryAppointment: selectedDate,
    };

    addTask({
      feedingTime: selectedTime,
      milkingSchedule: selectedTime1,
      veterinaryAppointment: selectedDate,
    });
    setIsTaskCreated(true);
    localStorage.setItem("formData", JSON.stringify(task));
    localStorage.removeItem("task");
    setTaskCreatedMessage(t("Task created successfully!"));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4 p-10">{t("Create Task")}</h1>

      <div className="md:min-w-[450px] min-w-[250px]">
        <div class="mb-4 ">
          <h3 className="flex m-1 ">{t("Feeding Time")}</h3>

          <DatePicker
            selected={selectedTime}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500 md:min-w-[450px] min-w-[350px]"
          />
        </div>

        <div class="mb-4">
          <h3 className="flex m-1">{t("Milking Schedule")}</h3>
          <DatePicker
            selected={selectedTime1}
            onChange={handleTimeChange1}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500 md:min-w-[450px] min-w-[350px]"
          />
        </div>

        <div class="mb-4">
          <h3 className="flex m-1">{t("Veterinary Appointment")}</h3>
          <DatePicker
            locale="es"
            selected={selectedDate}
            onChange={handleDateChange}
            showDateSelect
            showDateSelectOnly
            className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500 md:min-w-[450px] min-w-[350px]"
          />
        </div>
        <button
          onClick={handleCreateTask}
          class="w-full bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
        >
          {t("Create Task")}
        </button>
        {isTaskCreated && (
          <div className="mt-4 text-green-600">{taskCreatedMessage}</div>
        )}
      </div>
    </div>
  );
}

export default CreateTask;
