# Mini-Shopping-Mall

---

#### 기간: 2020.10.26~2020.10.31 (약 6일동안)

#### 목적: JS를 이용하여 동적 웹사이트 구현하는 방법을 학습, JSON을 이해하고 사용하기

## 주요 과제

---

### 1. 데이터를 동적으로 작성

```JavaScript
function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}
```

### 2. 버튼을 누르면 아이템을 필터링

```JavaScript
const filtered = items.filter((item) => item[key] === value);
  displayItems(filtered);
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
