const _map = require('lodash').map;

class nodeInputValidatorHelper{
    static formatErrors(validator){
        return {
            name: 'NodeInputValidatorError',
            errors: _map(validator.errors, (value, key) => {
                return {
                    message: value.message, // message
                    type: value.rule, // rule
                    path: key, // key
                    value: validator.inputs[key]
                };
            })
        };
    }
}

module.exports = nodeInputValidatorHelper;