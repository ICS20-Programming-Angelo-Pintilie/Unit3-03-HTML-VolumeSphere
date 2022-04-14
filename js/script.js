// Copyright (c) 2022 Angelo All rights reserved
//
// Created by: Angelo Pintilie
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the volume of a sphere.
 */
function calcVolume () {
  // get user input
  let side_a = parseFloat(document.getElementById("side-a").value)


  // calculate the volume
  let volume = (4/3) * Math.PI * (side_a ** 3)

  // display the results
  document.getElementById("volume").innerHTML = "The volume of the sphere is " + volume.toFixed(2) + "m³"
}