/* 
With our knowledge of Axios and HTTP requests, we can now play around with test API services like https://jsonplaceholder.typicode.com/guide/ (Links to an external site.) 

This is a service that allows you to try out learning things like POST, PATCH, DELETE and GET requests in a fake environment.



Setup a GitHub repository and local git repository
This workflow should be fairly automatic by now
The local repository should be a project created by the projectStarter script
Setup the index.html to link to your app.js file and do the following:





3. Make a DELETE request that deletes a "post"
    https://jsonplaceholder.typicode.com/posts/1 (Links to an external site.) is an example endpoint for this action
    This request can simply happen when the page loads (or on a button press if you're feeling fancy)
    If it succeeds, just console.log the response.

4. Make a GET request that grabs all "posts"
    https://jsonplaceholder.typicode.com/posts (Links to an external site.) is the endpoint for this action
    This request should happen automatically when the page loads
    If it succeeds, all the posts should display on the page somehow (think loop)
    Remember that with these new request types we get different HTTP status sent back on success! Use some console.log lines to figure out what the status being returned is, it should be 2xx

BONUS:
    -Each post also has "comments" related to it. Read the API docs and for each post, also display the comments for that post.

    -Add for request success, loading, and failure messages to the user when appropriate.
*/

/* 
    1. Make a POST request that creates a "post"
    - https://jsonplaceholder.typicode.com/posts (Links to an external site.) 
        is the endpoint for this action
    - There should be a form with a button that allows users to 
        type in their post and click send
    - If it succeeds, the user should be shown a success message
*/
function createPost(){
    // Make a request to POST input from a form
    const blabUsername = document.getElementById('blabUsername').value;
    const blabTitle = document.getElementById('blabTitle').value;
    const blab = document.getElementById('blabInput').value;
    const blabPost = {blabUsername, blabTitle, blab};
    console.log(blabPost);
    axios.request({
        method : 'POST',
        url : 'https://jsonplaceholder.typicode.com/posts',
        headers : {
            "Content-type" : "application/json"
        },
        data : {
            username : blabUsername,
            title : blabTitle,
            body : blab
            
        }

    })
    // Dependent upon request, either a success or fail will be returned
    .then(success).catch(fail);
    
}
function success(response){
    console.log(response);
    let postSuccessAlert = document.createElement('p');
    let parent = document.getElementById('formDiv');
    parent.appendChild(postSuccessAlert);
    postSuccessAlert.innerText = 'Your post has been created!';
    
}
function fail(error){
    console.log(error);
}

function clearForms(){
    let clearTitle = document.getElementById('blabTitle');
    clearTitle.value="";
    let clearName = document.getElementById('blabUsername');
    clearName.value="";
    let clearBody = document.getElementById('blabInput');
    clearBody.value="";
}

// Variables




/*
2. Make a PATCH request that updates a "post"
    https://jsonplaceholder.typicode.com/posts/1 (Links to an external site.) is an example endpoint for this action
    This request can simply happen when the page loads (or on a button press if you're feeling fancy)
    If it succeeds, just console.log the response.
*/
function editPost(){
    const blabUsername = document.getElementById('blabUsername').value;
    const blabTitle = document.getElementById('blabTitle').value;
    const blab = document.getElementById('blabInput').value;
    const blabPost = {blabUsername, blabTitle, blab};
    console.log(blabPost);
    axios.patch('https://jsonplaceholder.typicode.com/posts/1',
            { "username": `${blabUsername}`, "title": `${blabTitle}`, "body": `${blab}` },
            { headers: { 'Content-Type': 'application/json'}, }
        ).then((response) => {
            console.log(response);

        }).catch((error) => {
            console.log(error);
        })
}

function deletePost(){
    axios.delete('https://jsonplaceholder.typicode.com/posts/1',
    {
        data:{ id : 101}
    }
).then((response) => {
    console.log(response);

}).catch((error) => {
    console.log(error);
})
}


//  DOM events and handlers
document.getElementById('blabSubmit').addEventListener('click', createPost);  
document.getElementById('clearForms').addEventListener('click', clearForms);
document.getElementById('blabEdit').addEventListener('click', editPost);
document.getElementById('blabDelete').addEventListener('click', deletePost);


/*

function makeNewPost(){
    axios.request({
        method : "POST",
        url : "https://jsonplaceholder.typicode.com/posts",
        headers : {
            "Content-type" : "application/json"
        },
        data : {
            title : "My awesome tweet",
            body: "This is a great post",
            userId : 10
        }
    }).then(postSuccess).catch(postFailure);
}
*/








