
const config = {
  apiKey: "AIzaSyBceqsN-eb7pF7xe8O-fspodSj_0igS9-E",
  authDomain: "monkey-pa.firebaseapp.com",
  databaseURL: "https://monkey-pa.firebaseio.com"
}
firebase.initializeApp(config)

var BondsRef = null
const dbGetBondsRef = (mode) => {
  if (mode == 'pvt') {
    return firebase.database().ref('private/bonds')
  } else {
    return firebase.database().ref('bonds')
  }
}

const Admins = [
  'xxxooo.tw@gmail.com',
  'monkey.lu18@gmail.com'
]
