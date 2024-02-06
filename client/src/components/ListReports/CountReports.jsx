import { useEffect } from "react"
import { useAdmin } from "../../context/useAdmin"


export const CountReports = () => {
  const {countReport,loadReports} = useAdmin()
  useEffect(()=> {
    loadReports()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return(
    <div className="card-body">
      <p className="card-text">Reportes</p>
      <p className="contador">{countReport}</p>
    </div>
  )
}

export default CountReports