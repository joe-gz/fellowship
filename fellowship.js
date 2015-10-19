// Dramatis Personae
var fellowship = {
  hobbits: [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc \"Merry\" Brandybuck",
    "Peregrin 'Pippin' Took"
  ],
  buddies: [
    "Gandalf the Grey",
    "Legolas",
    "Gimli",
    "Strider",
    "Boromir"
  ],
  lands: [
    "The Shire", "Rivendell", "Mordor"
  ],
  makeMiddleEarth: function(lands) {
    console.log(lands);
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    for (var i=0;i< lands.length;i++) {
      console.log(lands[i]);
      var land = document.createElement("article");
      land.innerText = lands[i];
      land.innerHTML = "<h1>" + lands[i] + "</h1>";
      document.body.appendChild(land);
    }
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var list = document.createElement('ul');
    for (var i=0;i< hobbits.length;i++) {
      console.log(hobbits[i]);
      var hobbit = document.createElement("li");
      hobbit.innerText = hobbits[i];
      // hobbit.innerHTML = "<li>" + hobbits[i] + "</li>";
      list.appendChild(hobbit);
      hobbit.classList.toggle("hobbit");
    }
    var shire = document.getElementsByTagName('article')[0];
    shire.appendChild(list);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var ringDiv = document.createElement('div');
    ringDiv.id="the-ring"
    // ringDiv.innerHTML = "the-ring"
    var ring = document.getElementsByTagName('li')[0];
    ring.appendChild(ringDiv);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var aside = document.createElement('aside');
    var uList = document.createElement('ul');
    // .appendChild(aside)
    for (var i=0;i< buddies.length;i++) {
      console.log(buddies[i]);
      var buddy = document.createElement("li");
      buddy.innerText = buddies[i];
      // hobbit.innerHTML = "<li>" + hobbits[i] + "</li>";
      uList.appendChild(buddy);
      // buddy.classList.toggle("hobbit");
    }
    aside.appendChild(uList);
    var buddyAppend = document.getElementsByTagName('article')[1];
    buddyAppend.parentNode.insertBefore(aside,buddyAppend);

  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    fellowship.buddies[3] = "Aragorn";
  },

  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    var theFellowship = document.createElement("div");
    console.log(theFellowship);
    theFellowship.textContent = "fellowship";
    theFellowship.id = "fellowship";
    var ulList = theFellowship.appendChild(document.createElement('ul'));
    var ulList2 = theFellowship.appendChild(document.createElement('ul'));

    document.body.appendChild(theFellowship);

    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var rivendell = document.getElementsByTagName('article')[1];
    console.log(rivendell);
    var hobbits = document.querySelectorAll("ul")[0];
    console.log(hobbits);
    hobbits.id="hobbits"
    // var hobbitList = document.getElementById('hobbits');
    // console.log(hobbitList);
    rivendell.appendChild(hobbits);

    for (var i = 0; i < fellowship.hobbits.length; i++){
          var newLi = document.createElement("li")
          newLi.innerHTML = fellowship.hobbits[i];
          ulList.appendChild(newLi);
          console.log(theFellowship)
          alert(newLi.innerText + " " + "has joined your party");
        }
        console.log(theFellowship);


        var buddy = document.querySelectorAll("ul")[0];
        console.log(buddy);
        buddy.id="buddy"
        rivendell.appendChild(buddy);

        for (var i = 0; i < fellowship.buddies.length; i++){
              var newLi = document.createElement("li")
              newLi.innerHTML = fellowship.buddies[i];
              ulList2.appendChild(newLi);
              console.log(theFellowship)
              alert(newLi.innerText + " " + "has joined your party");
            }
  }
}

fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();



// var list = document.createElement('ul');
// for (var i=0;i< hobbits.length;i++) {
//   // var hobbit = document.createElement("li");
//   // hobbit.innerText = hobbits[i];
//   // // hobbit.innerHTML = "<li>" + hobbits[i] + "</li>";
//   // list.appendChild(hobbit);
//   theFellowship.appendChild(hobbitList[i]);
//   alert(hobbits[i].textContent + " has joined your party.")
// }
// var fellowship = document.getElementById('theFellowship');

// var hobbitArray = document.getElementById('hobbits').childNodes;
// console.log(hobbitArray);
