require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const paginate = require('express-paginate');

const indexRouter = require('./routes/index.routes')
const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes');
const apisRouter = require('./routes/apis.routes');

const transferLocals = require('./middlewares/transferLocals');
const cookieCheck = require('./middlewares/cookieCheck');

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173'
};

const app = express();

// view engine setup
app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app
  .use(logger('dev'))
  .use(cookieParser())

  /* formularios */
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  
  /* recursos estaticos */
  .use(express.static(path.join(__dirname,'..', 'public')))

  /* soporte para métodos PUT, PATCH & DELETE */
  .use(methodOverride('_method'))

  /* configuración de session */
  .use(session({
    secret : 'Kitchening forever!!',
    resave : true,
    saveUninitialized : true
  }))

  .use(cookieCheck)
  .use(transferLocals)

  .use(paginate.middleware(10,50))

  .use(cors(corsOptions))

  /* rutas */
  .use('/', indexRouter)
  .use('/usuarios', usersRouter)
  .use('/productos', productsRouter)
  .use('/apis', apisRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
