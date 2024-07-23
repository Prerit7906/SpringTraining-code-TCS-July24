const posts = [
    {title: 'First Post', description: 'Sample description', author: 'Lakshmi'},
    {title: 'Second Post', description: 'This is just another post', author: 'Navneet'}
];

function getAllPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((thePost, index)=>{
            output += `<li>${thePost.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createNewPost(thePost, callback){
    setTimeout(()=>{
        posts.push(thePost);
        callback();
    }, 2000);
}

getAllPosts();
createNewPost(
    {title: 'New Post', description: 'This was created now', author: 'Anant'},
    getAllPosts
);

