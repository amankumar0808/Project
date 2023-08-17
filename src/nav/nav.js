
import './nav.css'
import { NavLink } from 'react-router-dom';

export default function Nav(){
    return(
        <>
            <div className="verticle">
            <a href="http://localhost:3000/dashboard/books" ><img src="/logo.png" alt="logo" height={90} /></a>
                <div className="line"></div>
                <div className="nav_items_container">
                    <NavLink
                        className={({ isActive }) => {
                        if (isActive) return "option activity";
                        else return "option";
                        }}
                        to={"/dashboard/books"}
          >
                        Books
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => {
                        if (isActive) return "option activity";
                        else return "option";
                        }}
                        to={"/dashboard/members"}
          >
                        Members
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => {
                        if (isActive) return "option activity";
                        else return "option";
                        }}
                        to={"/dashboard/transactions"}
          >
                        Transactions
                    </NavLink>
                </div>

            </div>
        </>
        
    )
}