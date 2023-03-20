import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";

export default function NavMenu() {
    const [collapsed, setCollapsed] = useState(true);

    function toggleNavbar() {
        setCollapsed(false);
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
                      <NavItem>
                          <NavLink tag={Link} className="text-dark " to="/favourites">Favourite products</NavLink>
                      </NavItem>
                  </ul>
              </Collapse>
          </Navbar>
      </header>
    );
}
