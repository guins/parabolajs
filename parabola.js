(function(w, undefined)
{
    'use strict';

    if( w.Parabola ) return;

    w.Parabola = function(coefficient){

        var coeff = coefficient;

        function getCoordinates(x){
            return {
                x : x,
                y : coeff.a*Math.pow(x,2) + coeff.b*x + coeff.c
            };
        }

        function getQuadraticPoint(p1, p2)
        {
            var x1 = p1.x,
                x2 = p2.x;

            return {
                x : (x1+x2)/2,
                y : (coeff.a*Math.pow(x1,2) + coeff.b*x1 + coeff.c) + ((coeff.a*2*x1 + coeff.b) * ((x1+x2)/2))
            };
        }

        function getCoefficient(){
            return coeff;
        }

        return {
            getCoefficient    : getCoefficient,
            getCoordinates    : getCoordinates,
            getQuadraticPoint : getQuadraticPoint
        };
    };

})(window);