const APIPost = `https://jsonplaceholder.typicode.com/posts/`;

const postID = window.location.search.substring(8);

// console.log(postID);

fetch(APIPost + postID)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);

    document.body.insertAdjacentHTML("beforeend", `

    <h1>User ID ${data.userId}</h1>

    <h2>${data.title}</h2>

    <dl>

      <dt>
          <b>${data.id}</b>
      </dt>

      <dd>${data.body}</dd>

    </dl>
    `);
  });

  const submitData = document.querySelector("#submit");

  submitData.addEventListener("click", () => {

    const PostData = async () => {
        await fetch(APIPost, {
            method: "POST",
            body: JSON.stringify({
                userId: 12,
                title: "idk",
                body: "idk",
            }), headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(() => alert("posted"))
        .catch(error => {
            console.error(error);
            alert("failed");
        })
    }

    PostData();
  })