// Let Keyword 

function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }

    console.log(i) // still accessible.
}

sayHello()

// Solving problem with 'let' keyword

function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }

    // console.log(i) // not accessible.
}

sayHello()
