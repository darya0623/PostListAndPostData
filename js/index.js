// fetch(url, headers, ...init)
// .then()
// .catch()
// .finally()

const APIPosts = `https://jsonplaceholder.typicode.com/posts`;

const container = document.querySelector("tbody")

fetch(APIPosts).then((res) => res.json()).then((data) => {
    // console.log(data);

    // for(let id = 0; id < data.length; id++) {
    //     console.log(`For...`, data[id]);
    // }

    // data.forEach((post, index) => {
    //     console.log(index, post);
    // });

    container.innerHTML = ""

    data.forEach(post => {

        container.insertAdjacentHTML("beforeend", `
        <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body.substring(0, 50)}...</td>
                <td><a href="./post.html?postID=${post.id}">Click to post</a></td>
            </tr>
        `)
    });

});