import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const Authors = () => {
    const {pathname} = useLocation()
    let navigation = useNavigate()
    useEffect(() => {
        if (pathname === "/authors")
            navigation('/authors/list')
    }, [])
    return <>
        <Outlet/>
    </>
}
