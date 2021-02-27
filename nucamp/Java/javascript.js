const dragon1 = { 
    color: 'red',
    maxHP: 1000
};
const dragon2 = {
    color: "blue",
    maxHP: 1000,
    roar() {
        console.log("The dragon roars ferociously.");
    }
   
};
const student ={
    constructor(name,email,community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
   
};
const Bootcamp ={
    constructor(name,level,students =[]){
        this.name =name;
        this.level = level;
        this.students = students;

    },
    registerStudent(student){
        if(this.students.includes(student)){
            console.log("This email is already register.");
        }else{
        this.students.push(student);
        console.log(`Registering ${student.name} to the bootcamp ${this.name}.`);
        return this.student;}
    }

};
