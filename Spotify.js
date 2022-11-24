async function GetData() {
	response = await fetch("https://api.lucys.page/playing")
	nowPlay = await response.json()
};

async function SetData() {
	LastTrack = ""
	if (nowPlay.playing == false){
		document.getElementById("spotify").style.display = "none";
	} else {
		document.getElementById("spotify").style.display = "flex";
	}
	if (nowPlay.playing == true){
		if (document.getElementById("track").innerText != "Track") {
			LastTrack = document.getElementById("track").innerText
		}
		Track = nowPlay.track;
		Progress = nowPlay.progress;

		// Check if the previous track fetched is the same as current track fetched
		if (LastTrack !== Track) {

			// Extract needed Data from nowPlay

			Album = nowPlay.album;
			Artist = nowPlay.artist;
			Duration = nowPlay.length;
			AlbumArt = nowPlay.albumArt;

			// Apply new data to HTML elements 

			document.getElementById("track").innerText = Track;
			document.getElementById("album").innerText = Album;
			document.getElementById("length").max = Duration;
			document.getElementById("art").src = AlbumArt;
			document.getElementById("artist").innerText = Artist;

			if (nowPlay.id != null) {
				statsfm()
			} else {
				document.getElementById("statsfm").style.display = "none";
			}

		};
		// Update progress bar with new time 

	    //document.getElementById("length").value = Progress;
		document.getElementById("lengthProg").style.width = (Progress/Duration)*100 + "%";
	}
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

async function statsfm() {
	StatsFMDataJ = await fetch('https://beta-api.stats.fm/api/v1/tracks/' + nowPlay.id + '?type=spotify')
	StatsFMData = await StatsFMDataJ.json()
	StatsFMStatsDataJ = await fetch('https://beta-api.stats.fm/api/v1/users/acelucy/streams/tracks/' + StatsFMData.item.id + '/stats')
	StatsFMStatsData = await StatsFMStatsDataJ.json()
	document.getElementById("statsfm").style.display = "flex";
	document.getElementById("playcount").innerHTML = "Played " + StatsFMStatsData.items.count + " times"
} 

function updateTime() {
	nowPlay.progress += 1000
	if (nowPlay.progress >= nowPlay.duration) {
		update()
	} else {
		time = msToTime(nowPlay.progress);
		document.getElementById("progress").innerHTML = time
	}
}

update()
setInterval(update, 1000);
