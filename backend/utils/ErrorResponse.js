class ErrorResponse extends Error{
    constructor(messages, statusCode){
        super(messages);
        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse;