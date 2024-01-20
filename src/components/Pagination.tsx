"use client";

interface Props {
  pages: number;
  currentPage: number;
  onNext: () => void;
  onPrevious: () => void;
}

export const Pagination: React.FC<Props> = ({
  pages,
  currentPage,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex justify-center items-center space-x-4">
        <div
          onClick={onPrevious}
          className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
        >
          &#x3C;
        </div>
        <div className="text-slate-500">
          {currentPage} / {pages}
        </div>
        <div
          onClick={onNext}
          className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
        >
          &#x3E;
        </div>
      </div>
    </div>
  );
};
