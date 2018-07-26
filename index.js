function toggleVoteContainer(){
 //find the vote container on web page
 var voteContainer = document.getElementById("vote-container");

 if(voteContainer.style.display===""){
   voteContainer.style.display="block";
 }
}

function increaseLikes(element){
  var likes= element.innerText;

   //convert string to integer
  likes = parseInt(likes);

   //increase likes value by 1
  likes+= 1;
  element.innerText = likes;

  var scores = document.getElementsByClassName("score")
  var score = scores[0];
  score.style.color = "blue"
}

var catimages=
["https://xenlife.com.au/wp-content/uploads/ba03237a6d6499f0e2633314826e1526.jpg",
"https://pics.me.me/via-9gag-com-13593726.png"
,"https://i.pinimg.com/736x/e6/ba/83/e6ba83e63b0d31128d909ad6c3602682--sphinx-cat-hairless-cats.jpg"];
var dogimages=
["https://i.imgur.com/xyPtn4m.jpg",
"https://i.pinimg.com/originals/b1/f0/5a/b1f05ae2a8c6543dea35b572107bbb58.jpg",
"http://animalsfacts.net/wp-content/uploads/2017/07/6357952375595417541978257510_Bichon-1-ball.jpg"];

function changeImage(element) {
  console.log(element.id);

 var animals = [];

  if (element.id === "cat-carousel"){
    animals = catimages;
  } else {
    animals = dogimages;
  }

  var carousel= document.getElementById(element.id);

  //get img
var image= carousel.getElementsByTagName('img')[0];

//get img url on page
var imageUrl = image.getAttribute('src');

//swap img image
var imageIndex = animals.indexOf(imageUrl);

if(imageIndex == animals.length - 1){
  imageIndex = 0;
} else {
  imageIndex += 1;
}

//reset url to the new url using the neew index
imageUrl = animals[imageIndex];

//chane the src for the img element on the web page
 image.src = imageUrl;

}
