const { StatusCodes } = require('http-status-codes');

class Ok extends Error {
    constructor(message) {
        super();
        this.status = StatusCodes.OK;
        this.message = message;
    }
}

class Created extends Error {
    constructor(message) {
        super();
        this.status = StatusCodes.CREATED;
        this.message = message;
    }
}

class Updated extends Error {
    constructor(message) {
        super();
        this.status = StatusCodes.CREATED;
        this.message = message;
    }
}

class BadRequest extends Error {
    constructor(message) {
        super();
        this.status = StatusCodes.BAD_REQUEST;
        this.message = message;
    }
}

class PreConditionFailed extends Error {
    constructor(message) {
        super();
        this.status = StatusCodes.PRECONDITION_FAILED;
        this.message = message;
    }
}

class NotFound extends Error {
    constructor(message) {
        super();
        this.status = StatusCodes.NOT_FOUND;
        this.message = message;
    }
}

class InternalServerError extends Error {
    constructor(message) {
        super();
        this.status = StatusCodes.INTERNAL_SERVER_ERROR;
        this.message = message;
    }
}

module.exports = {
    Ok,
    Created,
    Updated,
    BadRequest,
    PreConditionFailed,
    NotFound,
    InternalServerError,
};
