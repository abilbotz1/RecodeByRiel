//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6282146218274'] //ur owner number
global.ownername = "𝑶𝑾𝑵𝑬𝑹 𝑹𝑰𝑬𝑳𝑩𝑶𝑻𝒁🐤" //ur owner name
global.ytname = "𝑮𝑨𝑫𝑨 𝒀𝑻 𝑩𝑮🗿" //ur yt chanel name
global.socialm = "𝑫𝑶𝑵𝑨𝑺𝑰 𝑩𝑨𝑵𝑮 𝑪𝑯𝑨𝑻 𝑶𝑾𝑵𝑬𝑹🗿" //ur github or insta name
global.location = "Indonesia, Kaltim,samarinda" //ur location

//bot bomdy 
global.owner = ['6282146218274']
global.ownertag = '6282146218274' //ur tag number
global.botname = ' 𝗥 𝗜 𝗘 𝗟 𝗕 𝗢 𝗧 𝗭 - 𝗠𝗗' //ur bot name
global.linkz = "donasi bang jan make doang kontl🐤" //your theme url which will be displayed on whatsapp
global.websitex = "donasi kontll mke doang lu🗿" //ur website to be displayed
global.botscript = 'kontol lu kecil🗿' //script link
global.reactmoji = "🐤" //ur menu react emoji
global.themeemoji = "👾" //ur theme emoji
global.packname = "𝑹𝒊𝒆𝒍 𝒃𝒐𝒕 𝒔𝒕𝒊𝒄𝒌𝒆𝒓\n\n\n\n\n\n\n\n\n\n\n2022" //ur sticker watermark packname
global.author = "𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒓𝒊𝒆𝒍𝒐𝒇𝒄" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['916909137213'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: '𝑭𝑰𝑻𝑼𝑹 𝑰𝑵𝑰 𝑯𝑨𝑵𝒀𝑨 𝑩𝑰𝑺𝑨 𝑫𝑰𝑮𝑼𝑵𝑨𝑲𝑨𝑵 𝑶𝑳𝑬𝑯 𝑨𝑫𝑴𝑰𝑵!',
    botAdmin: '𝑱𝑨𝑫𝑰𝑲𝑨𝑵 𝑨𝑫𝑴𝑰𝑵 𝑫𝑼𝑳𝑼 𝑻𝑶𝑫',
    owner: '𝑬𝑴𝑨𝑵𝑮𝑵𝒀𝑨 𝑳𝑼 𝑶𝑾𝑵𝑬𝑹 𝑲𝑨𝑯 𝑫𝑬𝑲!',
    group: '𝑭𝑰𝑻𝑼𝑹 𝑯𝑨𝑵𝒀𝑨 𝑩𝑰𝑺𝑨 𝑫𝑰𝑮𝑼𝑵𝑨𝑲𝑨𝑵 𝑫𝑰𝑫𝑨𝑳𝑨𝑴 𝑮𝑹𝑶𝑼𝑷',
    private: '𝑮𝑼𝑵𝑨𝑲𝑨𝑵 𝑭𝑰𝑻𝑼𝑹 𝑰𝑵𝑰 𝑫𝑰𝑷𝑹𝑰𝑽𝑨𝑻𝑬 𝑩𝑶𝑻𝒁!',
    bot: '𝑭𝑰𝑻𝑼𝑹 𝑲𝑯𝑼𝑺𝑼𝑺 𝑩𝑶𝑻',
    wait: '𝑺𝑨𝑩𝑨𝑹 𝑫𝑰 𝑷𝑹𝑶𝑺𝑬𝑺 𝑻𝑶𝑫...',
    linkm: 'Where is the link?',
    error: '𝑬𝑹𝑹𝑶𝑹 𝑪𝑶𝑲...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
