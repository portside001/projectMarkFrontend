import Card from "../components/CardComponent";
import HRM from "../assets/images/HRM.jpg";
import Finance from "../assets/images/Finance.jpg";
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Link to="/hrm">
          <Card image={HRM} text={"HRM"} alt={"HRM"} />
        </Link>
        <Card image={Finance} text={"Finance"} alt={"Finance"} />
        <Card image={HRM} text={"Marketing"} alt={"Marketing"} />
        <Card image={HRM} text={"Operations"} alt={"Operations"} />
        <Card image={HRM} text={"Operations"} alt={"Operations"} />
      </div>
    </div>
  );
}
