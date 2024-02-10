# Grainy JS
A customizable static/noise generator using Javascript with HTML canvas. 


## createNoisyCanvas(...args )
### Arguments
> rootElement : HTMLElement 

The HTML element to attach the noisy background to. 

> opacity : number [0..1]

Opacity of the noisy canvas background

> xGranularity : number 

Default 2, the number of px per cell on the x axis. 

> yGranularity : number 

Default 3, the number of px per cell on the y axis

> colors : string[]

An array of strings representing css color values for the possible colors of the grains.

## Usage
See `index.html` for example usage
