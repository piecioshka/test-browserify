(function () {
    'use strict';

    /**
     * # Definition of Application class.
     *
     * @constructor
     */
    function Application() {
        this.initialize();
    }

    /**
     * # initialize
     *
     * Constructor method.
     */
    Application.prototype.initialize = function () {
        console.log('Hello world!');
    };

    // Exports main class to global context.
    module.exports = Application;

}());
