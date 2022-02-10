let date = new Date();

const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  const eng_month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".month").innerHTML = eng_month[viewMonth];

  // 지난 달 마지막 Date, 이번 달 마지막 Date, 0은 그 달의 마지막 날짜를 의미한다.
  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  //지난달 마지막 날짜와 요일을 반환
  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  //이번달 마지막 날짜와 요일을 반환
  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  // 저번달 달력을 저장
  const prevDates = [];

  //이번달 달력을 저장
  // Array.keys()는 인덱스를 키 값으로 가지는 새로운 객체 반환.
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);

  //다음달 달력을 저장
  const nextDates = [];

  // prevDates 계산
  // 일요일이 아닐때
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  // nextDates 계산
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  // Dates 합치기
  const dates = prevDates.concat(thisDates, nextDates);
  const first = dates.indexOf(1);
  const last = dates.lastIndexOf(TLDate);
  // Dates 정리
  dates.forEach((date, i) => {
    const condition1 =
      i >= first && i < last + 1 ? "" : "<span style='opacity: .3;'>";

    const condition2 = i >= first && i < last + 1 ? "" : "</span>";

    if (i % 7 == 0) {
      dates[i] = `<tr><td>${condition1}${date}${condition2}</td>`;
    } else if ((i + 1) % 7 == 0) {
      dates[i] = `<td>${condition1}${date}${condition2}</td></tr>`;
    } else {
      dates[i] = `<td>${condition1}${date}${condition2}</td>`;
    }
  });

  // Dates 그리기

  document.querySelector("#schedule").innerHTML += dates.join("");
};

renderCalendar();

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  document.querySelector("#schedule").innerHTML =
    '<tr class="first"><th style="color: #930000" id="eng_day">SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>';
  renderCalendar();
};

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  document.querySelector("#schedule").innerHTML =
    '<tr class="first"><th style="color: #930000" id="eng_day">SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>';
  renderCalendar();
};

const goToday = () => {
  date = new Date();
  document.querySelector("#schedule").innerHTML =
    '<tr class="first"><th style="color: #930000" id="eng_day">SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>';
  renderCalendar();
};
