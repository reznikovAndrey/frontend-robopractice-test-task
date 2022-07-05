install:
	npm ci

dev:
	npm start

serve:
	npm run server

production:
	npm run build

lint:
	npx eslint --ext .jsx .

fix:
	npx eslint --fix --ext .jsx .