const postsDiv = document.getElementById("posts");
const comentariosDiv = document.getElementById("comentarios");

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        for (let post of posts) {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            const title = document.createElement("h2");
            title.textContent = post.title;

            const content = document.createElement("p");
            content.classList.add("content");
            content.textContent = post.body;

            postDiv.appendChild(title);
            postDiv.appendChild(content);

            postDiv.addEventListener("click", async () => { 
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
                const comentarios = await response.json();

                comentariosDiv.innerHTML = "";

                for (let comentario of comentarios) {
                    const comentarioDiv = document.createElement("div");
                    comentarioDiv.classList.add("comentario");
                    comentarioDiv.textContent = comentario.body;

                    comentariosDiv.appendChild(comentarioDiv);
                }
            });

            postsDiv.appendChild(postDiv);
        }
    } catch (error) {
        console.error(error);
    }
}

fetchPosts();
