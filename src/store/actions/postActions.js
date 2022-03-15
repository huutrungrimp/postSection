export const createPost = (post) => {
    console.log(post)
    return {            
        type: 'CREATE_POST',
        post: post,        
    }
};

export const updatePost = (post) => {
    return {            
        type: 'UPDATE_POST',  
        post: post               
    }
};

export const deletePost = (postID) => {
    console.log(postID);
    return {            
        type: 'DELETE_POST',    
        postID: postID
    }
};
