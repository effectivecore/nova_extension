
//////////////////////////////////////////////////////////////////////
/// Copyright © 20NN—20NN Author/Rightholder. All rights reserved. ///
//////////////////////////////////////////////////////////////////////

'use strict';

class BaseClass {

    static someStaticProperty = 'string value';

    constructor(arg1, ...restParameter) {
        this.arg1 = arg1;
        this.argsMore = restParameter;
        this.method(1, 0.001, 'string value', true, null, [1, 2, 3], {'key': 'value'});
        this.staticMethod();
    }

    method() {
        let valueInt = 1;
        let valueIntWithDelimiters = 100_000_000;
        let valueBigInt = 0x100000000000000n;
        let valueFloat = 0.001;
        let valueStringType1 = 'string value';
        let valueStringType2 = "string value";
        let valueStringType3 = `string value with {$variable}`;
        let valueBool = true;
        let valueNull = null;
        let valueArray = [1, 2, 3,,,, 7, 8, 9];
        let valueObjectLiteral = {'key': 'value'};
        let valueObjectNew = new SomeClass;
        let [x, y, x] = valueObjectNew.destructuringAssignment();
    }

    static staticMethod() {
        document.querySelector('x-tag[data-property="value"]').forEach(function (element) {
            element.someStaticProperty = 'string element value';
            element.methodViaArrowFunction = (ObjX, ObjY) => {ObjX?.value + ObjY?.value;}
            element.method(1, 0.001, 'string value', true, null, [1, 2, 3], {'key': 'value'});
            element.addEventListener('click', function (event) {
                alert(event);
            });
        });
    }

}

class InheritedClass extends BaseClass {

    constructor() {
        super.someStaticProperty = 'string inherited value';
        super.methodViaArrowFunction = x => x++;
        super.method(1, 0.001, 'string value', true, null, [1, 2, 3], {'key': 'value'});
        super.staticMethod();
    }

}
