/**
 * Promotion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      title:{
        type : 'string'
      },
      id:{
         type: 'integer',
         primaryKey: true,
         autoIncrement: true
      },
      category: {
         type: 'string',
         enum: ['Good', 'Better'],
         defaultsTo: 'Good'
    },
      watchedCount:{
         type: 'integer',
         defaultsTo : 0
      }
  }
};

