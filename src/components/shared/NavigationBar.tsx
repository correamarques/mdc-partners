import { Nav, NavItem, NavLink } from "reactstrap";

export function NavigationBar() {
  return (
    <header>
      <Nav justified pills>
        <NavItem>
          <NavLink
            href="/simple-calculator"
            data-testid="nav-simple-calculator"
          >
            Simple Calculator
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/prime-numbers" data-testid="nav-prime-numbers">
            Prime Numbers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/factorial" data-testid="nav-factorial">
            Factorial
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/palindrome" data-testid="nav-palindrome">
            Palindrome
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/table" data-testid="nav-table">
            Table
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/vowel-counter" data-testid="nav-vowel-counter">
            Vowel Counter
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/grade-average" data-testid="nav-grade-average">
            Grade Average
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/interest-calculation"
            data-testid="nav-interest-calculation"
          >
            Interest Calculation
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  );
}
