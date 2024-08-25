"use client";
import React from "react";

const GroupEl: React.FC<{}> = () => {
  return <div></div>;
};

const GroupList: React.FC<{}> = () => {
  return (
    <div className="flex flex-col flex-1 justify-start gap-2">
      <GroupEl />
      <GroupEl />
      <GroupEl />
    </div>
  );
};

const GroupCreateDialog: React.FC<{ inputRef: React.Ref<HTMLInputElement> }> = ({ inputRef }) => {
  return (
    <div className="px-4 pt-6 pb-4">
      <div className="">
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Group Name
        </label>
        <input
          ref={inputRef}
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};
const GroupCreate: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleOpen = React.useCallback(() => {
    setIsOpen((o) => !o);
    setTimeout(() => {
      if (focusRef.current) {
        console.log(focusRef);
        focusRef.current.focus();
      }
    }, 100);
  }, []);
  const focusRef = React.useRef<HTMLInputElement>(null);
  const createGroup = React.useCallback(() => {
    alert("TODO Not Implemented");
  }, []);
  return (
    <div className="p-4 flex flex-col ">
      <div className={"flex-1 flex flex-col rounded-lg " + (isOpen ? "bg-gray-50 " : "bg-white ")}>
        {isOpen && <GroupCreateDialog inputRef={focusRef} />}
        <div className="flex flex-row ">
          {isOpen && (
            <button
              className={"flex-1 rounded-lg rounded-r-none bg-green-200 p-4 text-lg hover:bg-green-300"}
              onClick={createGroup}
            >
              Create
            </button>
          )}
          <button
            className={
              "flex-1 rounded-lg  p-4 text-lg " +
              (isOpen ? "bg-red-200 hover:bg-red-300 rounded-l-none " : "bg-blue-200 hover:bg-blue-300 ")
            }
            onClick={toggleOpen}
          >
            {isOpen ? "Close" : "New Group"}
          </button>
        </div>
      </div>
    </div>
  );
};

const SidePanel: React.FC<{}> = () => {
  return (
    <nav className="flex flex-col flex-1 p-4">
      <GroupList />
      <GroupCreate />
    </nav>
  );
};

const MainPanel: React.FC<{}> = () => {
  return <main className="flex flex-col p-8 flex-1">Mainpanel</main>;
};

const SplitPanelLayout: React.FC<{}> = () => {
  return (
    <div className="flex flex-row min-h-screen w-screen items-stretch justify-start">
      <div className="md:w-1/3 lg:w-96 flex flex-col bg-white rounded-lg rounded-l-none">
        <SidePanel />
      </div>
      <div className="flex flex-col flex-1">
        <MainPanel />
      </div>
    </div>
  );
};

export default function Home() {
  return <SplitPanelLayout />;
}
