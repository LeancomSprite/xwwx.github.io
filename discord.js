const userId = "1462586784067358894";

async function loadDiscord() {
  const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
  const json = await res.json();

  if (!json.success) return;

  const data = json.data;
  const user = data.discord_user;

  // Avatar + nome
  document.getElementById("discordName").innerText = user.username;
  document.getElementById("discordAvatar").src =
    `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

  // Status dot
  const dot = document.getElementById("statusDot");
  dot.className = "status-dot " + data.discord_status;

  // Atividade
  const activityText = document.getElementById("activityText");
  if (data.activities.length > 0) {
    activityText.innerText = "Usando: " + data.activities[0].name;
  } else {
    activityText.innerText = "Sem atividade";
  }

  // Spotify
  const spotifyBox = document.getElementById("spotifyBox");

  if (data.listening_to_spotify) {
    spotifyBox.style.display = "flex";

    document.getElementById("songName").innerText =
      data.spotify.song;

    document.getElementById("artistName").innerText =
      data.spotify.artist;

    document.getElementById("spotifyCover").src =
      data.spotify.album_art_url;

  } else {
    spotifyBox.style.display = "none";
  }
}

loadDiscord();
setInterval(loadDiscord, 5000);
