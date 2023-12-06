import { useState, useEffect } from "react";
import { paginationLogic } from "../utils/pagination";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { pages, residentsInCurrentPage } = paginationLogic(currentPage, residents);

  const handleNewPage = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);


  return (
    <section className="max-w-[1000px] mx-auto">
      <section className="grid gap-8 grid-cols-[repeat(auto-fill,_250px)] justify-center">
      {residentsInCurrentPage.map((resident) => (
        <ResidentCard key={resident} residentURL={resident} />
      ))}
      </section>

      <ul className="flex justify-center p-4 gap-6 flex-wrap">
        {pages.map((page) => (
          <li key={page}>
            <button 
            className={`${
              currentPage == page 
              ? "bg-green-800 p-2 text-white rounded-md"
              : "bg-black p-2 rounded-md text-white"
            }`}
            onClick={() => handleNewPage(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default ResidentList;