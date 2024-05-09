class DatabaseEnvs {
    static URI = process.env.MONGO_URI;

    static DATABASE = process.env.MONGO_DATABASE;
}

module.exports = DatabaseEnvs;
