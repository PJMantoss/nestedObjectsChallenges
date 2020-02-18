
//Exercise 1
var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"],
            isHilarious: true
        }
    }
};

//Write a function called displayCities that console.logs all the values in the citiesLivedIn array:
function displayCities(){
    let newArr = instructorData.additionalData.moreDetails.citiesLivedIn;
    for (let i=0; i < newArr.length; i++) {
        console.log(newArr[i]);
    }
}

displayCities();


//Write a function called displayHometownData that console.logs all the values inside of the hometown object
function displayHometownData(){
    let homeData = instructorData.additionalData.moreDetails.hometown;
    for (let key in homeData){
        console.log(homeData[key]);
    }
    
}

displayHometownData();


/*
write a function called addDetail that accepts two parameters, 
a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object
*/
function addDetail(key, valueItem){
    let detailObj = instructorData.additionalData.moreDetails;
     detailObj[key] = valueItem;
    return detailObj;
}

addDetail("isHilarious", true);


/*
write a function called removeDetail that removes a key in the moreDetails object and returns 
the moreDetails object (the new keys added above are not included in these examples).
*/
function removeDetail(key){
    let detailObj = instructorData.additionalData.moreDetails;
    let deletedValue = detailObj[key];
    delete detailObj[key];
    return detailObj;
}

removeDetail('isHilarious');


//Exercise 2

var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }

    /*Using a for loop, console.log all of the numbers in the primeNumbers array.*/

    function primeNums(){
        let result = nestedData.innerData.numberData.primeNumbers;
        for (let i=0; i<result.length; i++){
                console.log(result[i]); 
        }
    }
  
    primeNums();
   

    //Invoke the addSnack function and add the snack "chocolate".
  nestedData.innerData.addSnack('chocolate');


  //Console.log the value "second" inside the order array.
  function secVal(){
      let result = nestedData.innerData.order[1];
      console.log(result);
  }

  secVal();


//Using a for loop, console.log all of the even Fibonnaci numbers.
  function evenNums(){
      let newArr = nestedData.innerData.numberData.fibonnaci;
      for (let i=0; i<newArr.length; i++){
          if (newArr[i] % 2 == 0){
              console.log(newArr[i]);
          }
      }
  }

  evenNums();


  //Exercise 3

  var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }

  /*
  Write a function addSpeaker to add a speaker to the array of speakers. 
  The speaker you add must be an object with a key of name and a value of whatever you'd like.
  */

 function addSpeaker(newName){
    let newArr = nestedObject.speakers;
    newArr.push({
        name: newName
    })
    return newArr;
}

addSpeaker("Maria");

/*
Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). 
The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
*/

  function addCountry(name, capital, population){
      let newObj = nestedObject.data.continents.europe.countries;
      newObj[name] = {
          capital: capital,
          population: population
      };
      return newObj;
  }

  addCountry('england', 'london', 30000000);

  /*
  Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of 
  the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
  */
  function addLanguage(language, helloInLang){
      let newLangObj = nestedObject.data.languages;
      newLangObj[language] = {
          hello: helloInLang
      };
      return newLangObj;
  }

  addLanguage('english', 'Hello');
