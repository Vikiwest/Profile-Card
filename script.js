function updateTime() {
  document.getElementById("utc-time").textContent = `${new Date().toUTCString()}`;
}
setInterval(updateTime, 1000);
updateTime();