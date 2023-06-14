// 결과 출력 div 엘리먼트 가져오기
const resultDiv = document.querySelector('#result');

// 검색 버튼 클릭 이벤트 핸들러 함수
function search() {
  const searchInput = document.querySelector('.search-input');
  const query = searchInput.value.trim();
  if (query) {
    // 검색어가 입력되었을 경우, Google 검색 결과 페이지로 이동
    window.location.href = `https://www.google.com/search?q=${query}`;
  }
}

// Enter 키 입력 이벤트 핸들러 함수
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value.trim();
    if (query) {
      // 검색어가 입력되었을 경우, 검색어와 함께 결과를 출력
      resultDiv.innerHTML = `입력한 검색어는 ${query} 입니다.`;
    } else {
      // 검색어가 입력되지 않았을 경우, 에러 메시지 출력
      resultDiv.innerHTML = '검색어를 입력해주세요.';
    }
  }
}

// 검색 버튼 클릭 이벤트 등록
window.onload = function() {
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.getElementById('searchButton');

  if (searchButton !== null) {
    searchButton.addEventListener('click', search);
  }

  if (searchInput !== null) {
    searchInput.addEventListener('keypress', handleKeyPress);
  }
};

// 검색어 목록 출력
document.getElementById("search_btn").addEventListener('click', search_message);

function search_message() {
  let search_str = document.querySelector("#search_message");
  let search_txt = document.querySelector("#search_txt");

  if (search_txt !== null && search_txt.value.length === 0) {
    alert("검색어가 비었습니다. 입력해주세요");
  } else if (search_str !== null && search_txt !== null) {
    alert("검색을 수행합니다!");
    search_str.textContent = search_txt.value;
    document.querySelector("#form_main").submit();
  }
}
