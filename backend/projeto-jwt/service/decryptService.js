const validaPassword = (inputPwt, dbPwd) => {
    return inputPwt === dbPwd;
};

module.exports = {
    validaPassword
};