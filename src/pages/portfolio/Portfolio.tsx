import PortfolioDashboard from "../../components/portfolio/PortfolioDashboard";

//** mock data */
import dashboardData from '../../mock/dashboardData.json';
import closedData from '../../mock/closedData.json'; 
import liveData from '../../mock/liveData.json'; 

//** component */
import TabbedContent from "../../components/tabbedContent/TabbedContent";

function Portfolio() {
  return (
    <div>
      <div className="mt-6">
        <PortfolioDashboard dashboardData={dashboardData} />
      </div>
      <div className="mt-6">
        <TabbedContent liveData={liveData} closedData={closedData} />
      </div>
    </div>
  )
}

export default Portfolio;