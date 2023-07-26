import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, child, set, get } from "firebase/database";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const firebaseConfig = {
  apiKey: "AIzaSyBxQFQXnu4IKWXoO7BZap7kGSHtZSKqWlM",
  authDomain: "twitter-c5898.firebaseapp.com",
  databaseURL: "https://twitter-c5898-default-rtdb.firebaseio.com",
  projectId: "twitter-c5898",
  storageBucket: "twitter-c5898.appspot.com",
  messagingSenderId: "837394825110",
  appId: "1:837394825110:web:013c2e49e631fe198b27b7",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export async function signUp({ name, email, password }) {
  const newUserKey = push(child(ref(db), "/users")).key;

  const data = await get(ref(db, "/users"));
  if (!data.val()) {
    await set(ref(db, "/users/" + newUserKey), {
      name,
      email,
      password,
      bio: "",
      followers: [],
      following: [],
      posts: [],
    });

    return;
  }

  const users = Object.entries(data.val());

  const userEmails = [];

  users.map((u) => {
    const [key, user] = u;
    userEmails.push(user.email);
    if (user.email === email) {
      return;
    }
  });

  if (!userEmails.includes(email)) {
    await set(ref(db, "/users/" + newUserKey), {
      name,
      email,
      password,
      bio: "",
      followers: [],
      following: [],
      posts: [],
    });
    Cookies.set("user", newUserKey);
  }
}

export async function login({ email, password }) {
  let snapshot = await get(ref(db, `/users`));
  var flag = true;
  const users = Object.entries(snapshot.val());
  console.log(users);

  users.map((u) => {
    const [key, user] = u;

    if (user.email === email && user.password === password) {
      localStorage.setItem("user", key);
      Cookies.set("user", key);
      document.cookie = `user=${key}`;
      flag = false;
      alert("Logged in successfully");
      return (window.location.href = "./");
    }
    return;
  });
  if (flag) {
    alert("Wrong credentials");
  }
}

export async function post({ content, date, author, image = "" }) {
  const newKey = push(ref(db, "/posts")).key;
  await set(ref(db, "/posts/" + newKey), {
    content,
    date,
    author,
    image,
    likes: 0,
  });

  const snapshot = await get(ref(db, "/users/" + author + "/posts"));
  if (!snapshot.exists()) {
    await set(ref(db, "/users/" + author + "/posts"), [newKey]);
  } else {
    const posts = snapshot.val();
    posts.push(newKey);
    await set(ref(db, "/users/" + author + "/posts"), posts);
  }
}

export async function comment({ content, date, postid, author }) {
  const newKey = push(ref(db, "/comments")).key;
  await set(ref(db, "/comments/" + newKey), {
    content,
    date,
    postid,
    author,
  });

  const snapshot = await get(ref(db, "/posts/" + postid + "/comments"));
  if (!snapshot.exists()) {
    await set(ref(db, "/posts/" + postid + "/comments"), [newKey]);
  } else {
    const comments = snapshot.val();
    comments.push(newKey);
    await set(ref(db, "/posts/" + postid + "/comments"), comments);
  }
}

export async function likePost(postId, likeCount) {
  const snapshot = await get(ref(db, "/posts/" + postId));
  if (!snapshot.exists()) {
    return;
  }
  const post = snapshot.val();
  post.likes = likeCount;
  await set(ref(db, "/posts/" + postId + "/likes"), post.likes);
}

export async function likeComment(commentId) {
  const snapshot = await get(ref(db, "/comments/" + commentId));
  if (!snapshot.exists()) {
    return;
  }

  const comment = snapshot.val();
  if (comment.likes) {
    comment.likes++;
  } else {
    comment.likes = 1;
  }
  await set(ref(db, "/comments/" + commentId + "/likes"), comment.likes);
}

export async function follow(followerId, followingId) {
  const snapshot1 = await get(ref(db, "/users/" + followerId));
  const snapshot2 = await get(ref(db, "/users/" + followingId));

  if (!snapshot1.exists() || !snapshot2.exists()) {
    return;
  }

  const followings = snapshot1.val().followings || [];
  const followers = snapshot2.val().followers || [];

  if (!followings.includes(followingId)) {
    followings.push(followingId);
  }

  if (!followers.includes(followerId)) {
    followers.push(followerId);
  }

  await set(ref(db, "/users/" + followerId + "/followings"), followings);
  await set(ref(db, "/users/" + followingId + "/followers"), followers);
}

export async function unfollow(followerId, followingId) {
  const snapshot1 = await get(ref(db, "/users/" + followerId));
  const snapshot2 = await get(ref(db, "/users/" + followingId));

  if (!snapshot1.exists() || !snapshot2.exists()) {
    return;
  }

  let followings = snapshot1.val().followings || [];
  let followers = snapshot2.val().followers || [];

  followings = followings.filter((el) => el !== followingId);
  followers = followers.filter((el) => el !== followerId);

  await set(ref(db, "/users/" + followerId + "/followings"), followings);
  await set(ref(db, "/users/" + followingId + "/followers"), followers);
}

export async function postsCount(authorId) {
  return (await getPosts(authorId)).length;
}

export async function commentsCount(postId) {
  return (await getComments(postId)).length;
}
export async function editBio({ bio, userId }) {
  await set(ref(db, "/users/" + userId + "/bio"), bio);
}

export async function getProfileInfo(userId) {
  const snapshot = await get(ref(db, "/users/" + userId));
  return snapshot.val();
}

export async function getPosts(authorId, limit = -1) {
  const snapshot = await get(ref(db, "/posts"));
  let posts = Object?.entries(snapshot.val());

  posts = posts.filter(([key, post]) => post.author == authorId);

  if (limit > -1) {
    return posts.slice(0, limit);
  }

  return posts;
}
export async function getAllPostsWithUser(time, limit = -1,authorId=null) {
  const usersSnapshot = await get(ref(db, "/users"));
  const users = usersSnapshot.val();
  const postsSnapshot = await get(ref(db, "/posts"));
  const posts = Object.entries(postsSnapshot.val()).map(([key, post]) => {
    const user = users[post.author];
    return { key, ...post, name: user ? user.name : "" };
  });
  var filteredPosts = Object.entries(posts).filter(([key, post]) => post.date >> time);
  if(authorId){
     filteredPosts = filteredPosts.filter(([key, post]) => post.author == authorId);
  }
 

  if (limit > -1) {
    return filteredPosts.slice(0, limit).map(([key, post]) => post);
  }
  return filteredPosts.map(([key, post]) => post);
}
export async function getComments(postId, limit = -1) {
  const snapshot = await get(ref(db, "/comments"));
  let comments = Object?.entries(snapshot.val());

  comments = comments.filter(([key, comment]) => comment.postid == postId);

  if (limit > -1) {
    return comments.slice(0, limit);
  }

  return comments;
}
