var obj={
    name:"Luminar",
    courses:[],
    student : function(sub){
        this.courses.push(" "+sub)
    }, 
    tutionCenter:function(){
        return `${this.name} contain ${this.courses.length} and the are ${this.courses}`
    }
}

// console.log(obj.tutionCenter())

obj.student("Mearn Stack")
obj.student("Python Full Stack")
obj.student("Artificial Intelligence")
obj.student("Machine Learning")
console.log(obj.tutionCenter())
console.table(obj)