asteroids.js
============

Object-oriented Javascript-powered _Asteroids_ game rendered on HTML5 canvas with full ballistics modeling.

*(in progress)*

## Quick Setup
Simply clone this repository and open *index.html* in your browser. 

## Basic Controls
Use `left` and `right` to rotate the ship.
Use `down` and `up` to thrust the ship.
Use `Space` to fire bullets. 

##Technical Features
* custom `inherits` function to emulate class inheritance 
*    eg, `ships`, `bullets`, `asteroids` are children of `movingObject`
* ballistics modeling utilizes vector calculus and relative motion 
* `keymaster` library to bind key actions to listener events