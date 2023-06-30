publish:
	npm publish --dry-run

test:
	npx jest

test-coverage:
	# TODO: set global flag --experimental-test-coverage
	npx jest

lint:
	npx eslint .

.PHONY: test