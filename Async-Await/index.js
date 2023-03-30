// ⚪Async JS Practice set1⚪

// const outputBox = document.getElementById("output-box");

// //1️⃣ Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// // Your Code here

// const delayedGreeting = () => setTimeout(() => console.log("Hello, welcome to my portfolio!"), 2000)

// // delayedGreeting();
// // Hello, welcome to my portfolio!



// // 2️⃣ Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.


// // Your code here
// const delayedAddition = (num1, num2) => setTimeout(() => console.log(num1 + num2), 4000);


// // delayedAddition(2, 3);
// // 5



// // 3️⃣ Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.
// // Your Code here
// const delayedAlert = (message, delay) => setTimeout(() => alert(message), delay);


// // delayedAlert('Hello, world!', 2000);
// // Should display an alert box with the message, Hello, world!



// // 4️⃣ Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.

// // Your Code here
// const delayedLoop = number => {
//   for (let i = 1; i <= number; i++) {
//     setTimeout(() => console.log("Hello"), `${i}000`);
//   }
// }

// /*const delayedLoop = number => {
//   for (let i = 0; i < number; i++) {
//     setTimeout(() => console.log("Hello"), (i + 1) * 1000);
//   }
// }*/

// // delayedLoop(3);

// // should print Hello three times after 1 second each
// // Output:
// // Hello -- after 1 second
// // Hello -- after another 1 second
// // Hello -- after another 1 second



// //5️⃣ Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.
// const fakeFetch = (msg, shouldSucceed) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldSucceed) {
//         resolve(`message from server: ${msg}`);
//       }
//       reject(`error from server: ${msg}`);
//     }, 3000);
//   });
// };

// // Your Code here

// /*fakeFetch("Hii", true)
//   .then(response => console.log(response))
//   .catch(error => console.error(error))*/

// // Hi -- after 3 seconds


// // 6️⃣ EXAMPLE QUESTION: (Solution has been provided for this question for your understanding)

// // Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
// const fakeFetch2 = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/itemlist") {
//         reject({
//           status: 404,
//           message: "Items list not found."
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: [
//               { itemName: "Bread", price: 30 },
//               { itemName: "Water Bottle", price: 50 },
//               { itemName: "Dairy Milk", price: 20 }
//             ]
//           }
//         });
//       }
//     }, 2000);
//   });
// }

// // Your Code here
// // fakeFetch2("https://example.com/api/itemlist")
// //   .then(response => outputBox.innerText = `${response.status} ${response.data.message}`)
// //   .catch(error => outputBox.innerText = `${error.status} ${error.message}`)



// // Output on the DOM should be:
// // The data you are looking for, does not exist.



// // 7️⃣ Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch3 = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/chat") {
//         reject({
//           status: 503,
//           message: "Service Unavailable"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// // Your Code here
// // fakeFetch3("https://example.com/api/chat").then(resp => console.log(resp)).catch(error => error.status === 503 ? outputBox.innerText = "We are facing high demand at the moment. Please check back later in sometime." : null);




// // Output on the DOM should be:
// // We are facing high demand at the moment. Please check back later in sometime.




// // 8️⃣ Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the items as an ordered list on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
// const showList = document.querySelector("#showList");
// const fakeFetch4 = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/itemlist") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { itemName: "Bread", price: 30, quantity: 10 },
//             { itemName: "Water Bottle", price: 50, quantity: 50 },
//             { itemName: "Dairy Milk", price: 20, quantity: 30 }
//           ]
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Items list not found."
//         });
//       }
//     }, 2000);
//   });
// };

// // Your Code here
// fakeFetch4("https://example.com/api/itemlist").then((response) => {
//   console.log(response.data);
//   showList.innerHTML = response.data.map(({ itemName, price, quantity }) => `<li>${itemName} -- INR ${price} -- ${quantity}</li>`)
// })

// /*<ol>
//       ${response.data.map(
//         (item) =>
//           `<li>${item.itemName} -- INR ${item.price} -- ${item.quantity}</li>`
//       ).join('')}
//       </ol>*/

// /*fakeFetch4("https://example.com/api/itemlist").then((response) => {
//   response.data.map(({ itemName, price, quantity }) => showList.innerHTML += `<li>${itemName} -- INR ${price} -- ${quantity}</li>`)
// })*/

// // Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
// // 1. Bread-- INR 30 -- 10
// // 2. Water Bottle-- INR 50 -- 50
// // 3. Dairy Milk-- INR 20 -- 30




// // 9️⃣ Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch5 = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/data") {
//         reject({
//           status: 500,
//           message: "Internal Server Error"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// // Your Code here
// fakeFetch5("https://example.com/api/data")
//   .then(response => console.log(response))
//   .catch(({ status, message }) => status === 500 ? outputBox.innerText = `${message}! The server crashed. Please try again in some time.` : null)




// // Output on the DOM should be:
// // Internal Server Error! The server crashed. Please try again in some time.




// //🔟 Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch6 = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/profile") {
//         reject({
//           status: 401,
//           message: "Unauthorized Access"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// // Your Code here
// fakeFetch6("https://example.com/api/profile")
//   .then(res => console.log(res))
//   .catch(({ status, message }) => status === 401 ? outputBox.innerText = `${message}! Looks like you are not logged in. Please login to see your profile data.` : null)




// // Output on the DOM should be:
// // Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.



// // 1️⃣1️⃣ Use this URL - https://example.com/api/profile/NC002 in which we are passing the id of a user to make a fake fetch call and display a welcome message to the user on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch7 = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/profile/NC002") {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: { id: "NC002", name: "Roshan", institute: "neoG Camp" }
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Resource not found"
//         });
//       }
//     }, 2000);
//   });
// };

// // Your Code here
// fakeFetch7("https://example.com/api/profile/NC002")
//   .then(({ status, data: { data: { id, name, institute } } }) => status === 200 ? outputBox.innerText = `Welcome!, ${name} from ${institute}` : null);



// // Output on the DOM should be: Welcome!, Roshan from neoG Camp




// // 1️⃣2️⃣

// /*
// const app = document.querySelector("#app");

// const getUser = async (id) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const data = await response.json();
//   console.log(data);
//   app.innerText = `${data.name} (${data.email})`
// };

// getUser(5);

// //Chelsey Dietrich (Lucio_Hettinger@annie.ca)
// */
// const app = document.querySelector("#app");

// const getUser = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   app.innerHTML = `<ol>
//   ${data.map((user) => `<li>${user.name} (${user.email})</li>`)}
//   </ol>`;
// };
// getUser(`https://jsonplaceholder.typicode.com/users`);

// /*
// // a retun 'b'
// const value = a()
// //promise {b}

// // a retun 'b'
// const value = await a()
// //b

// const data = response.json()
// // promise{resp}

// const data = await response.json()
// // resp
// */

/*
const app = document.querySelector("#app");
const fakeData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    app.innerHTML = `<div> ${data.map(
      (post) => `<h2>${post.title}</h2> <p>${post.body}</p> <hr/>`
    )} </div>`;
  } catch (err) {
    app.innerHTML = `<h1>${err.message}</h1>`;
  }
};

fakeData("https://jsonplaceholder.typicode.com/posts");
// error url => //"https://jsonplacehold.typicode.com/posts"
*/





// ⚪Async JS Practice set2⚪
// Instructions:

// Specific instructions have been written for each question present in this set.
// Please follow ES6 norms for writing your functions.
// You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.
// An example has been provided for fetch call related questions for your understanding.

const outputBox = document.querySelector("#outputBox");

// 1️⃣ Use this URL - https://example.com/post/comments to make a fake fetch call and list out all the emails of users on the DOM in ordered list. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/post/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
            {
              email: "hello@outlook.com",
              commentBody: "Good going a lot to learn from you awesome"
            },
            {
              email: "ram99@gmail.com",
              commentBody: "Anyone from Vadodara here"
            }
          ]
        });
      } else {
        reject({
          status: 404,
          message: "No Commentes found."
        });
      }
    }, 2000);
  });
};

