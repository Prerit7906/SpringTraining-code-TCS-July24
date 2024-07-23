const posts = [
    {title: 'First Post', description: 'Sample description', author: 'Lakshmi'},
    {title: 'Second Post', description: 'This is just another post', author: 'Navneet'}
];

function createNewPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error)
                resolve();
            else
                reject('Error: Something went wrong...');
        }, 2000);
    });
}

function getAllPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((thePost, index)=>{
            output += `<li>${thePost.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

async function read(){
    await createNewPost({title: 'The Latest Post', description: 'This was created now, we are using Aync/Await here', author: 'Anant'});
    getAllPosts();
}

read();