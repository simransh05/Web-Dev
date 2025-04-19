let person={
    age:24,
    name:'jack',
    city:'mumbai',

    printPersonDetails:function(){
        console.log(this);
    }
}

person.printPersonDetails()
function printGlobal(){
    console.log(this)
}

printGlobal()

