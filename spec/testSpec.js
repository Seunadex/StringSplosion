"use strict";
const StringSplosion = require('../app/library.js');

describe(" String splosion", function(){

    it("should manipulate the string", function(){
        let stringSplosion = new StringSplosion("Code");
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
    });

    it("should manipulate the string not return the expected result, 1.", function(){
        let stringSplosion = new StringSplosion("Code");
        let functionString = stringSplosion.manipulate.toString();
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
        expect(functionString.indexOf('CCoCodCode')).toBe(-1);
    });

    it("should manipulate a second time", function(){
        let stringSplosion = new StringSplosion("abc");
        expect( stringSplosion.manipulate()).toEqual("aababc");
    });

    it("should manipulate a third time", function(){
        let stringSplosion = new StringSplosion("andela");
        let functionString = stringSplosion.manipulate.toString();
        expect(stringSplosion.manipulate()).toEqual("aanandandeandelandela");
    });

     it("should manipulate the string not return the expected result, 2.", function(){
        let stringSplosion = new StringSplosion("andela");
        let functionString = stringSplosion.manipulate.toString();
        expect( stringSplosion.manipulate()).toEqual("aanandandeandelandela");
        expect(functionString.indexOf('aanandandeandelandela')).toBe(-1);
    });
});