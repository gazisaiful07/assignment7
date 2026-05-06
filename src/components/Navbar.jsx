import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faClock, faChartBar } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition ${isActive
            ? "bg-[#244D3F] text-white"
            : "text-slate-600 hover:text-[#244D3F]"
        }`;

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-bold">
                    Keen<span className="text-[#244D3F]">Keeper</span>
                </NavLink>

                <div className="flex gap-2">
                    <NavLink to="/" className={linkClass}>
                        <FontAwesomeIcon icon={faHouse} /> Home
                    </NavLink>

                    <NavLink to="/timeline" className={linkClass}>
                        <FontAwesomeIcon icon={faClock} /> Timeline
                    </NavLink>

                    <NavLink to="/stats" className={linkClass}>
                        <FontAwesomeIcon icon={faChartBar} /> Stats
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar