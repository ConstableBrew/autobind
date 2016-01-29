# autobind
Fixes class methods so that they can be extracted with out worrying about breaking the connection to "this".

# Installation
```
npm install es6-autobind --save
```

# Usage
```
import autobind from 'es6-autobind'

class A {
	constructor(a, b) {
		this.a = a;
		this.b = b;
		autobind(this);
	}
	foo(){ console.log(this.a); }
	bar(){ console.log(this.b); }
}
class B extends A {
	constructor(a, b, c) {
		super(a, b);

		this.c = c;
		autobind(this);
	}
	baz(){ console.log(this.c); }
	foo(){ super.foo(); console.log('foo!'); }
}

var x = new A('asdf', 'jkl');

x.foo();        // asdf
var y = x.bar;
y();            // jkl


var z = new B('aaa', 'bbb', 'ccc');

z.foo(); // aaa foo!
z.bar(); // bbb
z.baz(); // ccc

y = z.foo; y(); // aaa foo!
y = z.bar; y(); // bbb
y = z.baz; y(); // ccc
```