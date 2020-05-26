install: npm install

brain-games: 
	 node --experimental-modules bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
