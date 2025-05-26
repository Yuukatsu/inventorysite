const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get('user');
document.getElementById("title").innerText = `${user} 的背包`;

fetch(`data/${user}.json`)
  .then(res => res.json())
  .then(itemsByCategory => {
    const list = document.getElementById("inventory");
    for (let category in itemsByCategory) {
      const title = document.createElement("h3");
      title.textContent = `📁 ${category}`;
      list.appendChild(title);

      itemsByCategory[category].forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} × ${item.count}`;
        list.appendChild(li);
      });
    }
  })
  .catch(() => {
    document.getElementById("title").innerText = `找不到 ${user} 的背包資料`;
  });