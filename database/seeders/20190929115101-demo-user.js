'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
  {
    firstName: 'Sharpe',
    lastName: 'Rodgers',
    email: 'dennisnicholson@realysis.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Mcknight',
    lastName: 'Day',
    email: 'amberwilson@isoternia.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Puckett',
    lastName: 'Bauer',
    email: 'vaughancleveland@escenta.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Carey',
    lastName: 'Gallegos',
    email: 'alfordcarney@melbacor.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Mayra',
    lastName: 'May',
    email: 'sotofletcher@speedbolt.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'David',
    lastName: 'Macdonald',
    email: 'gallegoswashington@barkarama.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Gibbs',
    lastName: 'Talley',
    email: 'wongvaughan@musaphics.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Joanne',
    lastName: 'Williams',
    email: 'carlylawrence@isotrack.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Penny',
    lastName: 'Ashley',
    email: 'velasquezstanton@extremo.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Shana',
    lastName: 'Watkins',
    email: 'tinadyer@urbanshee.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Mann',
    lastName: 'Stone',
    email: 'cameronyork@exosis.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Terra',
    lastName: 'Gordon',
    email: 'mcbridemerritt@techmania.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Grant',
    lastName: 'Hull',
    email: 'gracielamerrill@nimon.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Billie',
    lastName: 'Hart',
    email: 'sampsonwest@zboo.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Jacobs',
    lastName: 'Good',
    email: 'santosferguson@iplax.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Yates',
    lastName: 'Wilcox',
    email: 'mendezcastaneda@futurize.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Terrell',
    lastName: 'Montgomery',
    email: 'reedparks@isbol.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Ford',
    lastName: 'Lara',
    email: 'candiceramos@ersum.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Hays',
    lastName: 'Winters',
    email: 'leilavillarreal@sultrax.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Larsen',
    lastName: 'Carver',
    email: 'sharpbarrett@satiance.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Dixie',
    lastName: 'Stevens',
    email: 'randallmacias@nikuda.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Deann',
    lastName: 'Bradshaw',
    email: 'socorrorobbins@aeora.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Maryanne',
    lastName: 'Mcgee',
    email: 'reevesglass@acium.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Matthews',
    lastName: 'Adkins',
    email: 'elisabethcasey@zomboid.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Josefa',
    lastName: 'Key',
    email: 'margomcmillan@isologica.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Garrison',
    lastName: 'Dickson',
    email: 'ortegabarker@exiand.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Walton',
    lastName: 'Rowe',
    email: 'allysonleon@isologia.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Shannon',
    lastName: 'Lopez',
    email: 'martinezparrish@telequiet.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Lea',
    lastName: 'Black',
    email: 'barkerjordan@medmex.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Marlene',
    lastName: 'Leach',
    email: 'genevieveguzman@gynko.com',
    createdAt: new Date(),
    updatedAt: new Date()
  }
], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
