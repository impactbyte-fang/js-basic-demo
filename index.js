// console.log("JavaScript")

// VARIABLE DECLARATION ------------------------------------------
let num = 3
let str1 = "string"
let str2 = 'string'
let str3 = `string`
let bol = false
let arr = [2,"string",true,[1,2,3]]
let obj = {
    name: "Gibrantem",
    age: 200,
    skills: ["C++","JavaScript","Markdown"],
    married: false
}


// DISPLAY ARRAY ------------------------------------------
// console.log("display all elements:",arr)
// console.log("display single element:",arr[3])
// console.log("two dimensional array :",arr[3][1])

// DISPLAY OBJECT VALUE ------------------------------------------
// console.log("display all object properties:",obj)
// console.log("display one object property:",obj.skills)

// ARRAY OF OBJECT ------------------------------------------

let arr_of_obj = [
    {
        name: "Gibrantem",
        age: 200,
        skills: ["C++","JavaScript","Markdown"],
        married: false
    },
    {
        name: "Wippy",
        age: 19,
        skills: ["C++","Markup","Markdown"],
        married: false
    }
]
var data = [
    {
        'name' : 'muhsin',
        'age'  : 27,
        'occupation' : 'front-end',
        'martial-status' : true,
        'activities' : [
            {
                'weekday' : 'working',
                'location' : 'office'
            },
            {
                'weekend' : 'sleeping',
                'location' : 'home'
            }
        ]
    },

    {
        'name' : 'whippy',
        'age' : 32,
        'occupation' : 'backend',
        'maritas-status' : false,
        'activities' : [
            {
                'weekday' : 'shooping',
                'location' : 'mall'
            },
            {
                'weekend' : 'swimming',
                'location' : 'pool'
            }
        ]

    }
]
console.log(data[0].activities[1].weekend)
console.log(data[1].activities[1].location)
// DISPLAY DATA ------------------------------------------
// console.log(arr_of_obj[0].skills[1])
// console.log(arr_of_obj[1].name)
// console.log(arr_of_obj[0].skills[1])
// console.log(arr_of_obj[0].skills[1])




