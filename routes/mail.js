var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(process.env.SMTP_EMAIL);

var template = (tk)=>{return `


<table cellpadding="0" cellspacing="0" width="100%" class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218body m_-1539688994864302732m_-2312333756849295067gmail_msg m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164height-auto" border="0" style="border-spacing:0;border-collapse:collapse;vertical-align:top;height:100%;width:100%;table-layout:fixed">
      <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
          <td class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218center m_-1539688994864302732m_-2312333756849295067gmail_msg" align="center" valign="top" style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;text-align:center;background-color:#072347;padding-top:3em">

              <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
                <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
                  <td width="100%" style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;background-color:#072347" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
                    
                    
                    <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218container m_-1539688994864302732m_-2312333756849295067gmail_msg" style="border-spacing:0;border-collapse:collapse;vertical-align:top;max-width:500px;margin:0 auto;text-align:inherit"><tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><td width="100%" style="word-break:break-word;border-collapse:collapse!important;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218block-grid m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218two-up m_-1539688994864302732m_-2312333756849295067gmail_msg" style="border-spacing:0;border-collapse:collapse;vertical-align:top;width:100%;max-width:500px;color:#333;background-color:transparent"><tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;background-color:transparent;text-align:center;font-size:0" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><div class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218col m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218num6 m_-1539688994864302732m_-2312333756849295067gmail_msg" style="display:inline-block;vertical-align:top;text-align:center;width:250px"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;background-color:transparent;padding-top:20px;padding-right:0px;padding-bottom:5px;padding-left:0px;border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><table cellpadding="0" cellspacing="0" width="100%" border="0" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
    <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
        <td align="center" style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;width:100%;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
            <div align="center" style="font-size:12px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
                <a href="https://nvision.org.in" class="m_-1539688994864302732m_-2312333756849295067gmail_msg" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://nvision.org.in&amp;source=gmail&amp;ust=1482663455986000&amp;usg=AFQjCNF9_zDQKfEDZws2YD9jsFWygs-Y2Q">
                    <img class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218center m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218fullwidth m_-1539688994864302732m_-2312333756849295067gmail_msg CToWUd" align="center" border="0" src="https://s3-ap-southeast-1.amazonaws.com/nvision2k17/logos/grey_logo2017.png" alt="nvision 2017" title="nvision 2017" style="outline:none;text-decoration:none;clear:both;display:block;border:none;height:auto;line-height:100%;margin:0 auto;float:none;width:100%!important;max-width:250px" width="250">
                </a>

            </div>
        </td>
    </tr>
</tbody></table>
</td></tr></tbody></table></div><div class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218col m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218num6 m_-1539688994864302732m_-2312333756849295067gmail_msg" style="display:inline-block;vertical-align:top;text-align:center;width:250px"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;background-color:transparent;padding-top:20px;padding-right:0px;padding-bottom:20px;padding-left:0px;border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><table cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
  <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:20px;padding-right:5px;padding-bottom:20px;padding-left:10px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
      <div style="color:#6e6f7a;line-height:150%;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
      	<div style="font-size:12px;line-height:18px;color:#6e6f7a;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;text-align:left" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><p style="margin:0;font-size:12px;line-height:18px;color:#fff" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">IIT Hyderabad's Techno-Management Fest. <span class="aBn" data-term="goog_826155515" tabindex="0"><span class="aQJ">Jan 20<sup>th</sup>-22<sup>nd</sup></span></span></p></div>
      </div>
    </td>
  </tr>
</tbody></table>
</td></tr></tbody></table></div></td></tr></tbody></table></td></tr></tbody></table>
                    
                    
                  </td>
                </tr>
              </tbody></table>

              <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
                <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
                  <td width="100%" style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;background-color:#072347" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
                    
                    
                    <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218container m_-1539688994864302732m_-2312333756849295067gmail_msg" style="border-spacing:0;border-collapse:collapse;vertical-align:top;max-width:500px;margin:0 auto;text-align:inherit"><tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><td width="100%" style="word-break:break-word;border-collapse:collapse!important;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218block-grid m_-1539688994864302732m_-2312333756849295067gmail_msg" style="border-spacing:0;border-collapse:collapse;vertical-align:top;width:100%;max-width:500px;color:#333;background-color:transparent"><tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;background-color:transparent;text-align:center;font-size:0" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><div class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218col m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218num12 m_-1539688994864302732m_-2312333756849295067gmail_msg" style="display:inline-block;vertical-align:top;width:100%"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;background-color:transparent;padding-top:30px;padding-right:0px;padding-bottom:30px;padding-left:0px;border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><table cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
  <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:25px;padding-right:10px;padding-bottom:10px;padding-left:10px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
      <div style="color:#ffffff;line-height:120%;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
      	<div style="font-size:12px;line-height:14px;color:#ffffff;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;text-align:left" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><p style="margin:0;font-size:18px;line-height:22px;text-align:center" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><span style="font-size:24px;line-height:28px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><strong class="m_-1539688994864302732m_-2312333756849295067gmail_msg">Welcome to &eta;vision!</strong></span></p></div>
      </div>
    </td>
  </tr>
</tbody></table>


<table cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
  <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
      <div style="color:#b8b8c0;line-height:150%;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
      	<div style="line-height:18px;color:rgb(184,184,192);font-family:Arial,&quot;Helvetica Neue&quot;,Helvetica,sans-serif;text-align:left" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><p style="font-size:14px;margin:0px;line-height:21px;text-align:center" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><br class="m_-1539688994864302732m_-2312333756849295067gmail_msg"></p><p style="font-size:14px;margin:0px;line-height:21px;text-align:center" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><strong class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><span style="color:#fff;font-size:16px;line-height:24px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">Here is the last step for signup</span></strong></p></div>
      </div>
    </td>
  </tr>
</tbody></table>

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
  <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
    <td class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218button-container m_-1539688994864302732m_-2312333756849295067gmail_msg" align="center" style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:15px;padding-right:10px;padding-bottom:10px;padding-left:10px">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
        <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
          <td width="100%" class="m_-1539688994864302732m_-2312333756849295067m_-4509922084917371419m_-1061014613082369164m_-4478787373813853678m_2355634792239783218button m_-1539688994864302732m_-2312333756849295067gmail_msg" align="center" valign="middle" style="word-break:break-word;border-collapse:collapse!important;vertical-align:top">
            
            
            <div align="center" style="display:inline-block;border-radius:25px;max-width:25%;width:100%;border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-spacing:0;border-collapse:collapse;vertical-align:top;height:42" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
                <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><td valign="middle" style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;border-radius:25px;color:#ffffff;background-color:#00ccff;padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:20px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;text-align:center" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
            
                  <a href="https://nvision.org.in/verify?token=${tk}" style="display:inline-block;text-decoration:none;text-align:center;background-color:#00ccff;color:#ffffff;text-shadow:0 0 3px #000" class="m_-1539688994864302732m_-2312333756849295067gmail_msg" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://hack.nvision.org.in&amp;source=gmail&amp;ust=1482663455986000&amp;usg=AFQjCNHVGWNkIPBvHK7q33pZNgQTZtERnA"> <span style="font-size:16px;line-height:32px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><span style="font-size:14px;line-height:28px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">Click me!</span></span>
                  </a>
              
                </td></tr></tbody></table>
              </div>
              
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
</tbody></table>

<table cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0;border-collapse:collapse;vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
  <tbody class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><tr style="vertical-align:top" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
      <div style="color:#b8b8c0;line-height:150%;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">
      	<div style="line-height:18px;color:rgb(184,184,192);font-family:Arial,&quot;Helvetica Neue&quot;,Helvetica,sans-serif;text-align:left" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><p style="font-size:14px;margin:0px;line-height:21px;text-align:center" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><br class="m_-1539688994864302732m_-2312333756849295067gmail_msg"></p><p style="font-size:14px;margin:0px;line-height:21px;text-align:center" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><strong class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><span style="color:#fff;font-size:16px;line-height:24px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg">to verify your email (or) copy and paste this below link in your web browser
</span></strong></p><br><p style="font-size:14px;margin:0px;line-height:21px;text-align:center" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><strong class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><span style="font-size:16px;line-height:24px" class="m_-1539688994864302732m_-2312333756849295067gmail_msg"><a style="text-decoration:none;color:#00ccff" href="https://nvision.org.in/verify?token=${tk}">https://nvision.org.in/verify?token=${tk}</a></span></strong></p></div>
      </div>
    </td>
  </tr>
</tbody></table>


</td></tr></tbody>
</table>
</div></td></tr></tbody></table></td></tr></tbody></table>
                    
                    
                  </td>
                </tr>
              </tbody></table>
          </td>
      </tr>
  </tbody>
  </table>

`;};

function sendVEmail(tk, email, cb) {
    var mailOptions = {
        from: 'nvision 2017 <'+process.env.EMAIL+'>',
        to: email,
        subject: 'Email verfication',
        text: `Verify your email here : https://nvision.org.in/verify?token=${tk}`,
        html: template(tk)
    };
    transporter.sendMail(mailOptions, function(err, info){
        if (err) return console.log(err);
        console.log('Message sent : '+info.response);
    });
}


module.exports = exports = sendVEmail;