/*global $*/
$("document").ready(function() {
	var inner = "";
	var streamers = ["ESL_SC2", "NALCS1","OgamingSC2", "kaushfiaush", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	// var data={query:"League of Legends", language:"en", limit:10}
	var html = "";
	var stream_id = 0;
	$.each(streamers, function(index, streamer) {
		$.ajax({
			type: 'GET',
			url: 'https://wind-bow.glitch.me/twitch-api/channels/' + streamer,
			success: function(response) {
				stream_id = response._id;
				var display_name="";
				if (response.display_name === undefined) {
					display_name="User not available";
					html+="<tr><td>" + display_name + "</td><td><a href='https://placeholder.com'><img src='https://via.placeholder.com/350x150'></a></td>" + "<td class='Unavailable'></td>";
				}else{
					display_name=response.display_name;
					if(response.logo===null){
						html += "<tr><td>" + display_name + "</td><td><a href='https://placeholder.com'><img src='https://via.placeholder.com/350x150'></a></td>" + "<td id='" + streamer + "'></td>";	
					} else {
						html += "<tr><td>" + display_name + "</td><td><img src='" + response.logo + "' class='icon'></td>" + "<td id='" + streamer + "'></td>";
					}
					$("#streamer-table").html(html);
					var streamer_url = "https://wind-bow.glitch.me/twitch-api/streams/" + stream_id;	
				}
				

				$.ajax({
					type: "GET",
					url: streamer_url,
					success: function(response) {
						if (response.stream !== null) {
							inner = "Online";
						} else {
							inner = "Offline";
						}
						$("#" + streamer).html(inner);
					}
				})
			}
		});
	});
})
