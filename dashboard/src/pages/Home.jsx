import { Cities } from "../components/home/Cities";
import { Metrics } from "../components/home/Metrics";
import { Resto } from "../components/home/Resto";

export default function Home() {
  return (
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>

   
    <Metrics/>
   
    

   
    <div className="row">
       
       
       <Resto/>

       
        <Cities/>
    </div>
</div>
  )
}
