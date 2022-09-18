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
		Duration = nowPlay.item.duration_ms;
		if (nowPlay.item.album.images[0].url !== undefined) {
		    AlbumArt = nowPlay.item.album.images[0].url;
		}

		// Apply new data to HTML elements 
		
		document.getElementById("track").innerText = Track;
		document.getElementById("album").innerText = Album;
		document.getElementById("length").max = Duration;
		if (AlbumArt === undefined) {
		    Response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=15c7aeccdfc01e42d2a026283a691c94&artist=" + Artist + "&album=" + Album + "&format=json", { "Content-Type": "application/json" })
		    LastFM = await Response.json()
		    Art = LastFM.album.image[5]["#text"]
		    Artist = LastFM.album.artist
		} else {
		    document.getElementById("art").style.display = "block"
		    document.getElementById("art").src = AlbumArt;
		}
		
		document.getElementById("artist").innerText = Artist;
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
