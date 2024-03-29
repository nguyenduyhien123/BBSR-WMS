import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { ListTab } from "../components/ListTab"

export const Layout = () => {
    return <div className="layout-web">
        <Header>
        </Header>
        <ListTab></ListTab>
        <Outlet></Outlet>
    </div>
}