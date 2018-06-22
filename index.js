const app = "I don't do much."

function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten)
}

function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten)

}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()

}

function prependKitten(kitten) {
  return [kitten, ...kittens]
}
