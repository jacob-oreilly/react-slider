import './App.css';
import { Slider } from './lib/components';
const sliderData = [
  { img: "", text: "slide 1", color: "" },
  { img: "", text: "slide 2", color: "" },
  { img: "", text: "slide 3", color: "" },
];
function App() {
  return (
    <div className="App">
      <Slider data={sliderData} height={200} width={300} showBullets={true} showControls={true} />
    </div>
  );
}

export default App;
