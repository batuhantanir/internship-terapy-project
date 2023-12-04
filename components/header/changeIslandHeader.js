async function changeIslandHeader(offset) {
  //header
  const header = await document.getElementById("header");
  if (header != null && offset >= 80) {
    //background-color: #fff;
    header.classList.add("bg-white");
    //top: 5;
    header.classList.add("top-5");
    header.classList.remove("top-0");
    //border-radius: 999px;
    !header.classList.contains("rounded-3xl") &&
      header.classList.add("rounded-full");
    //box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 4px;
    !header.classList.contains("rounded-3xl") &&
      header.classList.add("shadow-sm");
  } else if (header != null && offset < 80) {
    //box-shadow: none;
    header.classList.remove("shadow-sm");
    //top: 5 ; remove
    header.classList.add("top-0");
    header.classList.remove("top-5");
    //border-radius: 0;
    header.classList.remove("rounded-full");
    //box-shadow: none;
    header.classList.contains("rounded-3xl") &&
      header.classList.remove("shadow-sm");
    //background-color: bg-primary;
    header.classList.remove("bg-white");
  }
}

export default changeIslandHeader;
