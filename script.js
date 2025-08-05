function getRelativeTime(date) {
  const diff = Date.now() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 60) return `${minutes} mins`;
  if (hours < 24) return `${hours} hours`;
  return `${days} day${days > 1 ? 's' : ''} ago`;
}

// Simulated timestamps
const time1Date = new Date();
time1Date.setHours(time1Date.getHours() - 2); // 2 hours ago

const time2Date = new Date();
time2Date.setDate(time2Date.getDate() - 1); // 1 day ago

const time3Date = new Date();
time3Date.setDate(time3Date.getDate() - 1); // 1 day ago

// Update DOM
document.getElementById("time1").innerText = getRelativeTime(time1Date);
document.getElementById("time2").innerText = getRelativeTime(time2Date);
document.getElementById("time3").innerText = getRelativeTime(time3Date);
