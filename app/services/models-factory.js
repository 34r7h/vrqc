(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name services.factory:Models
   *
   * @description
   *
   */
  angular
    .module('services')
    .factory('Models', Models);

  function Models() {
    var ModelsBase = {};
    ModelsBase.someValue = 'Models';

    ModelsBase.Cities = {
      quebecCity: {
        activities: [
          {name:'', details:''}
        ],
        attractions: [
          {name:'', details:''}
        ],
        entertainment: [
          {name:'', details:''}
        ]
      },
      victoria: {
        activities: {},
        attractions: {},
        entertainment: []
      }
    };
    ModelsBase.Payments = {
      types:[],
      address:{}
    };
    ModelsBase.Properties = {
      description:{
        type: {name:'', floor: 1, sqft: 1},
        details: '',
        sleeps: 1,
        rooms: {
          bedrooms: [
            {name: '', sleeps: 1, details:''}
          ],
          bath: 1,
          livingroom: {
            sleeps: 1,
            details:''
          }
        },
        amenities: {},
        themes: [],
        suitability: [],
        accessibility: [
          {name:'', details:''}
        ],
        localBusiness: [
          {name:'', details: ''}
        ],
        services: [
          {name:'', details:''}
        ],
        meals: ''
      },
      restrictions: [
        {name:'', details:''}
      ],
      availability:{},
      address:{},
      reviews:[
        {name: '',
          location:'',
          rating: 5,
          headline: '',
          body: '',
          recommended: []}
      ],
      media:{
        images:[
          {url:'', alt:''}
        ],
        video:[
          {url:'', description:''}
        ]
      },
      rates:{
        minimumStay: 1,
        seasonal: {},
        specials: {}
      }
    };
    ModelsBase.Customers = [
      {id: '', name: '', reviews: '', payment: {}, history:[
        {dates: 1, location: '', review: {}}
      ]}
    ];

    ModelsBase.someMethod = function someMethod() {
      return 'Models';
    };
    return ModelsBase;
  }

})();
