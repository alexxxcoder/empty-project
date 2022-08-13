class Calculator {
  constructor() {
    this._operations = [
      {
        key: 'div',
        text: '/'
      },
      {
        key: 'multiply',
        text: '*'
      },
      {
        key: 'add',
        text: '+'
      },
      {
        key: 'subtraction',
        text: '-'
      },
      {
        key: 'result',
        text: '='
      },
    ];
    this._operands = this._createOperands();
  }

  _createOperands(length = 10) {
    return Array.from({ length }, (a, b) => b)
  }

  _createButtons() {
    const operationsButtons = this._operations.map(({ key, text }) => {
      return this._createButton({ key, text });
    });

    const operandsButtons = this._operands.map(item => {
      return this._createButton({ key: null, text: item });
    });

    return [...operandsButtons, ...operationsButtons];
  }

  _createButton({ key, text }) {
    if (key && text) {
      return `<button class="calculator__button" data-action="${ key }">${ text }</button>`
    } else {
      return `<button class="calculator__button" data-value="${ text }">${ text }</button>`
    }
  }

  init(props) {
    this._buttons = document.querySelector(props.buttons);
    this._buttons.insertAdjacentHTML('afterbegin', this._createButtons().join(''))
  }
}

const calc = new Calculator();

calc.init({
  buttons: '.calculator__buttons',
});


//console.log(calc._createButtons());



