function App() {
  const [text, setText] = React.useState('');

  React.useEffect(() => {

  }, []);

  const display = (input) => {
    setText(prev => prev + input);
  }

  const clearAll = () => {
    setText('');
  }

  const calculate = () => {
    console.log(text);
    setText(evaluateExpression(text));
  }

  function evaluateExpression(expression) {
    var filtered = expression.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');
    return eval(filtered);
  }

  return (
    <div id="calculator">
      <h4 className="text-center">Javascript Calculator</h4>
      <h6 className="text-center mb-4">Made by Randolph Dy</h6>
      <div className="row">
        <input type="text" id="display" value={text} placeholder="0" className="col-12" disabled />
        <div id="clear" onClick={clearAll} className="pad col-9">AC</div>
        <div id="multiply" onClick={() => display("*")} className="pad col-3 operation">x</div>
        <div id="seven" onClick={() => display("7")} className="pad col-3">7</div>
        <div id="eight" onClick={() => display("8")} className="pad col-3">8</div>
        <div id="nine" onClick={() => display("9")} className="pad col-3">9</div>
        <div id="subtract" onClick={() => display("-")} className="pad col-3 operation">-</div>
        <div id="four" onClick={() => display("4")} className="pad col-3">4</div>
        <div id="five" onClick={() => display("5")} className="pad col-3">5</div>
        <div id="six" onClick={() => display("6")} className="pad col-3">6</div>
        <div id="add" onClick={() => display("+")} className="pad col-3 operation">+</div>
        <div id="one" onClick={() => display("1")} className="pad col-3">1</div>
        <div id="two" onClick={() => display("2")} className="pad col-3">2</div>
        <div id="three" onClick={() => display("3")} className="pad col-3">3</div>
        <div id="divide" onClick={() => display("/")} className="pad col-3 operation">/</div>
        <div id="zero" onClick={() => display("0")} className="pad col-3">0</div>
        <div id="decimal" onClick={() => display(".")} className="pad col-3">.</div>
        <div id="equals" onClick={calculate} className="pad col-6">=</div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);