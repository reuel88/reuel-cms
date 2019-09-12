'use strict';

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('accountingTypes', [
            {name: 'quickbooks self-employed', createdAt: new Date(), updatedAt: new Date()},
            {name: 'myob banklink', createdAt: new Date(), updatedAt: new Date()},
            {name: 'invoice2go', createdAt: new Date(), updatedAt: new Date()},
            {name: 'cashflow manager', createdAt: new Date(), updatedAt: new Date()},
            {name: 'zoho books', createdAt: new Date(), updatedAt: new Date()},
            {name: 'cashmanager ', createdAt: new Date(), updatedAt: new Date()},
            {name: 'wave accounting', createdAt: new Date(), updatedAt: new Date()},
            {name: 'rounded', createdAt: new Date(), updatedAt: new Date()},
            {name: 'quickbooks online', createdAt: new Date(), updatedAt: new Date()},
            {name: 'honcho', createdAt: new Date(), updatedAt: new Date()},
            {name: 'kashbooks', createdAt: new Date(), updatedAt: new Date()},
            {name: 'myob essentials', createdAt: new Date(), updatedAt: new Date()},
            {name: 'reckon accounts', createdAt: new Date(), updatedAt: new Date()},
            {name: 'sage accounting', createdAt: new Date(), updatedAt: new Date()},
            {name: 'cashbook complete', createdAt: new Date(), updatedAt: new Date()},
            {name: 'saasu', createdAt: new Date(), updatedAt: new Date()},
            {name: 'reckon one', createdAt: new Date(), updatedAt: new Date()},
            {name: 'myob account right', createdAt: new Date(), updatedAt: new Date()},
            {name: 'moneyworks', createdAt: new Date(), updatedAt: new Date()},
            {name: 'freshbooks', createdAt: new Date(), updatedAt: new Date()},
            {name: 'xero', createdAt: new Date(), updatedAt: new Date()},
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('accountingTypes', null, {});
    }
};
