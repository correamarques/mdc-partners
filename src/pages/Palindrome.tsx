import { Button } from "reactstrap";
import { NavigationBar } from "../components/shared/NavigationBar";
import { useState } from "react";
import Header from "../components/shared/Header";

export default function Palindrome() {
  const [word, setWord] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleOnClickIsPalindrome = () => {
    const chars = word.split("");
    const reverse = [...chars.reverse()];
    const isPalindrome = JSON.stringify(chars) === JSON.stringify(reverse);
    setResult(isPalindrome ? "yes" : "no");
  };

  const handleWordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
    setResult("");
  };

  return (
    <>
      <NavigationBar />
      <Header
        title="Palindrome"
        description="Create a function that checks whether a word is a palindrome (that is, whether it reads the same backwards and forwards). The program must ask the user for a word and inform whether or not it is a palindrome."
      />
      <div className="flex-container">
        <input
          type="text"
          data-testid="palindrome"
          placeholder="Type the word of phrase here"
          style={{ width: 800 }}
          defaultValue={word}
          onChange={handleWordChanged}
        />
        <Button
          color="secondary"
          data-testid="button"
          onClick={handleOnClickIsPalindrome}
        >
          Is palindrome?
        </Button>
        <input
          type="text"
          data-testid="result"
          defaultValue={result}
          className="result"
          disabled
        />
      </div>
    </>
  );
}
