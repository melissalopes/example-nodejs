CONFIGS INICIAIS PARA UMA NOVA API

git branch -M main
git add -a
git commit -m "first commit"
git remote add origin {URL DO REPOSITORIO}
git push -u origin main
git checkout -b "feature/..."

npm i express cors mongoose
npm i -D nodemon prettier eslint-config-prettier eslint-plugin-prettier husky jest dotenv http-status-codes winston joi zod 

npx eslint --init
npx husky init
npx jest --init

// configurar scripts do package.json

// criar arquivos: docker-compose DockerFile prettier-config jest.config eslint.config .gitignore .env .env.example

// criar pastas: SRC SPECS .VSCODE .HUSKY

// criar branches: homolog develop feature/... release/... 

- docker-compose up --build
