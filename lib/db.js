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