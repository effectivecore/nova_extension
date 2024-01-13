document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('x-tag[data-property="value"]').forEach(function (element) {
        let valueInt = 1;
        let valueFloat = 0.001;
        let valueString = 'string value';
        let valueBool = true;
        let valueNull = null;
        let valueArray = [1, 2, 3];
        let valueObject = {'key': 'value'};
        let element = document.createElement('x-element');
        let [x, y, x] = Math.getXandYandZ();
        element.attributeText = 'some text';
        element.methood(1, 0.001, 'string value', true, null, [1, 2, 3], {'key': 'value'});
        element.customMethod = (x, y) => x + y;
        element.addEventListener('click', function (event) {
            alert(event);
        });
    });

});