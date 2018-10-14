document.addEventListener('DOMContentLoaded', start)

const CHILD_CELLS = 3
const GENERATIONS = 3
const ROOT_SELECTOR = 'body'
const text = [
  { title: 'The outside world', desc: 'Everything outside' },
  { title: 'The inside world', desc: 'Everything inside' },
  { title: 'The micro world', desc: 'A microcosm cell' }
]

function JSCell (title, desc) {
  this.title = title
  this.desc = desc
  this.children = []
}

// Why not teach a cell how to draw itself?
//
// This is a recursive solution in a slightly different way. We're still calling the
// same function, but using JSCell's prototype to do it. The meaning of `this`
// changes each time it's called.
//
// You can also do `this.draw = function` from within JSCell, but using the
// prototype is more efficient, and it wouldn't be recursion otherwise.
// Q?? Why wouldn't it be recursion?
//
// We can get away without having an explicit 'stopping condition' here because if
// `this.children` is empty, `forEach` will simply not do anything.
JSCell.prototype.draw = function (generation = 0) {
  const cell = createCellDiv(this.title, this.desc, generation)
  this.children.forEach(function (child) {
    cell.appendChild(child.draw(generation + 1))
  })
  return cell
}

// Have little cell babies. We _do_ need a stopping condition here!
JSCell.prototype.procreate = function (generation = 0) {
  if (generation < GENERATIONS) {
    for (let i = 0; i < CHILD_CELLS; i++) {
      const child = new JSCell(
        // `${text[generation].title} #${i}`,
        text[generation].title,
        text[generation].desc
      )
      this.children.push(child)
      child.procreate(generation + 1)
    }
  }
}




function start () {
  // const outside = new JSCell(
    const outside = new JSCell(
      text[0].title,
    text[0].desc
  )
  outside.procreate(1)
  document.querySelector(ROOT_SELECTOR).appendChild(outside.draw())
}

// Helpers

function createCellDiv (title, desc, generation) {
  const e = document.createElement('div')
  e.appendChild(createElement('strong', title))
  e.appendChild(createElement('em', `${generation} : ${desc}`))
  return e
}

function createElement (tagName, text) {
  const e = document.createElement(tagName)
  const n = document.createTextNode(text)
  e.appendChild(n)
  return e
}
