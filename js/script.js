// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

function enterClicked() {
  // input
  const a_base = parseInt(document.getElementById("base-of-trapzoid").value)
  const b_height = parseInt(document.getElementById("height-of-trapzoid").value)

  // process
  const area =  [( a + b ) / 2 ]

  // output
  document.getElementById("area-of-trapzoid").innerHTML =
    "the area of the trapzoid is: " + area + " cm²."
}
