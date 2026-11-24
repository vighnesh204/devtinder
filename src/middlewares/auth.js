const adminAuth = (req, res, next) => {
    console.log("Admin authentication is getting checked...");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized access");
    } else {
        next();
    }
};

const userAuth = (req, res, next) => {
    console.log("User authentication is getting checked...");
    const token = "abc";
    const isUserAuthorized = token === "abc";
    if (!isUserAuthorized) {
        res.status(401).send("Unauthorized access");
    } else {
        next();
    }
};


module.exports = { 
    adminAuth,
    userAuth
};