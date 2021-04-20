import firebase from './firebase';
const firestore = firebase.firestore();


export async function createUser(uid, data) {
  return await firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export async function updateUser(uid, data) {
  return await firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}


export async function getUserDetails(uid) {
  return await firestore
    .collection('users')
    .doc(uid)
    .get();
}

export async function getFields() {
  return await firestore
    .collection('fields')
    .get();
}

export async function getSkills() {
  return await firestore
    .collection('skills')
    .get();
}

export async function getFormattedWork (doc,id) {
  const owner = await getUserDetails(doc.user);
  const lead = await getUserDetails(doc.assigned);
  var obj = {id:id ,user: owner.data(), assigned: lead.data()}
  if(doc.team!=undefined && doc.team.length>0){
    let lst =[]
    for(const user of doc.team){
      const currUser =  await getUserDetails(user);
      lst.push(currUser.data())
    }
    obj.team=lst
  }
  obj = {...doc,...obj}
  return obj;
}


export async function getApproved() {
  const user = await getUserDetails(firebase.auth().currentUser.uid)
  let query =  firestore
    .collection('work')
    .where('approved','==',true)
    .orderBy('completed',"desc")
    .where('user','==',user.data().uid)
    return await query.get();
}

export async function getPending() {
  const user = await getUserDetails(firebase.auth().currentUser.uid)
  let query =  firestore
    .collection('work')
    .where('approved','==',false)
    .where('user','==',user.data().uid)
    .orderBy('completed',"desc")
    return await query.get();
}


export async function getByFaculty(toDate, from) {
  const user = await getUserDetails(firebase.auth().currentUser.uid)
  let query = firestore.collection('work')    
                      .where('createdAt','<=',toDate)
                      .where('createdAt','>=',from);
  return await query.get();
    
}

export async function getUsers() {
  const user = await getUserDetails(firebase.auth().currentUser.uid)
  if(user.data().dept!=undefined && user.data().dept!=null) {
    return await firestore
    .collection('users')
    .where('type','<',user.data().type)
    .where('dept','==',user.data().dept)
    .get();
  }
  return await firestore
    .collection('users')
    .where('type','<',user.data().type)
    .get();
}