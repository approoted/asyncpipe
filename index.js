const asyncPipe = (...fns) => x => (
	fns.reduce(async (y, f) => f(await y), x)
)

module.exports = asyncPipe