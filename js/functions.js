$(document).ready(function() {


   //function definition
   var getImage = function() {

      // store image search string in a variable
      var imageName = $('#imageName').val();

      // Check if the user has entered anything
      if (imageName === '') {

         //If the input field was empty, display a message
         $('#message').html("<p>Search field is empty...</p>");

      } else {

         var API_KEY = '2502228-e9cb91e14d3ebe6dd71b32110';
         var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(imageName)+"&image_type=photo";// + "?callback=?";

         // They must have entered a value, carry on with API call, first display a loading message to notify the user of activity
         $('#message').html("<p>Your image is on its way!</p>");


         $.getJSON(URL, function(data) {

            //TMDb is nice enough to return a message if nothing was found, so we can base our if statement on this information
            if (parseInt(data.totalHits) > 0){

               var randomImg;

               if (data.totalHits <= 20) {
                  randomImg = Math.floor(Math.random() * data.totalHits);
               } else {
                  randomImg = Math.floor(Math.random() * 20);
               }




               //Display the poster and a message announcing the result
               $('#message').html('<p>Well, gee whiz! We found you an image, skip!</p>');
               //$('#imageContainer').html('<img id="theImage" src=' + data.hits[randomImg].webformatURL + ' />');
               $('#imageContainer').css('backgroundImage', 'url(' + data.hits[randomImg].webformatURL + ')');
            } else {
               $('#message').html('<p>No image found!</p>');
            }
         });

      }
   };


   $('#button').click(getImage);




});
