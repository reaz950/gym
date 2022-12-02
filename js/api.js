const loadMeals = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayProfileData(data.results));
}

const displayProfileData = (users) =>{
    const profileContainer = document.getElementById('meals-container')
    for(const user of users){
        console.log(user);
        const userDiv = document.createElement('div')
        userDiv.classList.add('user')
        userDiv.innerHTML =`
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
        <img src="${user.picture.medium}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${user.name.first}</h5>
        <p>${user.email}</p>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">My age: ${user.registered.age}</small></p>
            </div>
          </div>
        </div>
      </div>
        `;
        profileContainer.appendChild(userDiv)
    }
}

loadMeals()