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
    this._screen = document.querySelector('.calculator__screen');
    this._a = '';
    this._b = '';
  }

  _action(type) {}

  _setValue(value, order) {
    if (order === 1) {
      this._a = value;
    } else if (order === 2) {
      this._b = value;
    }
  }

  _createOperands(length = 10) {
    return Array.from({ length }, (a, b) => b)
  }

  _createWrapper(elements, className) {
    return `<div class="calculator__${ className }">${ elements.join('') }</div>`;
  }

  _createButtons() {
    const operationsButtons = this._operations.map(({ key, text }) => {
      return this._createButton({ key, text });
    });

    const operandsButtons = this._operands.map(item => {
      return this._createButton({ key: null, text: item });
    });

    const operationsWrapper = this._createWrapper(operationsButtons, 'operations');
    const operandsWrapper = this._createWrapper(operandsButtons, 'operands');

    return [...operationsWrapper, ...operandsWrapper];
  }

  _createButton({ key, text }) {
    if (key && text) {
      return `<button class="calculator__button" data-action="${ key }">${ text }</button>`
    } else {
      return `<button class="calculator__button" data-value="${ text }">${ text }</button>`
    }
  }

  _result() {
    
  }

  _onClick(e) {
    const { target } = e;
    const btnAction = target.closest('[data-action]');
    const btnValue = target.closest('[data-value]');

    if (btnAction) {
      const type = btnAction.dataset;
      console.log(type)
      if(type === '=') {
        this._result()
      }
    }

    if (btnValue) {
      const value = btnValue.dataset.value;
      if(!this._a) {
        this._setValue(value, 1);
      } else {
        this._setValue(value, 2);
      }
    }

    if (btnAction || btnValue) {
      target.classList.add('is-active');

      setTimeout(() => {
        target.classList.remove('is-active');
      }, 400)
    }
  }

  _addEvents() {
    document.addEventListener('click', this._onClick.bind(this));
  }

  init(props) {
    this._buttons = document.querySelector(props.buttons);
    this._buttons.insertAdjacentHTML('afterbegin', this._createButtons().join(''));
    this._screen.textContent = 0;
    this._addEvents();
  }
}

const calc = new Calculator();

console.log(calc);

calc.init({ buttons: '.calculator__buttons' });




