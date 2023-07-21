'use strict';

const Benchmark = require('benchmark');

Benchmark.options.maxTime = 0;
Benchmark.options.minSamples = 10;

module.exports = () => {
  const suite = new Benchmark.Suite();

  return suite
    .on('cycle', event => {
      console.log(String(event.target));
    });
};
