'use strict';

//Initialize vars
let data = [];
let bars = null;

d3.json('/load_data').then(d => {

  //redefine
  data = d.users;
  console.log(d)

  //Print user count
  d3.select('#users').append('span').text(data.length);

  //Instantiate
  bars = new Bars(data, 'vis1');

}).catch(err => console.log(err));
