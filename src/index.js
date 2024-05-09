const app = require('./routes/app');
const ServerEnvs = require('./configs/envs/server-env');

app.listen(ServerEnvs.PORT, () =>
    console.log(`Server online on port: ${ServerEnvs.PORT}`)
);
