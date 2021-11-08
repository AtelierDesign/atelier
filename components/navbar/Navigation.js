import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { noRefCheck } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  NavbarText,
} from 'reactstrap'

export default function Navigation() {
  return (
    <header>
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </header>
  )
}
