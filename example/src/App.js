import logo from './logo.svg';
import './App.css';
import { IndicTransliterate } from 'language-transliteration';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("")
  return (
    <div className='App'>
      <h5>Transliteration demo</h5>
      <div className='transliteration-container'>
        <IndicTransliterate
          customApiURL={"https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/compute"}
          transliterationModelId={"628c73ce41dcd012c08f07e3"}
          value={value}
          renderComponent={(props) => {
            return <textarea {...props} rows={5} />
          }}
          onChangeText={(text) => setValue(text)}
          lang={"hi"}
        />
      </div>

    </div>
  );
}

export default App;
