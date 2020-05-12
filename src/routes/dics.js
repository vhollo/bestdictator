import _ from 'lodash'
import all from '../../static/_dics/*.md'

export const posts = _.chain(all)
  .map(transform)
  .orderBy('date', 'asc')
  .value()

export function findPost(_id) {
  return _.find(posts, {_id})
}

function transform({filename, metadata, html}) {
  const _id = filename.replace(/.md$/, '')
	const date = new Date(metadata.birthdate).toDateString().substring(4)
console.log(date)

  return {...metadata, filename, _id, html, date}
}
