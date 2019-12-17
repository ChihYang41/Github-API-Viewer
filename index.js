let page = 1;
let userName = "ChihYang41";

async function getRepoData() {
  // let data = await fetch('https://api.github.com/users/ChihYang41/repos?page=1&per_page=5').then(res => res.json())
  // console.log(data)
}

const data = [
  {
    name: "ChihYang41.github.io",
    description: "Hexo Blog",
    html_url: "https://github.com/ChihYang41/ChihYang41.github.io",
  },
  {
    name: "chinese-copywriting-guidelines",
    description: "Chinese copywriting guidelines for better written communication／中文文案排版指北",
    html_url: "https://github.com/ChihYang41/chinese-copywriting-guidelines",
  }
]

function renderResults(data) {
  for(let i = 0; i < 5; i++) {
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

getRepoData();

renderResults(data);