// your code here

/*fakeFetch("https://example.com/post/comments")
  .then(({ status, data }) => {
    if (status === 200) outputBox.innerHTML = `<ol>${data.map(({email}) => `<li>${email}</li>`).join("")}</ol>`
  }).catch(({ status, message }) => outputBox.innerText = `${status} ${message}`);*/

//async await
/*const getEmails = async (url) => {
  try {
    const { status, data } = await fakeFetch(url);
    if (status === 200) outputBox.innerHTML = `<ol> ${data.map(({ email }) => `<li>${email}</li>`).join("")} </ol>`

  } catch ({ status, message }) {
    outputBox.innerText = `${status} ${message}`
  }
}
getEmails("https://example.com/post/comments")*/

// Output on the DOM should be:
// 1. xyz@gmail.com
// 2. hello@outlook.com
// 3. ram99@gmail.com


// const p = data.map(user => `<li>${user.email}</li>`);
//     console.log(p)
//     console.log(p.join(""))
//We use join() method here bcz map will return the array so we don't want to set the array so we joined it.
//If don't join => ['<li>xyz@gmail.com</li>', '<li>hello@outlook.com</li>', '<li>ram99@gmail.com</li>']

//If join => <li>xyz@gmail.com</li><li>hello@outlook.com</li><li>ram99@gmail.com</li>
// outputBox.innerHTML = `<li>xyz@gmail.com</li><li>hello@outlook.com</li><li>ram99@gmail.com</li>`


// 2️⃣ Use this URL - https://example.com/winner-team to make a fake fetch call to the get names of winner group members and show a nice message on the DOM congratulating all of them. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/winner-team") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: ["Jhon", "Raju", "Anjali", "Sakshi"]
          }
        });
      } else {
        reject({
          status: 404,
          message: "No Users found."
        });
      }
    }, 2000);
  });
};

// your code here
/*fakeFetch2("https://example.com/winner-team")
  .then(({ status, data: { data } }) => {
    console.log("hi")
    if (status === 200) outputBox.innerHTML = `Congratulation to the members of winning team ${data.map(name => `${name}, `).join("")} great work keep it up.`
  }).catch(({ status, message }) => outputBox.innerText = `${status} ${message}`)*/

//async await
/*const getWinnerGroup = async (url) => {
  try {
    const { status, data: { data } } = await fakeFetch2(url);
    if (status === 200) outputBox.innerHTML = `Congratulation to the members of winning team ${data.map(name => `${name}, `).join("")} great work keep it up.`
  } catch ({ status, message }) {
    outputBox.innerText = `${status} ${message}`
  }

}
getWinnerGroup("https://example.com/winner-team")*/
// Output on the DOM should be:
// Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.



// 3️⃣Use this URL - https://example.com/login to make a fake fetch call and show the status like it is authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch3 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true
          }
        });
      } else {
        reject({
          status: 404,
          message: "Status not found"
        });
      }
    }, 2000);
  });
};

// your code here
/*fakeFetch3("https://example.com/login")
  .then(({ status, data: { auth } }) => {
    if (status === 200) {
      if (auth) outputBox.innerText = "Verified"
    }
  }).catch(({ status, message }) => outputBox.innerText = `${status} ${message}`);*/

//async await
/*const isAuth = async (url) => {
  try {
    const { status, data: { auth } } = await fakeFetch3(url);
    if (status === 200) {
      if (auth) outputBox.innerText = `Verified`
    }
  } catch ({ status, message }) {
    outputBox.innerText = `${status} ${message}`
  }
}
isAuth("https://example.com/login")*/

// Output on the DOM should be:
// Verified


