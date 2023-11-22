import { Route, Routes } from "react-router-dom";
import BitcoinRates from "../Components/BitcoinRates";
import Homepage from "../Components/HomePage";
import Login from "../Components/Login";
import PageNotFound from "../Components/PageNotFound";

function AppRoutes(props) {
    return (
        <Routes>
            {/* index matches on default/home URL: / */}
            <Route index element={<Homepage {...props} />} />
            {/* nested routes, matches on /dash/tasks etc */}
            <Route path="/" >
                <Route path="/login" element={<Login />} />
                <Route path="/bitcoin" element={<BitcoinRates />} />
            </Route>

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
export default AppRoutes;