const profile = document.querySelector(".profile");
const avatar = document.querySelector("#avatar");
const fullname = document.querySelector("#fullname");
const profession = document.querySelector("#profession");
const intro = document.querySelector("#intro");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let user = {
    fullname: fullname.value,
    profession: profession.value,
    avatar: avatar.value,
    intro: intro.value,
  };
  displayUserProfile(user);
});

function displayUserProfile(obj) {
  profile.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="user">
        <div class="avatar">
            <img src="${obj.avatar}" alt="">
        </div>
        <div class="info">
            <h1>${obj.fullname}</h1>
            <p>${obj.profession}</p>
            <p class="intro">${obj.intro}</p>
            <div class="contact">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fas fa-globe-europe"></i>
            </div>

            <div class="followers">
                <div class="details">
                    <h2>85</h2>
                    <p>Shots</p>
                </div>
                <div class="details">
                    <h2>508</h2>
                    <p>Followers</p>
                </div>
                <div class="details">
                    <h2>8</h2>
                    <p>Projects</p>
                </div>
            </div>

            <button>Follow Dribbbler</button>
        </div>
    </div>
    `
  );
}
