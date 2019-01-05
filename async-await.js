const user = {id: 20, name: "serdar"};
const friends = [{id: 11, name:"erman"},{id: 12, name:"bekir"}];

const getUser = () => {
    return new Promise((resolve,reject) => {setTimeout(()=>{
        resolve(user)
    }, 500);
    });
};

const getFriends = (userId) =>{
    return new Promise((resolve,reject) => {setTimeout(()=>{
        resolve(friends)
    }, 500);
    });
};
// promise chain
getUser()
    .then((user) =>{
        return getFriends(user.id);
    })
    .then((friends)=>{
       console.log(friends);
    })