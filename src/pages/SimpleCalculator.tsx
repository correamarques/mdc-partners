import { Row, Col } from "reactstrap";
import { Header } from "../components/shared/Header";
import { useState } from "react";

export function SimpleCalculator() {
  const [numberOne, setNumberOne] = useState<number>();
  const [numberTwo, setNumberTwo] = useState<number>();
  const [operator, setOperator] = useState<string>();

  const handleOperatorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const allowedOperators = ["+", "-", "*", "/"];
    setOperator(allowedOperators.includes(value) ? value : "");
  };

  return (
    <>
      <Header />
      <h1 data-testid="title" className="text-center">
        Simple Calculator
      </h1>
      <p data-testid="description" className="text-center">
        Create a calculator that takes two numbers and an operator (+, -, *, /)
        and returns the result of the operation.
      </p>
      <Row style={{ backgroundColor: "#f0f" }}>
        <Col
          md={2}
          style={{
            paddingLeft: 0,
          }}
        >
          <input
            type="number"
            name="number-one"
            id="number-one"
            data-testid="number-one"
            placeholder="Type number here"
            defaultValue={numberOne}
            onChange={(e) => setNumberOne(Number(e.target.value))}
            style={{ width: 160 }}
          />
        </Col>
        <Col md={3}>
          <input
            type="text"
            name="operator"
            id="operator"
            data-testid="operator"
            maxLength={1}
            defaultValue={operator}
            value={operator}
            onChange={handleOperatorChange}
            placeholder="Operators (+, -, *, /)"
          />
        </Col>
        <Col md={3}>
          <input
            type="number"
            name="number-two"
            id="number-two"
            data-testid="number-two"
            placeholder="Type another number"
            defaultValue={numberTwo}
            onChange={(e) => setNumberTwo(Number(e.target.value))}
          />
        </Col>
        <Col md={3}>
          <button type="button" data-testid="button">
            =
          </button>
        </Col>
      </Row>
    </>
  );
}
