// 變數
let page = 1;
const dq = selector => {
  return document.querySelector(selector);
};

// 取得 Github Repo Data 並 render
async function getRepoData(page) {
  let data = await fetch(
    `https://api.github.com/users/ChihYang41/repos?page=${page}&per_page=5`
  ).then(res => res.json());
  renderResults(data);
}

// render function
function renderResults(data) {
  for (let i = 0; i < data.length; i++) {
    $(".repo-results_row").append(`
    <div class="col">
      <div
        class="repo-card card text-white bg-primary mb-3"
        style="max-width: 30rem;"
      >
        <h3 class="card-header">${data[i].name}</h3>
        <div class="card-body">
          <p class="card-text">
            ${data[i].description}
          </p>
          <a href="${data[i].html_url}" target="_blank">
            <button type="button" class="btn btn-info">Info</button>
          </a>
        </div>
       
      </div>
    </div>`);
  }
}

// infinite scroll
document.addEventListener("scroll", () => {
  const lastOffset =
    dq(".col:last-child").offsetTop + dq(".col:last-child").clientHeight;
  if (window.pageYOffset + window.innerHeight > lastOffset - 10) {
    page += 1;
    getRepoData(page);
  }
});

getRepoData();
