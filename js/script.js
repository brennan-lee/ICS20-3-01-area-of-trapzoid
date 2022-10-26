// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-3-01-area-of-trapzoid/sw.js", {
    scope: "/ICS20-3-01-area-of-trapzoid/",
  })
}

function enterClicked() {
  // input
  const a_base = parseInt(document.getElementById("a-base-of-trapzoid").value)
  const b_base = parseInt(document.getElementById("b-base-of-trapzoid").value)
  const height = parseInt(document.getElementById("height-of-trapzoid").value)
  // process
  const area = height * [(a_base + b_base) / 2]

  // output
  document.getElementById("area-of-trapzoid").innerHTML =
    "the area of the trapzoid is: " + area + " cm²."
}
