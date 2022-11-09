'use strict';


const { onRepeat } = require('./challenge02.js');

describe('onRepeat Word', () => {
    it('should return the first repeat word', () => {
        expect(onRepeat("I am learning programming at ASAC")).toStrictEqual("No Repetition");
        expect(onRepeat("ASAC is a department at LTUC. ASAC teaches programming in LTUC.")).toStrictEqual("ASAC");
    });
});