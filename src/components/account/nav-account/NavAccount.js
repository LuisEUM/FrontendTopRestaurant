import React from "react";
import { NavLink } from "react-router-dom";

function NavAccount() {
  return (
    <div className="container">
      <div className="d-flex row justify-content-center pt-5 ">
        <div className="d-flex col-10 py-3 border-bottom ">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? " justify-content-center  active text-left  link-secondary  text-decoration-none"
                : " link-secondary  nav-item  text-center text-decoration-none"
            }
          >
            <i className="fa fa-user-o fa-fw" />
            &nbsp; Profile
          </NavLink>
        </div>

        <div className="d-flex col-10 py-3 border-bottom">
          <NavLink
            to="/my_bookings"
            className={({ isActive }) =>
              isActive
              ? " justify-content-center  active text-left  link-secondary  text-decoration-none"
                : " link-secondary  nav-item  text-center text-decoration-none"
            }
          >
            <i className="fa fa-calendar-o fa-fw fa-fw" />
            &nbsp; My Bookings
          </NavLink>
        </div>

        <div className="d-flex col-10 py-3 border-bottom">
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
              ? " justify-content-center  active text-left  link-secondary  text-decoration-none"
                : " link-secondary  nav-item  text-center text-decoration-none"
            }
          >
            <i className="fa fa-heart-o fa-fw fa-fw" />
            &nbsp; Favorites
          </NavLink>
        </div>

        <div className="d-flex col-10 py-3 border-bottom">
          <NavLink
            to="/my_address"
            className={({ isActive }) =>
              isActive
              ? " justify-content-center  active text-left  link-secondary  text-decoration-none"
                : " link-secondary  nav-item  text-center text-decoration-none"
            }
          >
            <i className="fa fa-map-pin fa-fw fa-fw" />
            &nbsp; My Address
          </NavLink>
        </div>

        <div className="d-flex col-10 py-3 border-bottom">
          <NavLink
            to="/configurations"
            className={({ isActive }) =>
              isActive
              ? " justify-content-center  active text-left  link-secondary  text-decoration-none"
                : " link-secondary  nav-item  text-center text-decoration-none"
            }
          >
            <i className="fa fa-cog fa-fw fa-fw" />
            &nbsp; Configurations
          </NavLink>
        </div>

        <div className="d-flex col-10 py-3 border-bottom">
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive
              ? " justify-content-center  active text-left  link-secondary  text-decoration-none"
                : " link-secondary  nav-item  text-center text-decoration-none"
            }
          >
            <i className="fa  fa-sign-out fa-fw fa-fw" />
            &nbsp; Logout
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default NavAccount;