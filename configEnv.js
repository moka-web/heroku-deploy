const parseArgs = require('minimist');
const dotenv = require('dotenv');
const numOfcpus= require('os').cpus().length;

dotenv.config()

//se pasa por console node server.js --PORT +num
const args = parseArgs(process.argv.slice(2))

const mode = args.MODE || process.env.MODE 


const PORT= args.PORT || process.env.PORT || 8080;
const MPASS = process.env.MONGOATLAS;
const MUSER=  process.env.USERMONGO;
const oS = process.platform
const nodeV = process.version
const paTh = process.execPath
const processId = process.pid
const folderPath =process.cwd()
const maxRSS = process.resourceUsage().maxRSS + " bytes"
const numOfProcess = numOfcpus

module.exports = {PORT, MPASS,MUSER,oS,nodeV,paTh,processId,folderPath,maxRSS,numOfProcess,mode}