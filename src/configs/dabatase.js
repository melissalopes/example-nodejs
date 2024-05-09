const mongoose = require('mongoose');
const DatabaseEnvs = require('./envs/database-env');
const log = require('./../utils/logger-util');

class DatabaseConfig {
    async connect() {
        try {
            log.info(`Connecting to Database uri: ${DatabaseEnvs.URI}`);
            await mongoose.connect(DatabaseEnvs.URI, {
                serverSelectionTimeoutMS: 5000,
                dbName: DatabaseEnvs.DATABASE,
            });
            log.info('Database successfully connected!');
        } catch (error) {
            log.error('Could not connect to database:', error);
            throw error;
        }
    }
}

module.exports = DatabaseConfig;
