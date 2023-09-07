import Appbar from "../Dashboard-user/Appbar/Appbar";
import OrdersCard from "../Dashboard-user/DashboardCard/OrdersCard";
import Sidebar from "../Dashboard-user/Sidebar/Sidebar";
import NavbarLayer from "./Navbar/Navbar";

export default function Landing({user}) {
    return (
        <div>
              {/* <NavbarLayer /> */}
              {/* <OrdersCard/> */}
             
            <OrdersCard user={user}/>
             

        </div>
    )
}