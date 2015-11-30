# object-extract

Extract object key-value pairs as variables to a specified context.

This will assign each property of the specified object as a variable in the specified context.

When assigning, the property key is used for the variable name, and the property value is used for the variable value.

If context is not specified, variables will be assigned to the global scope.

```
npm install object-extract
```

[![Build Status](https://travis-ci.org/tyxla/object-extract.svg)](https://travis-ci.org/tyxla/object-extract)

## Syntax

``` js
objectExtract(objectToExtract, context);
```

#### objectToExtract

This is the object that you wish to extract to the specified context.

#### context

This is the context you wish to extract the object to.

## Usage

Pass the object you want to extract, and the context object you want it to get extracted to.

``` js
var obj = {
	test: 123
};

objectExtract({
	example: 456
}, obj);

console.log(obj);
/*
{
	test: 123,
	example: 456
}
*/

```

In case you want to extract the object in the global scope, omit the `context` parameter.

``` js
objectExtract({
	example: 456
});

console.log(example);
/*
456
*/
```

## License

MIT