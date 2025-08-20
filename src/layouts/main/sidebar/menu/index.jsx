import { NavLink } from "react-router-dom";
import classname from "classnames"
import classNames from "classnames";
import { mainMenu } from "../../../../util/consts";
import Button from "../../../../components/button";
import More from "./more";


export default function Menu() {
    return (
        <nav className="mt-0.5 mb-1">
            {mainMenu.map((menu, index) => (
                <NavLink to={menu.path} className="block group">
                    {({ isActive }) => (
                        <div className={classNames("p-3 rounded-full inline-flex items-center gap-5 text-xl group-hover:bg-[#eff3f41a] transition-colors",
                            { "font-bold": isActive })}>
                            <div className="w-[26.25px] h-[26.25px] relative">
                                {menu.notification &&
                                    <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">{menu.notification}</span>
                                }
                                {
                                    isActive ? menu.icon.active : menu.icon.passive
                                }
                            </div>

                            <div className="pr-4 text-xl">
                                {menu.title}
                            </div>

                        </div>
                    )}
                </NavLink>
            ))}
            <More />
            <div className="w-[90%]">
                <Button size={"large"}>Gönder</Button>
            </div>

        </nav>
    )
}