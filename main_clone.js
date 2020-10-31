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

//필터링 된 아이템을 보여주는 첫번째 솔루션
//이벤트를 처리하는 함수는 on+어떤 이벤트의 이름
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  //object는 key를 이용해서 데이터에 접근 가능

  const filtered = items.filter((item) => item[key] === value);
  displayItems(filtered);
}
// 매번 전체가 innerHTML로 업데이트 되어야하는 불필요한 과정이 있음

//필터링 된 아이템을 보여주는 두번째 솔루션
// function conButtonClick(event, items) {
//   const target = event.target;
//   const key = target.dataset.key;
//   const value = target.dataset.value;
//   if (key == null || value == null) {
//     return;
//   }
//   updateItems(items, key, value);
// }

// function updateItems(items, key, value) {
//   items.forEach((item) => {
//     if (item.dataset[key] === value) {
//       item.classList.remove("invisible");
//     } else {
//       item.classList.add("invisible");
//     }
//   });
// }

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons"); //이벤트 위임
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main
loadItems()
  //Promise
  .then((items) => {
    displayItems(items); //HTML에 보여주기
    setEventListeners(items); //for Filtering
  })
  .catch(console.log);
