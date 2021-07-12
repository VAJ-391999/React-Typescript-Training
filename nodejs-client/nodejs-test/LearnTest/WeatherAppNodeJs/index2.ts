const pexpress = require('express');
var appp = pexpress();
const path = require('path');
const prouteUrl  = require('./routes/routes');
const pcors = require('cors');
const pcookieParser = require('cookie-parser');

//Body parser Middleware
appp.use(pexpress.json());
appp.use(pcookieParser());
appp.use(pexpress.urlencoded({ extended: false}))

//homepage
appp.get('/', (req: any, res: any) => res.json({ msg : "Get success.."}));

//Get static
//app.use(express.static(path.join(__dirname, 'public')));
appp.use(pcors())
appp.use('/api/members', prouteUrl);

const SPORT = process.env.PORT || 4003;

appp.listen(SPORT, () => console.log(`Server is running up on port ${SPORT}....`))