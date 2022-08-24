import { useRef, useState } from 'react';
import Values from 'values.js'
import './App.css';


let color = new Values('hsl(204deg 100% 50% / 1)').all(10);
console.log(color);

function App() {

  const [veri, setVeri] = useState(color);
  const deger = useRef();

  const kontrol = (text) => {
    const pattern1 = /[0-9a-fA-F]{3}/;
    const pattern2 = /[0-9a-fA-F]{6}/;
    if( text.length === 4  && text[0] === "#" && pattern1.test(text.substring(1,text.length)) ) return true;

    if( text.length === 7  && text[0] === "#" && pattern2.test(text.substring(1,text.length)) ) return true;

    deger.current.style.borderColor = "red";
    setTimeout(()=>{
      deger.current.style.borderColor = "black";
    }, 1000);
  }

  return (
    <div className="App">
      <div className='inputs'>
        <span className='header'>Color Generator</span>
        <input type="text" className='giris' placeholder='#000008' ref={deger}/>
        <button className='submit' onClick={()=>{
          if(kontrol(deger.current.value)) {
            setVeri(new Values(deger.current.value).all(10));
          }else{

          }
          
        }}>Submit</button>
      </div>

      <div className='colorbucket'>
          {veri.map((item, index)=>{return <div key = {index} style={{color:index < 12 ? "black" : "white",backgroundColor:"rgb(" + item.rgb[0] + "," + item.rgb[1] + "," +  item.rgb[2] + ")", width:"calc(100% / 6)", height:"21.1vh", padding:"2rem", fontSize:"1rem"}}><p>{item.weight}%</p> <p>#{item.rgb[0].toString(16).padStart(2,0)}{item.rgb[1].toString(16).padStart(2,0)}{item.rgb[2].toString(16).padStart(2,0)}</p></div>  })}
      </div>
    </div>
  );
}

export default App;
