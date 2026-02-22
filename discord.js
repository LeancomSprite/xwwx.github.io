const userId = "1462586784067358894";

async function loadDiscord() {
  const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
  const data = await res.json();

  const user = data.data.discord_user;

  document.getElementById("name").innerText = user.username;

  document.getElementById("avatar").src =
    `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
}

loadDiscord();
setInterval(loadDiscord, 5000);
