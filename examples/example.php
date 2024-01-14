<?php

######################################################################
### Copyright © 20NN—20NN Author/Rightholder. All rights reserved. ###
######################################################################

namespace Vendor\Model;

require_once('some/file');

use OtherVendor\Model as OtherClass;
use stdClass;

abstract class SomeClass extends BaseClass implements BaseInterface {

    const CONST_INT    = 0;
    const CONST_FLOAT  = 0.001;
    const CONST_STRING = 'string value';
    const CONST_BOOL   = true;
    const CONST_NULL   = null;
    const CONST_ARRAY  = ['key' => 'value'];

    final public static $attributeInt     = 0;
    final public static $attributeFloat   = 0.001;
    final public static $attributeString  = 'string value';
    final public static $attributeBool    = true;
    final public static $attributeNull    = null;
    final public static $attributeArray   = ['key' => 'value'];

    final public static function __construct($arg1 = self::CONST_INT, ...) {
        OtherClass::someStaticMethod(0, 0.001, 'string value', true, null, ['key' => 'value']);
        someFunction(0, 0.001, 'string value', true, null, ['key' => 'value']);
        parent::someStaticMethod();
        static::someStaticMethod();
        $value = new stdClass;
        if ($value instanceof OtherClass) {
            if ($value->someAttribute && $value->someMethod()) {
                return $value::someStaticMethod();
            }
        }
    }

}