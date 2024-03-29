// 🔸callback hell
// Every callback depends/waits for the previous callback


console.log("Start")

function loginUser(email, pass, callback) {
  setTimeout(() => {
    callback({ userEmail: email })
  }, 2000)
}

function getVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"])
  }, 2000)
}

const user = loginUser("abcd@gmail.com", 12345, (response) => {
  console.log(response);
  getVideos(response.userEmail, (videos) => console.log(videos));
});

console.log("End");

//*********************************************************************** */




const loginUser = (email, pass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email })
    }, 2000)
  })
}

const getVideos = email => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"])
    }, 2000)
  })
}

// 🔸Promises

console.log("start")

loginUser("abcd@gmail.com", 12345).then(data => getVideos(data.userEmail)).then(videos => console.log("vid", videos))

console.log("End")



// 🔸 Async - Await

const displayUser = async () => {

  const loggedInUser = await loginUser("abcd@gmail.com", 124);
  // console.log(loggedInUser)
  const videos = await getVideos(loggedInUser.userEmail);
  console.log(videos)

}
console.log("Start")
displayUser()
console.log("End");