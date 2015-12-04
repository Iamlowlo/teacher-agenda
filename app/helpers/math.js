import Ember from 'ember';

export function math(data) {
    let result;
    let operand1=data[0];
    let operator=data[1];
    let operand2=data[2];
    switch (operator) {
        case '+':
            result = operand1 + operand2;
        break;
        case '-':
            result = operand1 - operand2;
        break;
        case '*':
            result = operand1 * operand2;
        break;
        case '/':
            result = operand1 / operand2;
        break;
    }
    return result;
}
export default Ember.Helper.helper(math);