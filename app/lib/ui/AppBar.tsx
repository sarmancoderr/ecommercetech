import { FaChevronLeft } from "react-icons/fa";

export function AppBar({ goBack, children, title }) {
    return <header className="flex flex-row text-2xl mb-5 py-2 items-center">
        <FaChevronLeft onClick={goBack} />
        <h2 className="ml-5 font-bold text-lg">{title}</h2>
        <div className="ml-auto">
            {children}
        </div>
    </header>;
}
