// const form = document.querySelector('create');
// const button = document.querySelector('button');
// const heroname = document.querySelector('name')
// const fullName = document.querySelector('fullName')
// const alignment = document.querySelector('alignment')
// const race = document.querySelector('race')
// const heroImage = document.querySelector('heroImage')


// form.addEventListener("submit", function (e) {
//     axios
//         .post("http://localhost:3000/api/v1/favorite", {
//             name: heroname.value,
//             fullName: fullName.value,
//             alignment: alignment.value,
//             race: race.value,
//             heroImage: heroImage.value
//         })
//         .then(function (response) {
//             console.log(response);
//             if (response.data.status === "success") {}
//         })
//         .catch(function (error) {
//             if (error.response) {
//                 console.log("ERR:", error.response);
//                 // divError.classList.remove("hidden");
//                 // errorMsg.innerHTML = error.response.data.message;

//                 // setTimeout(function () {
//                 //   divError.classList.add("hidden");
//                 // }, 4000);
//             }
//         });
// });