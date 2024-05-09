const app = require('./routes/app');
const ServerEnvs = require('./configs/envs/server-env');
const log = require('./utils/logger-util');

app.listen(ServerEnvs.PORT, () =>
    log.info(`Server online on port: ${ServerEnvs.PORT}`)
);
