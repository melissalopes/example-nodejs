const mongoose = require('mongoose');
const DatabaseEnvs = require('./envs/database-env');

class DatabaseConfig {
    async connect() {
        try {
            console.info(`Connecting to Database uri: ${DatabaseEnvs.URI}`);
            await mongoose.connect(DatabaseEnvs.URI, {
                serverSelectionTimeoutMS: 5000,
                dbName: DatabaseEnvs.DATABASE,
            });
            console.info('Database successfully connected!');
        } catch (error) {
            console.error('Could not connect to database:', error);
            throw error;
        }
    }
}

module.exports = DatabaseConfig;
