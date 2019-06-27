const Account = require('../../models/account-model')
const mongoose = require('mongoose')
const express = require('express'),
    router = express.Router()



//criar no banco
router.post('/', async(req, res) => {
    const NewAccount = new Account({
        titular: req.body.titular,
        senha: req.body.senha,
        saldo: req.body.saldo
    })
    await NewAccount.save()
    res.send('saved')
    console.log('Account Created: \n')
    console.log(NewAccount)
})


//transferência
router.patch('/:idSender/:idReceiver')

//saque, deposito
router.post('/:id')



exports.router = router