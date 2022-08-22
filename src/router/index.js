import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Books} from "../components/books";
import {Buyers} from "../components/buyers";
import {Authors} from "../components/authors";
import {Users} from "../components/users";

const AppRoutes = () => {
    return <Routes>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/buyers" element={<Buyers />}></Route>
            <Route path="/authors" element={<Authors />}></Route>
            <Route path="/users" element={<Users />}></Route>
        </Routes>
}

export default AppRoutes
