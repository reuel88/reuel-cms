class JsonWebTokenHelper {
    static formatErrors(err){
        return {
            name: err.name,
            errors: [{
                message: err.message,
                expiredAt: err.expiredAt
            }],
        }
    }
}

module.exports = JsonWebTokenHelper;