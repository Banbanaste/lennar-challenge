import ChevRight from "../svg/ChevRight";

export const Toast = () => {
  return (
    <div className="rounded-[14px] bg-black h-8 p-1 pr-2 mt-10 text-sm flex items-center w-fit">
      <span className="rounded-[14px] bg-indigo-600 px-3 py-1 uppercase mr-4 text-xs ">
        We’re hiring
      </span>
      <span className="mr-2">Visit our careers page</span>
      <ChevRight />
    </div>
  );
};
