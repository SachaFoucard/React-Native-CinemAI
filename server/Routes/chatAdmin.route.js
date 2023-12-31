const chatAdminModel = require('../Models/chatAdmin.model')
const admingChatRoutes = require('express').Router()


admingChatRoutes.post('/addchat', async (req, res) => {
    let {mail,chat,fromUser} = req.body;
    let text = await chatAdminModel.AddTochat(mail,chat,fromUser);
    res.status(201).json(text)
  }
  )

  admingChatRoutes.post('/chatByMail', async (req, res) => {
    let { mail, chat } = req.body;
    let text = await chatAdminModel.GetChatByMail(mail, chat);
    res.status(201).json(text)
  }
  )

  admingChatRoutes.post('/allchats', async (req, res) => {
    let text = await chatAdminModel.GetAllChats();
    res.status(201).json(text)
  } 
  )

  admingChatRoutes.post('/removeChat', async (req, res) => {

    let { mail } = req.body;
    try {
        const removedChat = await chatAdminModel.RemoveChat(mail);
        res.status(201).json(removedChat)
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  } 
  )

  module.exports = admingChatRoutes