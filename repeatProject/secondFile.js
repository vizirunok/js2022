// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let bodyDiv = document.createElement("div");
document.body.appendChild(bodyDiv);

let bigDiv = document.createElement("div");
bodyDiv.appendChild(bigDiv);

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
    .then(value => value.json())
    .then(userInfo => {
        for (const info in userInfo) {
            if (typeof userInfo[info] !== "object") {
                let usDiv = document.createElement("div");
                bigDiv.appendChild(usDiv);
                usDiv.innerHTML = `<b>${info}${":"}</b> ${userInfo[info]}`;
            }
            else {
                for (const usDivKey2 in userInfo[info]) {
                    if (typeof userInfo[info][usDivKey2] !== "object") {
                        let usDiv = document.createElement("div");
                        bigDiv.appendChild(usDiv);
                        usDiv.innerHTML = `<b>${usDivKey2}${":"}</b> ${userInfo[info][usDivKey2]}`;
                    }
                    else {
                        for (const usDivKey3 in userInfo[info][usDivKey2]) {
                            let usDiv = document.createElement("div");
                            bigDiv.appendChild(usDiv);
                            usDiv.innerHTML = `<b>${usDivKey3}${":"}</b> ${userInfo[info][usDivKey2][usDivKey3]}`;
                        }
                    }
                }
            }
        }
        let button = document.createElement("button");
        bigDiv.appendChild(button);
        button.innerText = "post of current user";
        button.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(value => value.json())
                .then(posts => {
                    let ftPost = document.createElement("div");
                    bodyDiv.appendChild(ftPost);
                    for (const post of posts) {
                        let postDiv = document.createElement("div");
                        ftPost.appendChild(postDiv);

                        postDiv.innerHTML = `<b><i>${post.title}</i></b>`;

                        let titleButton = document.createElement("button");
                        postDiv.appendChild(titleButton);

                        titleButton.innerText = "Details post";
                        titleButton.onclick = () => {
                            location.href = `post-details.html?id=${post.id}`;
                        };
                    }
                })
            button.disabled = true;
        };
    })



