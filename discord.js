const userId = "1462586784067358894";

async function loadDiscord() {
  const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
  const json = await res.json();

  if (!json.success) return;

  const user = json.data.discord_user;
  const status = json.data.discord_status;

  document.getElementById("discordName").innerText = user.username;

  document.getElementById("discordAvatar").src =
    `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

  const statusElement = document.getElementById("discordStatus");

  statusElement.innerText = status;
  statusElement.className = status;
}

loadDiscord();
setInterval(loadDiscord, 10000);