// 4️⃣Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call and show the order status using the user name on the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch4 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/order/status/OR00A12") {
        resolve({
          status: 200,
          data: {
            order: {
              orderId: "OR00A12",
              status: "delivery pending",
              userName: "Kajal Kumari"
            }
          }
        });
      } else {
        reject({
          status: 404,
          message: "No order found"
        });
      }
    }, 2000);
  });
};

// your code here
/*fakeFetch4("https://example.com/order/status/OR00A12")
  .then(({ status, data: { order } }) => {
    if (status === 200) {
      outputBox.innerText = `Hello ${order.userName} your order status is ${order.status}`
    }
  }
  ).catch(({ status, message }) => outputBox.innerText = `${status} ${message}`)*/


//async await
/*const getOrderStatus = async (url) => {
  try {
    const { status, data: { order } } = await fakeFetch4(url);
    if (status === 200) outputBox.innerText = `Hello ${order.userName} your order status is ${order.status}`
  } catch ({ status, message }) {
    outputBox.innerText = `${status} ${message}`
  }
}
getOrderStatus("https://example.com/order/status/OR00A12")*/

// Output on the DOM should be:
// Hello Kajal Kumari your order status is delivery pending.



// 5️⃣Use this URL - https://example.com/photo to make a fake fetch call and show an image on the DOM using the photo link received in the response. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch5 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/photo") {
        resolve({
          status: 200,
          data: {
            photo: {
              link: "https://source.unsplash.com/featured/300x201",
              title: "Random Image"
            }
          }
        });
      } else {
        reject({
          status: 404,
          message: "Image not found"
        });
      }
    }, 2000);
  });
};

// your code here
/*fakeFetch5("https://example.com/photo")
  .then(({ status, data: { photo: { link, title } } }) => {
    outputBox.innerHTML = `<h1>${title}</h1><img src=${link} alt="Img"/>`
  }).catch(({ status, message }) => outputBox.innerText = `${status} ${message}`)*/


//async await
/*const getImg = async (url) => {
  try {
    const { status, data: { photo: { link, title } } } = await fakeFetch5(url);
    if (status === 200) {
      outputBox.innerHTML = `<h1>${title}</h1><img src=${link} alt="Img" />`
    }
  } catch ({ status, message }) {
    outputBox.innerText = `${status} ${message}`
  }

}
getImg("https://example.com/photo")*/

// Output: an image on the DOM


// 6️⃣Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total price of all the products. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch6 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/productlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Shoes", price: 100, quantity: 2 },
            { itemName: "Hat", price: 350, quantity: 1 },
            { itemName: "Tshirt", price: 410, quantity: 5 }
          ]
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found."
        });
      }
    }, 2000);
  });
};

// Your Code here
/*fakeFetch6("https://example.com/api/productlist")
  .then(({ status, data }) => {
    if (status === 200) outputBox.innerText = `Total: INR ${data.reduce((acc, {price,quantity}) => acc + price*quantity, 0)}`
  })
  .catch(({ status, message }) => outputBox.innerText = `${status} ${message}`);*/

//async await
/*const getTotal = async (url) => {
  try {
    const { status, data } = await fakeFetch6(url);
    if (status === 200) outputBox.innerText = `Total: INR ${data.reduce((acc, { price, quantity }) => acc + price * quantity, 0)}`
  }
  catch ({ status, message }) {
    outputBox.innerText = `${status} ${message}`
  }

}
getTotal("https://example.com/api/productlist");*/

// Output on the DOM should be:
// Total: INR 2600


// 7️⃣ Use this URL - https://example.com/api/users to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Oops! Unexpected Error. Please try again.), as per the status received from the server. The error should be displayed in red colour. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch7 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        reject({
          status: 500,
          message: "Internal Server Error"
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success"
          }
        });
      }
    }, 2000);
  });
};

// Your Code here
/*fakeFetch7("https://example.com/api/users")
  .then(({ status, data: { message } }) => {
    if (status === 200) outputBox.innerText = message
  })
  .catch(({ status, message }) => outputBox.innerHTML = `<h4 style="color: red">${status} ${message}</h4>`);
  */


