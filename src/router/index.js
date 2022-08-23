import {
    Routes,
    Route,
} from "react-router-dom";
import {Books} from "../components/books";
import {Buyers} from "../components/buyers";
import {Authors} from "../components/authors";
import {Users} from "../components/users";
import {AddNUpdate} from "../components/books/addnupdate";
import {BooksList} from "../components/books/BooksList";

const AppRoutes = () => {
    return <Routes>
            <Route path="/books" element={<Books />}>
                <Route path="list" element={<BooksList />} />
                <Route path="create" element={<AddNUpdate />}></Route>
            </Route>
            <Route path="/buyers" element={<Buyers />}></Route>
            <Route path="/authors" element={<Authors />}></Route>
            <Route path="/users" element={<Users />}></Route>
        </Routes>
}

export default AppRoutes
