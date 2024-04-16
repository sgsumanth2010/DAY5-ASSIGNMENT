let myResume={
    "basics": {
      "name": "SAGAYASUMANTH",
      "email": "sgsumanth04@gmail.com",
      "phone": 9095951225,
      "degree": "MCA",
      "location": {
        "address": "B6, ShanthiNivasApartment",
        "postalCode": 636009,
        "city": "Salem",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/feed/",
          "github":"https://github.com/dashboard"
        }
      ]
    },
    "work": [
      {
        "company": "Shadowfax Ecommerse",
        "position": "Operation Executive",
        "startDate": "2020-11-04",
        "endDate": "Till Now",
        "summary": "i am the operation executive handling various task and gaining lots of experience",
      },
    ],
    "education": [
      {
        "institution": "KSR College Of Technolgy",
        "department": "ComputerApilication",
        "studyType": "fulltime",
        "batch start year": 2013,
        "batch end year": 2015,
        "gpa": 7.5,
      }
    ],
    "skills": [
      {
        "name": "python,javascript",
        "level": "beginer",
        "project": [
          "automatic attendance maintaing system using python language"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "cricket,football",
      }
    ]
  }
  console.log(myResume);

 // 2.For the given JSON iterate over all for loops (for, for in, for of, for Each)

  var json = [{
    "id" : "sagayasumanth1", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "sgsumanth04@gmail.com"
},
{
    "id" : "sagayasumanth2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "sgsumanth04@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);