import { useRef } from 'react';

function App() {
  const pxInput = useRef();
  const remInput = useRef();

  const handlePxChange = (value) => {
    pxInput.current.value = value;
    if (value === '') {
      remInput.current.value = '';
      return;
    }

    const numberValue = parseInt(value);
    if (numberValue === 0) {
      remInput.current.value = '0';
    } else if (numberValue > 0) {
      remInput.current.value = numberValue / 16;
    }
  }

  const handleRemChange = (value) => {
    remInput.current.value = value;
    if (value === '') {
      pxInput.current.value = '';
      return;
    }

    const numberValue = parseInt(value);
    if (numberValue === 0) {
      pxInput.current.value = '0';
    } else if (numberValue > 0) {
      pxInput.current.value = numberValue * 16;
    }
  }

  return (
    <>
      <div className='main-container'>
        <div>
          <h1>PX ↔︎ REM conversion tables</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="form-container">
          <div className='px-container'>
            <h1>Pixels</h1>
            <div className='px-alt-container'>
              <input type="text" ref={pxInput} defaultValue={''} onChange={(e) => handlePxChange(e.target.value)} />
              <p className='p-text'>px</p>
            </div>
          </div>
          <div className='rem-container'>
            <h1>REM</h1>
            <div className='rem-alt-container'>
              <input type="text" ref={remInput} defaultValue={''} onChange={(e) => handleRemChange(e.target.value)} />
              <p className='rem-text'>rem</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;


