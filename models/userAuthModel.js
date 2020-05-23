class User {
    constructor(idToken, email, refreshToken, expiresIn, localId, registered, expiresOn) {
        this.idToken = idToken;
        this.email = email;
        this.refreshToken = refreshToken;
        this.expiresIn = expiresIn;
        this.localId = localId;
        this.registered = registered;
        this.expiresOn = expiresOn;
    }
}

export default User;