export{}
const multiplyValue = (value:number,multiplier : number = 2   ):number => {
    return value * multiplier
}

const processInput = (value : number | string | boolean) : number | string | boolean =>{
    if(typeof value === "number"){
        return value * 10 ;
    }
    if(typeof value === "string"){
        return value.trim().toLocaleLowerCase();
    }
    if(typeof value === "boolean" && value === true){
        return "Active"
    }else return "Inactive"
}


const formatCoordinate = (allValues :readonly [lat : number,long:number,city:string]) : string =>{
    const [lat,long,city] = allValues
    return `Location: ${city} (${lat}, ${long})`
}

const concatenateArrays = <T> (...arrays : T [][]) : T[] =>{
    return  arrays.flat() ;
}


interface Course {
    title : string,
    students : number ,
    isPublished : boolean
}

const getPopularCourses = (Course : Course[] , minStudents : number) : Course[] =>{
    return Course.filter((crs) => crs.isPublished === true && crs.students >=minStudents)
}

const pluckValues =<T , K extends keyof T>(items : T[] , key: K) : T[K][]=>{
    return items.map(val => val[key])
}

class Employee {
    constructor(
        protected name : string ,
        private baseSalary : number
    ){}
    getDetails() : string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    constructor(name : string , baseSalary: number , private department: string){
        super(name,baseSalary)
    }
    getRoleInfo() : string{
        return `Manager of ${this.department}: ${this.name}`
    }
}


const validateAgeAsync = (age : number) : Promise<string>  =>{
    return new Promise((resolve , reject) =>{
        if(age >= 18){
            setTimeout(()=>{
                resolve("Access Granted")
            },1000)
            return
        }
        reject(new Error("Access Denied: Must be 18 or older"))
    })
}
