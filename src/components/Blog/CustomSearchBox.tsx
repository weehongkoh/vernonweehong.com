import {
  UseSearchBoxProps,
  useInstantSearch,
  useSearchBox,
} from "react-instantsearch";

import Loader from "@/components/Common/Loader";

export default function CustomSearchBox(props: UseSearchBoxProps) {
  const { refine } = useSearchBox(props);
  const { status } = useInstantSearch();
  const showLoading = status === "loading" || status === "stalled";

  function setQuery(newQuery: string) {
    refine(newQuery);
  }

  return (
    <div className="sticky top-16 z-20 bg-primary-950 pt-10 lg:top-10 lg:pt-0">
      <div className="flex flex-col gap-y-8">
        <form
          className="relative flex space-x-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-1 gap-x-3">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search ..."
              onChange={(event) => setQuery(event.target.value)}
            />
            {showLoading && (
              <Loader
                classes="flex items-center"
                spinnerClasses="text-green-400"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
