import { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from "../components/Input";
import { checkGrammar } from "../services/grammarService";
import { analyzeSpeech } from "../services/speechService";

const Home = () => {
  const [text, setText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const handleGrammarCheck = async () => {
    if (!text) return;
    const response = await checkGrammar(text);
    setCorrectedText(response.corrected_text);
  };

  const handleSpeechAnalysis = async () => {
    if (!audioFile) return;
    const response = await analyzeSpeech(audioFile);
    console.log("Speech analysis:", response);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">AI Grammar & Pronunciation Checker</h1>
        
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Grammar Check</h2>
          <Input type="text" placeholder="Enter text" value={text} onChange={(e) => setText(e.target.value)} />
          <Button onClick={handleGrammarCheck} className="mt-2">Check Grammar</Button>
          {correctedText && (
            <div className="mt-4 bg-gray-100 p-4 rounded">
              <h3 className="font-semibold">Corrected Text:</h3>
              <p>{correctedText}</p>
            </div>
          )}
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Pronunciation Analysis</h2>
          <input type="file" accept="audio/*" onChange={(e) => setAudioFile(e.target.files?.[0] || null)} />
          <Button onClick={handleSpeechAnalysis} className="mt-2">Analyze Speech</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
