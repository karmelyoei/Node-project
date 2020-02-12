const inputValue = document.getElementById("inputSearch");
const searchButton = document.getElementById("buttonSearch");
const xhr = new XMLHttpRequest();
const input = inputValue.value;
const url = `https://www.googleapis.com/books/v1/volumes?q=hello`;

const apicall = (url, callback) => {
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      if (callback) callback(response);
    }
  };
  xhr.open("GET", url);
  xhr.send();
};
const bookfunction = response => {
  console.log(response);
  for (let i = 0; i < 4; i++) {
    const firstDiv = document.createElement("div");
    const bookItem = document.createElement("div");
    const secondDiv = document.createElement("div");
    const bookImg = document.createElement("img");
    const bookName = document.createElement("h2");
    const bookAuther = document.createElement("p");

    bookImg.className = "book-logo";
    bookName.className = "book_name";
    bookAuther.className = "book_auther";
    bookName.innerHTML = response.items[i].title;
    // bookItem.src=response.items.imageLinks.smallThumbnail
    firstDiv.appendChild(bookImg);
    secondDiv.appendChild(bookName);
    secondDiv.appendChild(bookAuther);
    bookItem.appendChild(firstDiv);
    bookItem.appendChild(secondDiv);
  }
};

apicall(url, bookfunction);
