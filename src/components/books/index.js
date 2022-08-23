import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const Books = () => {
    const {pathname} = useLocation()
    let navigate = useNavigate()
    useEffect(() => {
        if (pathname === '/books') {
            navigate('/books/list')
        }
    }, [])

    return <>
        <Outlet/>
    </>
}
