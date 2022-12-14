const router = require('express').Router();

const adminRoutes = require('./admin.routes'),
    authRoutes = require('./auth.routes'),
    verifyRoutes = require('./verify.routes'),
    transactionRoutes = require('./transaction.routes'),
    downloadInvoice = require('./invoice.routes'),
    flutter = require('./flutter.routes');


router.use('/', adminRoutes)
.use('/auth', authRoutes)
.use('/verify', verifyRoutes)
.use('/transaction', transactionRoutes)
.use('/invoice', downloadInvoice)
.use('/flutter', flutter)


module.exports = router;