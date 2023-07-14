document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('x-tag[data-property="value"]').forEach(function(c_element){
        var c_value_int = Math.floor(0) + 1;
        var c_value_float = 0.001;
        var c_value_string = 'string value';
        var c_value_bool = true;
        var c_value_null = null;
        var c_value_array = [];
        var c_element = document.createElement('x-element');
        c_element.innerText = c_value_string;
        c_element.setAttribute('data-new-attribute', 'some attribute value');
        c_element.addEventListener('click', function(event){
            alert(c_element);
        });
    });

});