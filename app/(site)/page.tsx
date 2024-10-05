import Header from "@/components/header";

export default function Home() {
  return (
      <div className="
        bg-neutral-900
        h-full
        w-full
        rounded-lg
        overflow-hidden
        overflow-y-auto
      ">
        <Header>
          <div className="mb-2">
            <h1>
              Welcome back
            </h1>
          </div>
        </Header>
      </div>
  );
}
