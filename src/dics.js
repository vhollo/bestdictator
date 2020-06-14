import _ from 'lodash'
import all from '../static/_dics/*.md'

export const posts = _.chain(all)
  .map(transform)
  .orderBy('date', 'asc')
  .value()

export function findPost(_id) {
  return _.find(posts, {_id})
}

function transform({filename, metadata, html}) {
  const _id = filename.replace(/.md$/, '')
	const date = new Date(metadata.birthdate)
	/* metadata.birthdate = metadata.birthdate ? new Date(metadata.birthdate).toDateString().substring(4) : ''
	metadata.deathdate = metadata.deathdate ? new Date(metadata.deathdate).toDateString().substring(4) : '' */
	metadata.birthdate = metadata.birthdate ? new Date(metadata.birthdate).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : ''
	metadata.deathdate = metadata.deathdate ? new Date(metadata.deathdate).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : ''
	metadata.profile = metadata.profile || {}
	/* metadata.power = metadata.power || {} */
	
  return {...metadata, filename, _id, html, date}
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
