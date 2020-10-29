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

// main
loadItems()
  //Promise
  .then((items) => {
    console.log(items);
    // displayItems(items); //Html에 보여주기
    // setEventListeners(items); //for Filtering
  })
  .catch(console.log);
