publish:
	npm publish --dry-run

test:
	npm-test

test-coverage:
	# TODO: set global flag --experimental-test-coverage
	npm test

lint:
	npx eslint .

.PHONY: test