//async await
/*const showMsg = async (url) => {
  try {
    const { status, data: { message } } = await fakeFetch7(url);
    if (status === 200) outputBox.innerText = message;
  } catch ({ status, message }) {
    outputBox.innerHTML = `<h4 style="color:red">${status} ${message}</h4>`
  }

}
showMsg("https://example.com/api/users")*/

// Output on the DOM should be (in red color):
// Oops. Unexpected Error. Please try again.



// 8️⃣Use this URL - https://example.com/api/allbooks to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Bad Request! Requested size too large.), as per the status received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch8 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/allbooks") {
        reject({
          status: 400,
          message: "Bad Request"
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success"
          }
        });
      }
    }, 2000);
  });
};

// Your Code here
/*fakeFetch8("https://example.com/api/allbooks")
  .then(({ status, data: { message } }) => { if (status === 2000) { outputBox.innerText = message } })
  .catch(({ status, message }) => outputBox.innerText = `${status} ${message}! Requested size to large.`);
*/
// async await
/*const showMessg = async (url) => {
  try {
    const { status, data: { message } } = await fakeFetch8(url);
    if (status === 200) outputBox.innerText = message;

  } catch ({ status, message }) {
    outputBox.innerText = `${status} ${message}! Requested size to large.`
  }
}
showMessg("https://example.com/api/allbooks");*/

// Output on the DOM should be:
// Bad Request! Requested size too large.


// 9️⃣Use this URL - https://example.com/welcome to make a fake fetch call and display a welcome message to the user on the DOM. Welcome message (if provided) should be used else the default message of Welcome to the servershould be shown. Message should be only shown if the user is logged in. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch9 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!(url === "https://example.com/welcome")) {
        reject({
          status: 511,
          message: "Network auth required"
        });
      } else {
        resolve({
          status: 200,
          data: {
            // message: "Welcome from server",
            logged: true
          }
        });
      }
    }, 2000);
  });
};

// your code here
/*fakeFetch9("https://example.com/welcome")
  .then(({ status, data: { logged, message } }) => {
    if (status === 200) {
      if (logged) {
        outputBox.innerText = message ?? "Welcome to the server"
      }
    }
  }).catch(({ status, message }) => outputBox.innerText = `${status} ${message}`)*/


//async await
/*const displayMsg = async (url) => {
  const { status, data: { logged, message } } = await fakeFetch9(url);
  try {
    if (status === 200) {
      if (logged) {
        outputBox.innerText = message ?? "Welcome to the server"
      }
    }
  } catch ({ status, message }) {
    outputBox.innerText = `${status} ${message}`
  }
}
displayMsg("https://example.com/welcome")*/

// Output: As per the response from server





// 🔟 Use this URL - https://example.com/getImage to make a fake fetch call which takes a url and dimensions for the photo to be displayed. Dimensions should be passed in the format [width, height]. Show the image provided in the response on DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// Dimensions can be 200/300/100. For example you can pass [200, 200] or [200, 300], etc.

const fakeFetch10 = (url, dimensions) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/getImage") {
        resolve({
          status: 200,
          data: {
            image: {
              link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
              title: "Random Image"
            }
          }
        });
      } else {
        reject({
          status: 404,
          message: "No photo of such dimension found"
        });
      }
    }, 2000);
  });
}

// your code here
/*fakeFetch10("https://example.com/getImage", [200, 300])
  .then(({ status, data: { image: { link, title } } }) => {
    if (status === 200) {
      outputBox.innerHTML = `<h1>${title}</h1><img src=${link}/>`
    }
  })
  .catch(({ status, message }) => outputBox.innerText = `${status} ${message}`)*/

const getImg = async (url, dimension) => {
  const { status, data: { image: { link, title } } } = await fakeFetch10(url, dimension);
  if (status === 200) {
    outputBox.innerHTML = `<h2>${title}</h2> <img src=${link}/>`
  }

}
getImg("https://example.com/getImage", [200, 300]);
// Output on the DOM should be an image.