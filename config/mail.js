const nodeMailer=require('nodemailer')

const mailHandler=async(reciever, sub, temp, fileAttachment=[])=>{
  
  try {

    const transporter= await nodeMailer.createTransport({
      service:process.env.MAIL_SERVICE,
      port:process.env.MAIL_PORT,
      host:process.env.MAIL_HOST,

      auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
      }

    })

    //mail sender

    let res=await transporter.sendMail({

      from:process.env.MAIL_USER,
      to:reciever,
      subject:sub, 
      html:`<div> ${temp} </div>`,
      attachments:fileAttachment
      
    })

    return res

  } 

  catch (err) {
    return err.message
  }

}

module.exports=mailHandler