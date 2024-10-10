import Header from "@/components/header";
import ListItem from "@/components/list_item"

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
            <h1
              className="
                text-3xl
                text-white
                font-semibold
              "
            >
              Welcome back
            </h1>
            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4
                gap-3
                mt-4
              "
            >
              <ListItem 
              image="/images/liked.png"
              name="Liked Songs"
              href="liked"
            />
            </div>
          </div>
        </Header>
        <div className="mb-7 px-6 mt-2">
          <div className="items-center justify-between flex">
            <h1 className="font-semibold text-2xl text-white">
              Newest Songs
            </h1>
          </div>
          <div>
            List of Songs!
          </div>
        </div>
      </div>
  );
}
