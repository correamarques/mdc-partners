import { useState } from "react";
import { NavigationBar } from "../components/shared/NavigationBar";
import Header from "../components/shared/Header";

export default function VowelCounter() {
  const [sentence, setSentence] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleOnChangeSentence = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSentence(event.target.value);
    setResult("");
  };

  const handleOnClickHowManyVowels = () => {
    const vowels = sentence.match(/[aeiou]/gi);
    setResult(`${vowels?.length ?? 0} vowels`);
  };

  return (
    <>
      <NavigationBar />
      <Header
        title="Vowel Counter"
        description="Create a function that counts the number of vowels in a string. The program should ask the user for a sentence and display how many vowels it has."
      />
      <div className="flex-container">
        <input
          type="text"
          data-testid="sentence"
          placeholder="Type the sentence here"
          defaultValue={sentence}
          onChange={handleOnChangeSentence}
          style={{ width: 520 }}
        />
        <button
          type="button"
          data-testid="button"
          onClick={handleOnClickHowManyVowels}
          style={{ width: "200px" }}
        >
          How many vowels?
        </button>
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
