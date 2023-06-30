publish:
	npm publish --dry-run

test:
	npm test --test-reporter=spec

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

.PHONY: test