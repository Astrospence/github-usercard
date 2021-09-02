/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cardsDiv = document.querySelector('.cards');

const getCard = gitUserName => {
  axios.get(`https://api.github.com/users/${gitUserName}`)
  .then(resp => {
    /*console.log(resp.data);*/

    function userData (img, name, username, location, profile, followers, following, bio) {
      this.img = img;
      this.name = name;
      this.username = username;
      this.location = location;
      this.profile = profile;
      this.followers = followers;
      this.following = following;
      this.bio = bio;
    }
    const user = new userData(resp.data.avatar_url, resp.data.name, resp.data.login, resp.data.location, resp.data.html_url, resp.data.followers, resp.data.following, resp.data.bio);
      const newCard = cardMaker(user);
      cardsDiv.appendChild(newCard);
  })
  .catch(err => {
    console.log(err);
  })
}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['Astrospence', 'bigknell', 'tetondan', 'dustinmyers', 'justsml', 'luishrd'];

followersArray.forEach(index => {
  getCard(index);
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:*/



const cardMaker = obj => {

  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3.classList.add('name');
  userName.classList.add('username');

  img.setAttribute('src', `${obj.img}`);
  h3.textContent = `${obj.name}`;
  userName.textContent = `${obj.username}`;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = 'Profile:';
  profileLink.setAttribute('href', obj.profile);
  profileLink.setAttribute('target', '_blank');
  profileLink.textContent = `${obj.profile}`;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;

  cardsDiv.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}


  /*  <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
