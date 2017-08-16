/*global $*/
$("document").ready(function(){
    var streamers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    // var data={query:"League of Legends", language:"en", limit:10}
    $.each(streamers, function(index, streamer){
        $.ajax({
         type: 'GET',
         url: 'https://wind-bow.glitch.me/twitch-api/channels/'+streamer,
         success: function(response) {
           console.log(response);
         }
});    
    })
    


})