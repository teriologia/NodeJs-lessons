const user = {id: 20, name: "serdar"};
const friends = [{id: 11, name:"erman"},{id: 12, name:"bekir"}];

const getUser = () => {
    return new Promise((resolve,reject) => {setTimeout(()=>{
        resolve(user)
    }, 2000);
    });
};

const getFriends = (userId) =>{
    return new Promise((resolve,reject) => {setTimeout(()=>{
        resolve(friends)
    }, 1500);
    });
};
// promise chain
/*
getUser()
    .then((user) =>{
        return getFriends(user.id);
    })
    .then((friends)=>{
       console.log(friends);
    })
*/

async function asyncFlow() {
    try {
        console.log("islem basladi");
        const user = await getUser();
        console.log("user işlemi bitti");

        console.log("friends işlemi başladı");
        const friends = await getFriends(user.id);
        console.log("friends işlemi bitti");

        console.log('veriler: ', {user, friends});
    }
    catch (e) {
        console.log(e);
    }
};

asyncFlow();