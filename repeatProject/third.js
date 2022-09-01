let url = new URL(location.href);
let id = url.searchParams.get("id");

let bodyDiv = document.createElement("div");
document.body.appendChild(bodyDiv);


fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(value => value.json())
    .then(detail => {
        let det = document.createElement("div");
        bodyDiv.appendChild(det);

        for (const element in detail) {
            let inf = document.createElement("div");
            det.appendChild(inf);

            inf.innerHTML = `<b>${element}${":"}</b> ${detail[element]}`;
        }
    })
fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(value => value.json())
    .then(comments => {
        let comDiv = document.createElement("div");
        bodyDiv.appendChild(comDiv);
        for (const comment of comments) {
            let cDiv = document.createElement("div");
            comDiv.appendChild(cDiv);
            for (const Key in comment) {
                let childDiv = document.createElement("div");
                cDiv.appendChild(childDiv);
                childDiv.innerHTML = `<b>${Key}${":"}</b> ${comment[Key]}`;
            }
        }
    })

