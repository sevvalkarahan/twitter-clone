import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
    return (
        <aside className="w-[275px] flex flex-col max-h-screen min-h-screen px-2 sticky top-0">
            <Logo />
            <Menu />
            <Account />
        </aside>
    )
}