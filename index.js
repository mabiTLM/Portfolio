const modalElem = document.getElementById("modal");

modalElem.onwheel = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

modalElem.onclick = document.getElementById("close-btn").onclick = () => {
  modalElem.style.display = "";
};

document.getElementById("modal-box").onclick = (e) => {
  e.stopPropagation();
};

const projectArr = {
  firstProject: { details: "무작위로 선출한 3명씩 팀을 이뤄서 진행<br>팀장: 임현규, 팀원: 임주한, 팀원: 송성민<br><br>조원들과 토론 결과 요즘 음식점들은 개인 사이트를 원하는 경우가 많기에 수요가 또한 많을 것으로 보고 유명 프랜차이즈 레스토랑인 VIPS 사이트의 클론 코딩을 진행" },
  secondProject: { details: "어쩌구2 저쩌구~2" },
};

[...document.getElementsByClassName("project-info")].forEach((i) => {
  i.onclick = (e) => {
    modalElem.style.display = "flex";
    modalElem.getElementsByClassName("details")[0].innerHTML =
      projectArr[e.target.dataset.name].details;
  };
});
