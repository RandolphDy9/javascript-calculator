function App() {
  const [text, setText] = React.useState('');

  React.useEffect(() => {

  }, []);

  return (
    <div id="calculator">
      <h4 className="text-center">Javascript Calculator</h4>
      <h6 className="text-center mb-4">Made by Randolph Dy</h6>
      <div className="row">
        <div id="display" class="col-12"></div>
        <div id="clear" class="pad col-9">AC</div>
        <div id="multiply" class="pad col-3 operation">x</div>
        <div id="seven" class="pad col-3">7</div>
        <div id="eight" class="pad col-3">8</div>
        <div id="nine" class="pad col-3">9</div>
        <div id="subtract" class="pad col-3 operation">-</div>
        <div id="four" class="pad col-3">4</div>
        <div id="five" class="pad col-3">5</div>
        <div id="six" class="pad col-3">6</div>
        <div id="add" class="pad col-3 operation">+</div>
        <div id="one" class="pad col-3">1</div>
        <div id="two" class="pad col-3">2</div>
        <div id="three" class="pad col-3">3</div>
        <div id="divide" class="pad col-3 operation">/</div>
        <div id="zero" class="pad col-3">0</div>
        <div id="decimal" class="pad col-3">.</div>
        <div id="equals" class="pad col-6">=</div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);