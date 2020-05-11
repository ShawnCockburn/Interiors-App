class User {
    constructor(idToken, email, refreshToken, expiresIn, localId, registered) {
        this.idToken = idToken;
        this.email = email;
        this.refreshToken = refreshToken;
        this.expiresIn = expiresIn;
        this.localId = localId;
        this.registered = registered;
    }
}

export default User;