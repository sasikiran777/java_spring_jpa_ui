import {
    NavLink, useLocation
} from "react-router-dom";

const Sidebar = () => {
    const {pathname} = useLocation()
    return (
        // <div className="flex">
        //     <aside className="w-44 fixed left-0 top-0 h-screen bg-slate-700 p-10">
        //         <h1 className="text-white text-4xl">Sidebar</h1>
        //     </aside>
        //     <main className="flex-1 ml-44">
        //         <div className="h-12 bg-amber-400 pb-3 text-center">
        //             <h1 className="text-4xl">Top Content</h1>
        //         </div>
        //         <div className="h-96 bg-white p-10">
        //             <h1 className="text-4xl">Middle Content</h1>
        //         </div>
        //         <div className="h-96 bg-green-400 p-10">
        //             <h1 className="text-4xl">Middle Content</h1>
        //         </div>
        //         <div className="h-96 bg-indigo-400 p-10">
        //             <h1 className="text-4xl">Last Content</h1>
        //         </div>
        //     </main>
        // </div>
            <div>
                <div className="flex items-center justify-center h-20 shadow-md">
                    <h1 className="text-3xl uppercase text-indigo-500">Book Store</h1>
                </div>
                <ul className="flex flex-col py-4">
                    <li>
                        <NavLink to="#"
                              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                className="bx bx-home"></i></span>
                            <span className="text-sm font-medium">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/books/list"
                              className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${pathname.includes("/books") ? "text-indigo-600" : "text-brand-darkblue"}`}
                        >
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                className="bx bx-music"></i></span>
                            <span className="text-sm font-medium">Books</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/buyers"
                              className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${pathname.includes("/buyers")  ? "text-indigo-600" : "text-brand-darkblue"}`}>
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                className="bx bx-music"></i></span>
                            <span className="text-sm font-medium">Buyers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/authors/list"
                              className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${pathname.includes("/authors") ? "text-indigo-600" : "text-brand-darkblue"}`}>
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                className="bx bx-drink"></i></span>
                            <span className="text-sm font-medium">Authors</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users"
                              className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${pathname.includes("/users") ? "text-indigo-600" : "text-brand-darkblue"}`}>
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                className="bx bx-drink"></i></span>
                            <span className="text-sm font-medium">Users</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

    )

}

export default Sidebar
