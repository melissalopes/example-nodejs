class DatabaseEnvs {
    static URI =
        process.env.MONGO_URI ||
        'mongodb+srv://melmelissalopg:r5SjZtrqS7yTmr2o@teste.zr8i5vl.mongodb.net/?retryWrites=true&w=majority&appName=teste';

    static DATABASE = process.env.MONGO_DATABASE;
}

module.exports = DatabaseEnvs;
