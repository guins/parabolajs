/*
* Parabola JS
* Javascript helper class providing useful parabola methods
* 
* @author Stéphane Guigné (http://stephaneguigne.com)
* 
* @url https://github.com/guins/parabolajs
* @license MIT
*
* @date July 2013
*/
(function(w, undefined)
{
    'use strict';

    if( w.Parabola ) return;

    /*
    * Parabola Class
    *
    * @coefficient (object) - Object containing the 3 Parabola coefficients(a, b, c).
    *
    * @return Parabola Instance
    */
    w.Parabola = function(coefficient){

        var coeff = coefficient;

        /**
         * Get Point coordinates on the parabola at x value on the abscissa
         * 
         * @param  {int} x - Point position on the abscissa
         * 
         * @return {object} - Point coordinates(x, y) on the parabola
         */
        function getCoordinates(x){
            return {
                x : x,
                y : coeff.a*Math.pow(x,2) + coeff.b*x + coeff.c
            };
        }

        /**
         * Get Quadratic Point between two points on the parabola
         * 
         * @param  {object} p1 - first Point(x,y) coordinates
         * @param  {object} p2 - second Point(x,y) coordinates
         * 
         * @return {object} - Quadratic Point coordinates(x, y)
         */
        function getQuadraticPoint(p1, p2)
        {
            var x1 = p1.x,
                x2 = p2.x;

            return {
                x : (x1+x2)/2,
                y : (coeff.a*Math.pow(x1,2) + coeff.b*x1 + coeff.c) + ((coeff.a*2*x1 + coeff.b) * ((x1+x2)/2))
            };
        }

        /**
         * Get Coefficient (Getter)
         * 
         * @return {object} - Parabola cofficients(a, b, c)
         */
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