import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyC73Hnk6Xo_N1JV05Nu0RAjdVjiXwwkH5M',
	authDomain: 'fir-messaging-ed2f0.firebaseapp.com',
	projectId: 'fir-messaging-ed2f0',
	storageBucket: 'fir-messaging-ed2f0.appspot.com',
	messagingSenderId: '479787942424',
	appId: '1:479787942424:web:5c1072c66ca4b0410e396d',
};

firebase.initializeApp(config);

export default firebase;
