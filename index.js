const articles = [
 {
  title: 'Title 1',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
 },
 {
  title: 'Title 2',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
 },
 {
  title: 'Title 3',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
 },
 {
  title: 'Title 4',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.'
 }
];

window.addEventListener('load', () => {

 const button = document.getElementById("add-new-article");

 let title_history = [];
 const prevtitles = localStorage.getItem('title_history');
 if (prevtitles) {
    const titles = JSON.parse(prevtitles);
    title_history.push(...titles);
    for (const title of title_history) {
        const a = document.createElement('article');
        a.classList.add('article-item');
        
        const h5 = document.createElement('h5');
        h5.innerHTML = title;
        a.appendChild(h5);

        const container = document.getElementById('container');
        container.appendChild(a);
    }
 }

 let desc_history = [];
 const prevdescs = localStorage.getItem('desc_history');
 if (prevdescs) {
    const descs = JSON.parse(prevdescs);
    desc_history.push(...descs);
    for (const desc of desc_history) {
        const a = document.querySelector('.article-item');

        const description = document.createElement('p');
        description.innerText = desc;
        a.appendChild(description);

        const container = document.getElementById('container');
        container.appendChild(a);
    }
 }

 let content_history = [];
 const prevcontents = localStorage.getItem('content_history');
 if (prevcontents) {
    const contents = JSON.parse(prevcontents);
    content_history.push(...contents);
    for (const cont of content_history) {
        const a = document.querySelector('.article-item');

        const content = document.createElement('span');
        content.innerText = cont;
        a.appendChild(content);

        const container = document.getElementById('container');
        container.appendChild(a);
    }
 }

 button.addEventListener('click', () => {
    var title_text = document.getElementById('title').value;
    var desc_text = document.getElementById("description").value;
    var content_text = document.getElementById("content").value;
    
    if (!title_text) {
        alert("You haven't got a title!");
    }
    else if (!desc_text) {
        alert("You haven't got any description!");
    }
    else if (!content_text) {
        alert("You haven't got any content!");
    }
    else if (title_text && desc_text && content_text){
        title_history.push(title_text);
        localStorage.setItem('title_history', JSON.stringify(title_history));

        desc_history.push(desc_text);
        localStorage.setItem('desc_history', JSON.stringify(desc_history));

        content_history.push(content_text);
        localStorage.setItem('content_history', JSON.stringify(content_history));
        
        const a = document.createElement('article');
        a.classList.add('article-item');

        const title = document.createElement('h5');
        title.innerText = title_text;
        a.appendChild(title);

        const description = document.createElement('p');
        description.innerText = desc_text;
        a.appendChild(description);

        const content = document.createElement('span');
        content.innerText = content_text;
        a.appendChild(content);

        const container = document.getElementById('container');
        container.appendChild(a);
    }
})

const clear = document.getElementById('clear-inputs');
clear.addEventListener('click', () => {
    document.getElementById('title').value = "";
    document.getElementById("description").value = "";
    document.getElementById("content").value = "";
})

 articles.forEach(article => {
  const a = document.createElement('article');
  a.classList.add('article-item');

  const title = document.createElement('h5');
  title.innerText = article.title;
  a.appendChild(title);

  const description = document.createElement('p');
  description.innerText = article.description;
  a.appendChild(description);

  const content = document.createElement('span');
  content.innerText = article.content;
  a.appendChild(content);

  const container = document.getElementById('container');
  container.appendChild(a);
 });

let all_articles = document.querySelectorAll('.article-item');

for (const article of all_articles) {
    article.addEventListener('click', () => {
        article.remove();
    });
  }
});