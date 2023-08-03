import "./NavigationBar.css";

export function NavigationBar() {
  return (
    <header style={{ marginBottom: "20px" }}>
      <nav className="navMenu">
        <a href="/simple-calculator" data-testid="nav-simple-calculator">
          Simple Calculator
        </a>
        <a href="/prime-numbers" data-testid="nav-prime-numbers">
          Prime Numbers
        </a>
        <a href="/factorial" data-testid="nav-factorial">
          Factorial
        </a>
        <a href="/palindrome" data-testid="nav-palindrome">
          Palindrome
        </a>
        <a href="/table" data-testid="nav-table">
          Table
        </a>
        <a href="/vowel-counter" data-testid="nav-vowel-counter">
          Vowel Counter
        </a>
        <a href="/grade-average" data-testid="nav-grade-average">
          Grade Average
        </a>
        <a href="/interest-calculation" data-testid="nav-interest-calculation">
          Interest Calculation
        </a>
      </nav>
    </header>
  );
}
