import _ from 'lodash'
import all from '../static/_dics/*.md'
//import { db } from './db.js';

export function getrates(e) {
	let pr = {}, po = {}, data = e.detail.data
	console.log(e)
	let post = findPost(e.detail.path)
	for (let i in data) {
		for (let k in data[i].profile) {
			pr[k] = (pr[k] || 0) + data[i].profile[k]
		}
		for (let k in data[i].power) {
			po[k] = (po[k] || 0) + data[i].power[k]
		}
	}
	// let prsort = Object.keys(pr).sort()
	//let posort = Object.keys(po).sort()
	for (let k in pr) post.profile[k] = pr[k] / data.length
	for (let k in po) post.power[k] = po[k] / data.length
	return post
}

 /* 
let client
export async function ratings(id) {
	client = await import("firebase");
	client.collection(id)
		.onSnapshot(function (querySnapshot) {
			var data = [];
			querySnapshot.forEach(function (doc) {
				data.push(doc.data());
			});
			console.log("collection: ", data);
		});
};
 */
export const posts = _.chain(all)
  .map(transform)
  .orderBy('sort', 'asc')
  .value()

export function findPost(_id) {
  return _.find(posts, {_id})
}

function transform({filename, metadata, html}) {
  const _id = filename.replace(/.md$/, '')
	const sort = new Date(metadata.birthdate)
	/* metadata.birthdate = metadata.birthdate ? new Date(metadata.birthdate).toDateString().substring(4) : ''
	metadata.deathdate = metadata.deathdate ? new Date(metadata.deathdate).toDateString().substring(4) : '' */
	metadata.birthdate = metadata.birthdate ? new Date(metadata.birthdate).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : ''
	metadata.deathdate = metadata.deathdate ? new Date(metadata.deathdate).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : ''
	metadata.profile = metadata.profile || {}
	metadata.power = metadata.power || {}
	//if (process.browser) {
		/* async () => {
			ratings(_id)
		} */
	//}

  return {...metadata, filename, _id, html, sort}
}

export function calcaverage(_id, profile, power) {
	let a = {},
		av = {},
		i = 0
	for (let p of posts) {
		if (p._id === _id) {
			p.profile = profile
			p.power = power
		}
		for (let [key, value] of Object.entries(p.profile)) {
			//for (let [key, value] in p.profile) {
			a[key] = (a[key] || 0) + value
		}
		for (let [key, value] of Object.entries(p.power)) {
			//for (let [key, value] in p.power) {
			a[key] = (a[key] || 0) + value
		}
		i++
	}
	for (let [key, value] of Object.entries(a)) {
		av[key] = value / i
	}
	return av
}

export function calcrank(_id, level) {
	let lev = []
	for (let p of posts) {
		if (p._id === _id) {
			lev.push({ id: _id, level: level })
		} else {
			lev.push({ id: p._id, level: ((Object.values(p.profile).reduce((t, n) => t + (n - 1), 0) + Object.values(p.power).reduce((t, n) => t + (n - 1), 0)) / 9.6) })
		}
	}
	lev.sort((a, b) => parseFloat(b.level) - parseFloat(a.level));
	//lev = _.chain(lev).orderBy('level', 'desc')
	let i = 1
	for (let [key, value] of Object.entries(lev)) {
		if (lev[key].id == _id) return i //+ '.'
		i++
	}
	return '?'
}

export async function firestore() {
	if (process.browser) {
		return window.db
	} else {
		const firebase = await import('firebase')
		const firebaseConfig = {
			apiKey: "AIzaSyD3s7aGtMrrXDSnXi-_F1VSmUspINoOC0A",
			authDomain: "best-dictator.firebaseapp.com",
			databaseURL: "https://best-dictator.firebaseio.com",
			projectId: "best-dictator",
			storageBucket: "best-dictator.appspot.com",
			messagingSenderId: "711065175489",
			appId: "1:711065175489:web:bd836a261972ef82015b40"
		}
		if (firebase.apps.length == 0) {
			let app = firebase.initializeApp(firebaseConfig)
			return app.firestore()
		}
		else {
			return firebase.apps[0].firestore()
		}
	}
}