//idea	Funkcie
//note 1. spôsob
function one() {
	return 1
}

console.log(one())

//note 2. spôsob
// voláme function cez object

const obj = {				//	const obj = {
	two(){					//		two: function(){
		return 2				//			return 2
	}							//		}
}								//	}

console.log(obj.two())

//note 3. spôsob
// voláme function cez call

function  three() {
	return 3
}

console.log(three.call())

//note 4. spôsob
// voláme function cez vytvorenie nového object

// const four = new Function("return 4")
// console.log(four())

// const four = new Function("num", "return num")
// console.log(four(5))

const four = new Function("num", "num1", "return num + num1")
console.log(four(5, 8))

//--------------------------------------------------------------------------

function five() {
	console.log("text")
}

five.a = 10
five.b = "string"

//note	Toto je prepis na pozadí:
/**
CALLABLE OBJECT

const specialObject = {
	a: 10,
	b: "string",
	name: "five",
	(): console.log("text")
	}
	
*/

console.log(five.a)
console.log(five.b)
five()