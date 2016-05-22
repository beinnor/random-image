$(document).ready(function() {


   //function definition
   var getImage = function() {
      resetImageArea();
      // store image search string in a variable
      var imageName = $('#imageName').val();

      // Check if the user has entered anything
      if (imageName === '') {

         //If the input field was empty, display a message
         $('#message').html("<h2>Search field is empty...</h2>");

      } else {

         var API_KEY = '2502228-e9cb91e14d3ebe6dd71b32110';
         var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(imageName)+"&image_type=photo";// + "?callback=?";

         // They must have entered a value, carry on with API call, first display a loading message to notify the user of activity
         $('#message').html("<h2>Your image is on its way!</h2>");


         $.getJSON(URL, function(data) {

            //TMDb is nice enough to return a message if nothing was found, so we can base our if statement on this information
            if (data.totalHits > 0){

               var randomImg;

               if (data.totalHits <= 20) {
                  randomImg = Math.floor(Math.random() * data.totalHits);
               } else {
                  randomImg = Math.floor(Math.random() * 20);
               }




               //Display the poster and a message announcing the result
               $('#message').html('<h2>We found you an image!</h2>');
               $('#imageContainer').empty();
               $('#imageContainer').css('backgroundImage', 'url(' + data.hits[randomImg].webformatURL + ')');
            } else {
               $('#message').html('<h2>No image found!</h2>');
            }
         });

      }
   };

   function resetImageArea() {
      $('#imageContainer').empty();
      $('#imageContainer').css('backgroundImage', 'none');
      $('#imageContainer').html('<a href="http://www.pixabay.com"><img class="pixabaylogo" src="img/pixabay.svg" alt="Pixabay logo"></a>');
   }


   $('#button').click(getImage);




});
