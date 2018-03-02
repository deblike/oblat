/**
* Report.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  migrate: 'alter',
  attributes: {
    title: 'string',
    message: 'string',
    excerpt: 'string',
    published: 'boolean',

    picture: {
      model: 'asset',
    },
    attachment: {
	model: 'asset',
    }
  }
};

