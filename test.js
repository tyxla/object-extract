var tape = require('tape');
var objectExtract = require('./');

tape('extract to an object', function(t) {
	var obj = {
		test: 123
	};
	var toExtract = {
		example: 456
	}

	objectExtract(toExtract, obj);

	var expected = {
		test: 123,
		example: 456
	}

	t.same( obj, expected );

	t.end();
});

tape('extract to an object existing', function(t) {
	var obj = {
		test: 123,
		example: 123
	};
	var toExtract = {
		example: 456
	}

	objectExtract(toExtract, obj);

	var expected = {
		test: 123,
		example: 456
	}

	t.same( obj, expected );

	t.end();
});

tape('extract to global', function(t) {
	var toExtract = {
		example: 456
	}

	objectExtract(toExtract);

	t.same( example, 456 );

	t.end();
});

tape('extract to global existing', function(t) {
	global.example = 123;

	var toExtract = {
		example: 456
	}

	objectExtract(toExtract);

	t.same( example, 456 );

	t.end();
});