const form = document.getElementById("form");
const search = document.getElementById("search");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const dob = e.target.dob.value;
  const photourl = e.target.photourl.value;
  const birthplace = e.target.birthplace.value;
  const career = e.target.career.value;
  const matches = e.target.matches.value;
  const score = e.target.score.value;
  const fifties = e.target.fifties.value;
  const centuries = e.target.centuries.value;
  const obj = {
    name,
    dob,
    photourl,
    birthplace,
    career,
    matches,
    score,
    fifties,
    centuries,
  };

  console.log(obj);

  axios
    .post("http://localhost:4000/add-player", obj)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

search.addEventListener("submit", (e) => {
  console.log("hi");
  e.preventDefault();
  const name = e.target.name.value;
  console.log(name);

  axios
    .get(`http://localhost:4000/player/${name}`)
    .then((res) => {
      for (const iterator of res.data) {
        console.log(iterator);
        showData(iterator);
      }
      // showData(res)
    })
    .catch((err) => {
      console.log(err);
    });
});

function showData(player) {
  const profile1 = document.getElementById("profile1_container");
  const profile2 = document.getElementById("profile2");
  profile1.innerText = "";
  let img = document.createElement("img");
  img.setAttribute("src", `${player.photourl}`);
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.borderRadius = "50%";
  let name = (document.createElement("div").innerHTML = `${player.name} `);
  let dob = (document.createElement(
    "div"
  ).innerHTML = `Date of birth: ${player.dob}`);
  let matches = (document.createElement(
    "div"
  ).innerHTML = `No. of matches ${player.matches}`);
  let runs = (document.createElement("p").innerHTML = `Runs: ${player.score}`);
  let fifties = (document.createElement(
    "p"
  ).innerHTML = `Fifties: ${player.fifties}`);
  let centuries = (document.createElement(
    "p"
  ).innerHTML = `Fifties: ${player.centuries}`);
  let career = (document.createElement("p").innerHTML = `${player.career}`);
  let br = document.createElement("br");
  profile1.appendChild(img);
  profile1.append(br);
  profile1.append(name);
  profile1.append(br);
  profile1.append(dob);
  profile1.append(br);
  profile1.append(matches);
  profile1.append(br);
  profile1.append(runs);
  profile1.append(br);
  profile1.append(fifties);
  profile1.append(br);
  profile1.append(centuries);
  profile1.append(br);
  profile2.append(career);

  let editBtn = document.createElement("button");
  editBtn.id = "ebtn";
  editBtn.innerText = "edit player";
  profile2.appendChild(editBtn);
  editBtn.addEventListener("click", (e) => {
    editPlayerData(player);
  });
}

function editPlayerData(player) {
  const name = document.getElementById("name");
  const dob = document.getElementById("dob");
  const photourl = document.getElementById("photourl");
  const birthplace = document.getElementById("birthplace");
  const career = document.getElementById("career");
  const matches = document.getElementById("matches");
  const score = document.getElementById("score");
  const fifties = document.getElementById("fifties");
  const centuries = document.getElementById("centuries");
  name.value = player.name;
  dob.value = player.dob;
  photourl.value = player.photourl;
  birthplace.value = player.birthplace;
  career.value = player.career;
  matches.value = player.matches;
  score.value = player.score;
  fifties.value = player.fifties;
  centuries.value = player.centuries;
}

// const editBtn = document.getElementById("eBtn");

// editBtn.addEventListener("click", (e) => {});
