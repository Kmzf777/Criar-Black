const usersLabel = document.querySelector("#usuarios-label");
let currentUsers = Math.floor(Math.random() * (30 - 25 + 1) + 25);

usersLabel.textContent = currentUsers;

setInterval(() => {
  let randomChance = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (randomChance === 3) return;
  if (currentUsers < 20 || randomChance === 2) {
    currentUsers += 1;
  } else {
    currentUsers -= 1;
  }

  usersLabel.textContent = currentUsers;
}, 5000);
