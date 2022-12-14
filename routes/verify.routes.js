const router = require('express').Router();

const { form, verify } = require('../Controller');
const { emailService } = require('../Controller/emailService');


router.put('/verify', verify);
router.post('/setupkyc', form);
router.post('/emailing', emailService);


module.exports = router;