import React, { useState } from 'react';
import './Translator.css';

const languageMap = {
  'English': 'en',
  'Hindi': 'hi',
};

const Translator = () => {
    const [input, setInput] = useState('');
    const [translated, setTranslated] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('English');
    const [targetLanguage, setTargetLanguage] = useState('Spanish');
    const [translationError, setTranslationError] = useState(null);

    const handleTranslate = async () => {
      if (!input) {
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: input,
            source_lang: languageMap[sourceLanguage],
            target_lang: languageMap[targetLanguage]
          })
        });

        const data = await response.json();

        if (data.error) {
          setTranslationError(data.error);
          return;
        }

        setTranslated(data.translated_text);
      } catch (error) {
        console.error('Translation error:', error);
        setTranslationError('An error occurred during translation.');
      }
    };

    return (
      <div className="translator-container">
        <h2 className="translator-title">Translator</h2>
        <p className="translator-instructions">Select the languages and enter text to translate:</p>
        <select
          className="translator-select"
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
        >
          {Object.keys(languageMap).map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
        <select
          className="translator-select"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          {Object.keys(languageMap).map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
        <input
          className="translator-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to translate"
        />
        <button className="translator-button" onClick={handleTranslate}>
          Translate
        </button>
        {translated && <p className="confirmation-message">Translation: {translated}</p>}
        {translationError && <p className="error-message">{translationError}</p>}
      </div>
    );
};

export default Translator;
