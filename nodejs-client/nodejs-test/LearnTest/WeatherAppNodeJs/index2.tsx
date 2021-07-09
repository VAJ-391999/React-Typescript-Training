
const path = require('path');
const routeUrl  = require('./routes/routes');


//Body parser Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false}))

//homepage
app.get('/', (req, res) => res.json({ msg : "Get success.."}));

//Get static
//app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/api/members', routeUrl);

const SPORT = process.env.PORT || 4003;

app.listen(SPORT, () => console.log(`Server is running up on port ${PORT}....`))