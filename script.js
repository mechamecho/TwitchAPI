/*global $*/
$("document").ready(function(){
    var inner = "";
    var streamers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    // var data={query:"League of Legends", language:"en", limit:10}
    var html="";
    var stream_id=0;
    $.each(streamers, function(index, streamer){
        $.ajax({
         type: 'GET',
         url: 'https://wind-bow.glitch.me/twitch-api/channels/'+streamer,
         success: function(response) {
            stream_id=response._id;
           if(response.logo===null){
            html+="<tr><td>"+response.display_name+"</td><td><a href='https://placeholder.com'><img src='https://via.placeholder.com/350x150'></a></td>"+
           "<td id='"+streamer+"'></td>";   
           }else{
                html+="<tr><td>"+response.display_name+"</td><td><img src='"+response.logo+"'></td>"+
                "<td id='"+streamer+"'></td>";   
           }
           $("#streamer-table").html(html);
           
           var streamer_url="https://wind-bow.glitch.me/twitch-api/streams/"+stream_id;
                   $.ajax({
            type:"GET",
            url:streamer_url,
            success:function(response){
            if(response.stream===null){
                inner="Offline";
            }else{
                inner="Online";
            }
            
            $("#"+streamer).html(inner);
            }
        })
         }
        });     
        
        

    });
    


})