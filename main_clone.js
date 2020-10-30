//Fetch the items from the JSON file
function loadItems() {
  //fetch를 이용하면 경로 입력으로 손쉽게 데이터를 받아올 수 있다.
  return (
    fetch("data_clone/data_clone.json")
      //받아온 데이터가 성공적이면 그 데이터를 json으로 변환
      .then((response) => response.json())
      //json 안에 있는 items를 return하게 됨
      .then((json) => json.items)
  );
}
//Update the List with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item));
}
//Create HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}
// main
loadItems()
  //Promise
  .then((items) => {
    displayItems(items); //Html에 보여주기
    // setEventListeners(items); //for Filtering
  })
  .catch(console.log);
