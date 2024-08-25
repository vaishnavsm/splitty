import Image from "next/image";

const SidePanel: React.FC<{}> = () => {
  return <nav className="flex flex-col flex-1 p-8">Sidepanel</nav>;
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
