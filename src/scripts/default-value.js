 module.exports = function(value) {
     return isNaN(Number(value)) ? 0 : Number(value);
 };
