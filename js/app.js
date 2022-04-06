/* 
With our knowledge of Axios and HTTP requests, we can now play around with test API services like https://jsonplaceholder.typicode.com/guide/ (Links to an external site.) 

This is a service that allows you to try out learning things like POST, PATCH, DELETE and GET requests in a fake environment.



Setup a GitHub repository and local git repository
This workflow should be fairly automatic by now
The local repository should be a project created by the projectStarter script
Setup the index.html to link to your app.js file and do the following:









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
        axios.request({
        method : 'POST',
        url : 'https://jsonplaceholder.typicode.com/posts/',
        headers : {
            "Content-type" : "application/json"
        },
        data : {
            userId : document.getElementById('blabUsername').value,
            title : document.getElementById('blabTitle').value,
            body : document.getElementById('blabInput').value
            }
        }).then(success).catch(fail);
}
function success(response){
    console.log(response);
    Cookies.set('postToken', response.data.id);
    let postSuccessAlert = document.createElement('p');
    let parent = document.getElementById('formDiv');
    parent.appendChild(postSuccessAlert);
    postSuccessAlert.innerText = 'Your post has been created!';
}
function fail(error){
    console.log(error);
    let postFailAlert = document.createElement('p');
    let parent = document.getElementById('formDiv');
    parent.appendChild(postFailAlert);
    postSuccessAlert.innerText = 'Attempt to post failed.';
}

function clearForms(){
    document.getElementById('blabTitle').value="";
    document.getElementById('blabUsername').value="";
    document.getElementById('blabInput').value="";
}


/*
2. Make a PATCH request that updates a "post"
    https://jsonplaceholder.typicode.com/posts/1 (Links to an external site.) is an example endpoint for this action
    This request can simply happen when the page loads (or on a button press if you're feeling fancy)
    If it succeeds, just console.log the response.
*/
function editPost(){
    axios.request({
        method: "PATCH",
        url : 'https://jsonplaceholder.typicode.com/posts/1',
        data : {
                "title": document.getElementById('blabTitle').value, 
                "body": document.getElementById('blabInput').value
            }
    }).then(postUpdateSuccess).catch(postUpdateFail);
}
function postUpdateSuccess(response){
    console.log(response);
    Cookies.remove('postToken');
    Cookies.set('updateToken', response.data.id);
    let postUpdateAlert = document.createElement('p');
    let parent = document.getElementById('formDiv');
    parent.appendChild(postUpdateAlert);
    postUpdateAlert.innerText = 'Your post has been updated!';
    

}
function postUpdateFail(response){
    console.log(response);
    let postUpdateAlert = document.createElement('p');
    let parent = document.getElementById('formDiv');
    parent.appendChild(postUpdateAlert);
    postUpdateAlert.innerText = 'Your post failed to update!';
}
/*
3. Make a DELETE request that deletes a "post"
    https://jsonplaceholder.typicode.com/posts/1 (Links to an external site.) is an example endpoint for this action
    This request can simply happen when the page loads (or on a button press if you're feeling fancy)
    If it succeeds, just console.log the response.
*/
function deletePost(){
    axios.delete('https://jsonplaceholder.typicode.com/posts/1',
).then(deleteSuccess).catch(deleteFail);
}
function deleteSuccess(response){
    console.log(response);
    Cookies.remove('postToken');
    Cookies.remove('updateToken');
    
}
function deleteFail(response){
    console.log(response);
}
/*
4. Make a GET request that grabs all "posts"
    https://jsonplaceholder.typicode.com/posts is the endpoint for this action
    This request should happen automatically when the page loads
    If it succeeds, all the posts should display on the page somehow (think loop)
    Remember that with these new request types we get different HTTP status sent 
    back on success! Use some console.log lines to figure out what the status being 
    returned is, it should be 2xx
*/
function listComments(response){
    console.log(response);
    const users = response.data;
    console.log(users);
    users.forEach((user) => {
        let id = user.id;
        let title = user.title;
        let body = user.body;
        const usersDiv = document.getElementById('blabDisplayDiv');
        const eachUser = document.createElement('div');
        let postId = document.createElement('h4');
        let postTitle = document.createElement('h5');
        let postBody = document.createElement('p');
        eachUser.appendChild(postId);
        eachUser.appendChild(postTitle);
        eachUser.appendChild(postBody);
        usersDiv.appendChild(eachUser);
        eachUser.style.border = "solid";
        eachUser.style.borderColor = "white";
        eachUser.style.padding = "2%";
        eachUser.style.backgroundColor = "#383838";
        usersDiv.style.margin="auto";
        usersDiv.style.width="80%";
        postId.innerText=id;
        postTitle.innerText=title;
        postBody.innerText=body;
    });
    
}
function reqFail(response){
    console.log(response);
}
axios.request({
    method : "GET",
    url : 'https://jsonplaceholder.typicode.com/posts',

}).then(listComments).catch(reqFail);


//  DOM events and handlers
document.getElementById('blabSubmit').addEventListener('click', createPost);  
document.getElementById('clearForms').addEventListener('click', clearForms);
document.getElementById('blabEdit').addEventListener('click', editPost);
document.getElementById('blabDelete').addEventListener('click', deletePost);











