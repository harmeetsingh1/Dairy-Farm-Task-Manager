import React, { useEffect } from "react";
import { useTaskContext } from "../Context/TaskContext";
import { useTranslation } from "react-i18next";

function SeeTask() {
  const { tasks, deleteTask, addTask } = useTaskContext();

  const timeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const handleDelete = (index) => {
    deleteTask(index);
  };

  const { t } = useTranslation();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const currentTasks = tasks.map((task) => ({
      feedingTime: task.feedingTime,
      milkingSchedule: task.milkingSchedule,
      veterinaryAppointment: task.veterinaryAppointment,
    }));

    const newTasks = storedTasks.filter(
      (storedTask) =>
        !currentTasks.some(
          (currentTask) =>
            JSON.stringify(currentTask) === JSON.stringify(storedTask)
        )
    );

    newTasks.forEach((task) => {
      task.feedingTime = new Date(task.feedingTime);
      task.milkingSchedule = new Date(task.milkingSchedule);
      task.veterinaryAppointment = new Date(task.veterinaryAppointment);

      addTask(task);
    });
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t("See Tasks")}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="sm:table-header-group">
            <tr className="sm:table-row bg-gray-100">
              <th className="sm:table-cell py-2">{t("Sr.No.")}</th>
              <th className="sm:table-cell py-2">{t("Feeding Time")}</th>
              <th className="sm:table-cell py-2">{t("Milking Schedule")}</th>
              <th className="sm:table-cell py-2">
                {t("Veterinary Appointment")}
              </th>
              <th className="sm:table-cell py-2">{t("Delete Task")}</th>
            </tr>
          </thead>
          <tbody className="sm:table-row-group">
            {tasks.map((task, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="sm:table-cell py-2">{index + 1}</td>
                <td className="sm:table-cell py-2">
                  {task.feedingTime instanceof Date ? (
                    task.feedingTime.toLocaleTimeString(
                      "en-US",
                      timeFormatOptions
                    )
                  ) : (
                    <span>{t("Invalid Date")}</span>
                  )}
                </td>
                <td className="sm:table-cell py-2">
                  {task.milkingSchedule instanceof Date ? (
                    task.milkingSchedule.toLocaleTimeString(
                      "en-US",
                      timeFormatOptions
                    )
                  ) : (
                    <span>{t("Invalid Date")}</span>
                  )}
                </td>
                <td className="sm:table-cell py-2">
                  {task.veterinaryAppointment instanceof Date ? (
                    task.veterinaryAppointment.toLocaleDateString()
                  ) : (
                    <span>{t("Invalid Date")}</span>
                  )}
                </td>
                <td className="sm:table-cell py-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full"
                  >
                    {t("Delete")}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SeeTask;
