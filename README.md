# express-handlebars-extend
Extend and Block helpers for [express-handlebars](https://github.com/ericf/express-handlebars).

----
## Usage

I created this package to use alongside with express-handlebars. I mainly use this to dynamically load specific CSS/JS files into different handlebars template files.

All credits go to:

[defunctzombie](https://github.com/defunctzombie/handlebars-extend-block)
for creating the initial helper functions. If you want a more general solution that you can plug into any npm handlebars package, I suggest using his library instead.


----
>Example Usage

    var handlebars = require('express-handlebars');
    var hbsExtend = require('express-handlebars-extend');
    var hbs = hbsExtend(handlebars.create({defaultLayout: 'layout'}));
    app.engine('handlebars', hbs.engine);

----
## Changelog
* March 21, 2016:  Initial module with no tests

----
## TODO
1. Write solid tests
2. Make an examples directory