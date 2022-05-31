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
        <h1>PX ↔︎ REM conversion tables</h1>
        <form onSubmit={(e) => e.preventDefault()} className="form-container">
          <div className='px-container'>
            <div>
              <h1>Pixels</h1>
              <input type="text" ref={pxInput} defaultValue={''} onChange={(e) => handlePxChange(e.target.value)} />
            </div>
          </div>
          <div className='rem-container'>
            <h1>REM</h1>
            <input type="text" ref={remInput} defaultValue={''} onChange={(e) => handleRemChange(e.target.value)} />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;


{/* <div className='text'>
  <h2>PX ↔︎ REM conversion tables</h2>
  <div className="conversion-table">
    <table>
      <tbody>
        <tr>
          <th>Pixels</th>
          <th>REM</th>
        </tr>
        <tr>
          <td>1<abbr>px</abbr></td>
          <td>0.06<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>2<abbr>px</abbr></td>
          <td>0.13<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>3<abbr>px</abbr></td>
          <td>0.19<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>4<abbr>px</abbr></td>
          <td>0.3<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>5<abbr>px</abbr></td>
          <td>0.3<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>6<abbr>px</abbr></td>
          <td>0.4<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>8<abbr>px</abbr></td>
          <td>0.5<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>10<abbr>px</abbr></td>
          <td>0.6<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>12<abbr>px</abbr></td>
          <td>0.8<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>14<abbr>px</abbr></td>
          <td>0.9<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>15<abbr>px</abbr></td>
          <td>0.9<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>16<abbr>px</abbr></td>
          <td>1<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>18<abbr>px</abbr></td>
          <td>1.1<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>20<abbr>px</abbr></td>
          <td>1.3<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>24<abbr>px</abbr></td>
          <td>1.5<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>25<abbr>px</abbr></td>
          <td>1.6<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>28<abbr>px</abbr></td>
          <td>1.8<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>32<abbr>px</abbr></td>
          <td>2<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>36<abbr>px</abbr></td>
          <td>2<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>40<abbr>px</abbr></td>
          <td>3<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>44<abbr>px</abbr></td>
          <td>3<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>48<abbr>px</abbr></td>
          <td>3<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>50<abbr>px</abbr></td>
          <td>3<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>56<abbr>px</abbr></td>
          <td>4<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>64<abbr>px</abbr></td>
          <td>4<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>72<abbr>px</abbr></td>
          <td>5<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>75<abbr>px</abbr></td>
          <td>5<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>80<abbr>px</abbr></td>
          <td>5<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>90<abbr>px</abbr></td>
          <td>6<abbr>rem</abbr></td>
        </tr>
        <tr>
          <td>100<abbr>px</abbr></td>
          <td>6<abbr>rem</abbr></td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <th>REM</th>
          <th>Pixels</th>
        </tr>
        <tr>
          <td>0.01<abbr>rem</abbr></td>
          <td>0.16<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>0.03<abbr>rem</abbr></td>
          <td>0.5<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>0.05<abbr>rem</abbr></td>
          <td>0.8<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>0.08<abbr>rem</abbr></td>
          <td>1.3<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>0.1<abbr>rem</abbr></td>
          <td>1.6<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>0.15<abbr>rem</abbr></td>
          <td>2<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>0.2<abbr>rem</abbr></td>
          <td>3<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>0.5<abbr>rem</abbr></td>
          <td>8<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>1<abbr>rem</abbr></td>
          <td>16<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>2<abbr>rem</abbr></td>
          <td>32<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>3<abbr>rem</abbr></td>
          <td>48<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>4<abbr>rem</abbr></td>
          <td>64<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>5<abbr>rem</abbr></td>
          <td>80<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>6<abbr>rem</abbr></td>
          <td>96<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>8<abbr>rem</abbr></td>
          <td>128<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>10<abbr>rem</abbr></td>
          <td>160<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>15<abbr>rem</abbr></td>
          <td>240<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>20<abbr>rem</abbr></td>
          <td>320<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>30<abbr>rem</abbr></td>
          <td>480<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>40<abbr>rem</abbr></td>
          <td>640<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>50<abbr>rem</abbr></td>
          <td>800<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>60<abbr>rem</abbr></td>
          <td>960<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>80<abbr>rem</abbr></td>
          <td>1280<abbr>px</abbr></td>
        </tr>
        <tr>
          <td>100<abbr>rem</abbr></td>
          <td>1600<abbr>px</abbr></td>
        </tr>
      </tbody>
    </table>
  </div>
</div> */}