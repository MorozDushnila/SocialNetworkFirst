import {rerenderEntireTree} from "../render";

let state = {

    navbarPage: {
        friends: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Vlad"},
            {id: 3, name: "Valera"},
        ]
    },

    profilePage: {
        posts: [
            {id: 1, message: "How are you?", likeCounts: 15},
            {id: 2, message: "It is my first post.", likeCounts: 20},
            {id: 3, message: "Hello!!!", likeCounts: 20},
            {id: 4, message: "It is my first post.", likeCounts: 20},
        ],
        newPostText: 'it-kamasutra'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Vlad"},
            {id: 3, name: "Valera"},
            {id: 4, name: "Dasha"},
            {id: 5, name: "Irina"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Where?"},
            {id: 4, message: "Hello!!!"},
        ],
        newMessageText: 'Morozov is cool',
    },
    sidebar: {}
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounts: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;