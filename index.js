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
  firstProject: { details: "무작위로 선출한 3명씩 팀을 이뤄서 진행<br>팀장: 임현규, 팀원: 임주한, 팀원: 송성민<br><br>조원들과 토론 결과 요즘 음식점들은 개인 사이트를 원하는 경우가 많기에 수요가 또한 많을 것으로 보고 유명 프랜차이즈 레스토랑인 VIPS 사이트의 클론 코딩을 진행<br><br><a href='./file/project1.pdf'><strong>상세문서</strong></a>" },
  secondProject: { details: "만들고 싶은 사이트를 제작하는 개인 프로젝트<br>실제로 수요가 있는 사이트를 제작하고 싶었기에 주변 문의 결과 대학원에 다니는 친구에게 연구실에서 사이트 제작자를 찾는다는 것을 듣고 유사한 샘플 사이트 제작.<br><br><a href='./file/project2.pdf'><strong>상세문서</strong></a>" },
};

[...document.getElementsByClassName("project-info")].forEach((i) => {
  i.onclick = (e) => {
    modalElem.style.display = "flex";
    modalElem.getElementsByClassName("details")[0].innerHTML =
      projectArr[e.target.dataset.name].details;
  };
});
