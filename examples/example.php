<?php

####################
### some comment ###
####################

namespace myNamespace;

const value_int = 0;
const value_float = 0.001;
const value_string = 'string value';
const value_bool = true;
const value_null = null;
const value_array = [];

require_once('someFile');
some_custom_function(0, 0.001, 'string value', true, null, []);
some_class::some_static_method(0, 0.001, 'string value', true, null, []);

$value = new \stdClass;
if ($value instanceof some_class && $value->some_method()) {
    print $value->render().' some string';
}
