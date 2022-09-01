async function GetData() {
	// Fetch Access Token from Auth.js and convert to JSON Object
		
	response = await fetch("https://api.lucys.page/Auth.json")
	data = await response.json()
	auth = data.auth;

	response = await fetch("https://api.spotify.com/v1/me/player/currently-playing?market=GB", {
	    headers: {
	        Accept: "application/json",
		    Authorization: "Bearer " + auth,
	    	"Content-Type": "application/json"
	    }
    });
	nowPlay = await response.json()
};
async function SetData() {
	LastTrack = document.getElementById("track").innerText
    Track = nowPlay.item.name;
	Progress = nowPlay.progress_ms;

	// Check if the previous track fetched is the same as current track fetched
	if (LastTrack !== Track) {

		// Extract needed Data from nowPlay
								
		Album = nowPlay.item.album.name;
		Artist = nowPlay.item.artists[0].name;
		if (nowPlay.item.album.images[0].url !== undefined) {
		    AlbumArt = nowPlay.item.album.images[0].url;
		}
		Duration = nowPlay.item.duration_ms;

		// Apply new data to HTML elements 
		
		document.getElementById("track").innerText = Track;
		document.getElementById("album").innerText = Album;
		document.getElementById("artist").innerText = Artist;
		if (AlbumArt === undefined) {
		    document.getElementById("art").style.display = "none"
		} else {
		    document.getElementById("art").style.display = "block"
		    document.getElementById("art").src = AlbumArt;
		}
		document.getElementById("length").max = Duration;
	};
	if (Track === undefined) {
		document.getElementById("spotify").style.display = "none"
	} else {
		document.getElementById("spotify").style.display = "flex"
	};
	// Update progress bar with new time 
							
    document.getElementById("length").value = Progress;
}
GetData()

function msToTime(duration) {
	seconds = Math.floor((duration / 1000) % 60),
	minutes = Math.floor((duration / (1000 * 60)) % 60)
	minutes = minutes
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	return minutes + ":" + seconds
}

async function update() {
	GetData()
	SetData()
	time = msToTime(Progress);
	document.getElementById("progress").innerHTML = time
}

setInterval(update, 1000);
