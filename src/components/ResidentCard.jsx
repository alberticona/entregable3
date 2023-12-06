import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentURL }) => {
  const [residentInfo, setResidentInfo] = useState(null)

  const bgByStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  }
  
  useEffect(() => {
    axios
    .get(residentURL)
    .then(({ data }) => setResidentInfo(data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <article>
      <header className="relative">
        <img src={residentInfo?.image} alt="" />
        <div className="flex items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white p-1 px-2">
          <div className={`h-3 aspect-square rounded-full ${bgByStatus[residentInfo?.status]}`}></div>
          <span>{residentInfo?.status}</span>
        </div>
      </header>
      <section>
        <h5>{residentInfo?.name}</h5>
        <ul>
          <li>
            <span>Species</span> {residentInfo?.species}
          </li>
          <li>
          <span>Origin</span> {residentInfo?.origin.name}
          </li>
          <li>
          <span>Times Appear</span> {residentInfo?.episode.length}
          </li>
        </ul>
      </section>
  </article>)
}
export default ResidentCard

