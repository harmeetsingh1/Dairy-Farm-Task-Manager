import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import SeeTask from "./SeeTask";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import ReactSwitch from "react-switch";

const MemoizedCreateTask = React.memo(CreateTask);
const MemoizedSeeTask = React.memo(SeeTask);

function Header() {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const [selectedComponent, setSelectedComponent] = useState("create");
  const [CreateTask, setCreateTask] = useState(null);
  const [SeeTask, setSeeTask] = useState(null);

  useEffect(() => {
    import("./CreateTask").then((module) =>
      setCreateTask(() => module.default)
    );
    import("./SeeTask").then((module) => setSeeTask(() => module.default));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start content-center justify-items-center h-screen pb-44">
      <div className="bg-green-100 p-8 rounded-lg shadow-lg max-w-md mx-auto mb-4 md:max-w-xs md:col-span-1">
        <div className="flex flex-row md:flex-col ">
          <div className="mr-2 sm:mb-2">
            <button
              className="bg-green-400 hover:bg-green-500 rounded-lg p-2 w-full md:w-32"
              onClick={() => setSelectedComponent("create")}
            >
              {t("Create Task")}
            </button>
          </div>
          <div className="mr-2">
            <button
              className="bg-green-400 hover:bg-green-500 rounded-lg p-2 w-full md:w-32"
              onClick={() => setSelectedComponent("see")}
            >
              {t("See Task")}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-green-100 p-3 rounded-lg shadow-lg max-w-full md:max-w-lg md:col-span-1 ">
        {selectedComponent === "create" && CreateTask ? (
          <MemoizedCreateTask />
        ) : selectedComponent === "see" && SeeTask ? (
          <MemoizedSeeTask />
        ) : null}
      </div>
    </div>
  );
}

export default Header;
