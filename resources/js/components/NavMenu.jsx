import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import AuthService from "../services/AuthService";

export default function NavMenu() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(true);
    const [token, setToken] = useState(AuthService.getToken());

    function toggleNavbar() {
        setCollapsed(false);
    }


    function logout() {
        AuthService.logout();
        navigate("/login");
        window.location.reload();
    }

    return (
      <header>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
              <NavbarBrand tag={Link} to="/">Favourite products</NavbarBrand>
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
              <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                  <ul className="navbar-nav flex-grow">
                      <NavItem>
                          <NavLink tag={Link} className="text-dark menu-gap" to="/">Home</NavLink>
                      </NavItem>
                      {   token &&
                          <NavItem>
                              <NavLink tag={Link} className="text-dark menu-gap" to="/favourite">Favourite products</NavLink>
                          </NavItem>
                      }
                      {
                          token &&
                          <NavItem>
                            <NavLink tag={Link} className="text-dark menu-gap" onClick={logout}>Logout</NavLink>
                          </NavItem>
                      }
                      {   !token &&
                          <NavItem>
                          <NavLink tag={Link} className="text-dark menu-gap" to="/login">Login</NavLink>
                          </NavItem>
                      }
                  </ul>
              </Collapse>
          </Navbar>
      </header>
    );
}
