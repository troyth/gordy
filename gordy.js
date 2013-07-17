/*
 * gordy
 * https://github.com/troyth/gordy
 *
 * Copyright (c) 2013 Troy Conrad Therrien <troyth@gmail.com>
 * Licensed under the MIT license.
 */

[
  "UI",
  "AnalogSensor",
  "DigitalSensor",
  "VideoStream",
  "AudioStream"
].forEach(function( constructor ) {
  module.exports[ constructor ] = require(
    "../lib/" + constructor.toLowerCase()
  );
});