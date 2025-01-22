function authenticateUser (userId, callback) {
    console.log(`Authenticating user with ID: ${userId}`);
    const isAuthenticated = true; 
    if (isAuthenticated) {
        callback(null, userId); 
    } else {
        callback("Authentication failed", null);
    }
}

function verifypaymentmethod(userId,paymentMethod, callback) {
    console.log(`Verifying payment method : ${userId}`);
    const isvalid=true;
    if (isvalid) {
        callback(null, paymentMethod);
    } else {
        callback("Invalid payment method", null);
    }
}

function processPayment( paymentMethod, amount, callback) {
    console.log(`Processing payment for ${amount} using ${paymentMethod}`);
    const isProcessed = true;
    if (isProcessed) {
        callback(null, `Payment processed successfully for ${amount}`);
    } else {
        callback("Payment failed", null);
    }
}

function updateAccountBalance(userId, amount, callback) {
    console.log(`Updating account balance for user ID: ${userId} by $${amount}`);
    const isUpdated = true; 
    if (isUpdated) {
        callback(null, "Account balance updated successfully"); 
    } else {
        callback("Failed to update account balance", null);
    }
}

function notifyUser (userId, message, callback) {
    console.log(`Notifying user ID: ${userId} with message: ${message}`);
    const isNotified = true; 
    if (isNotified) {
        callback(null, "Notification sent successfully"); 
    } else {
        callback("Failed to send notification", null);
    }
}

const userId=123;
const paymentMethod="credit card";
const amount=500;

authenticateUser(userId, (err, authenticatedUserId) => {
    if (err) {
        console.error(err);
        return;
    }

    verifypaymentmethod(authenticatedUserId, paymentMethod, (err, verifiedPaymentMethod) => {
        if (err) {
            console.error(err);
            return;
        }
        
        processPayment(verifiedPaymentMethod, amount, (err, paymentResult) => {
            if (err) {
                console.error(err);
                return;
            }
            
            updateAccountBalance(authenticatedUserId, amount, (err, accountUpdateResult) => {
                if (err) {
                    console.error(err);
                    return;
                }
                
                notifyUser(authenticatedUserId, paymentResult, (err, notificationResult) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log(notificationResult);
                });
            });
        });
    });
            
});