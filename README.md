# Mini-Shopping-Mall

---

기간: 2020.10.26~2020.10.31 (약 6일동안)

목적: JS를 이용하여 동적 웹사이트 구현하는 방법을 학습, JSON을 이해하고 사용하기

## 주요 과제

---

### 1. 데이터를 동적으로 작성

```JavaScript
function createElement(item) {
  const img = document.createElement("img");
  img.setAttribute("class", "thumbnail");
  img.setAttribute("src", item.image);

  const span = document.createElement("span");
  span.setAttribute("class", "description");
  span.innerText = `${item.gender}, ${item.size} size`;
  const li = document.createElement("li");
  li.setAttribute("class", "item");
  li.setAttribute("data-type", item.type);
  li.setAttribute("data-color", item.color);
  li.append(img);
  li.append(span);

  return li;
}
```

### 2. 버튼을 누르면 아이템을 필터링

```JavaScript
function updateItems(items, key, value) {
  const li = document.querySelectorAll("li");
  let idx = 0;
  console.log(li);
  items.forEach((item) => {
    if (item[key] === value) {
      li[idx].classList.remove("invisible");
    } else {
      li[idx].classList.add("invisible");
    }
    idx++;
  });
}
```

### 3. 로고 클릭시 전체 아이템 보여주기

```JavaScript
  logo.addEventListener("click", () => displayItems(items));
```

---

## 결과물

![메인 화면](https://user-images.githubusercontent.com/56028436/97797710-98bfa000-1c62-11eb-966c-96902afdeef4.JPG)
![바지 필터](https://user-images.githubusercontent.com/56028436/97797724-ad039d00-1c62-11eb-9827-bed1bd5e4bb0.JPG)
![노란색 필터](https://user-images.githubusercontent.com/56028436/97797725-af65f700-1c62-11eb-96ef-8c1423314ff5.JPG)
