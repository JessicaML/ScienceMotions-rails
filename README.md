# README

You should have installed

- Ruby & Rails
http://guides.railsgirls.com/install

- sqlite3
https://www.sqlite.org/index.html

- postgres
https://www.postgresql.org/

create postgres user `createuser --interactive --pwprompt` with password: `password` and username `postgres`

To run the project:

1. git clone git@github.com:JessicaML/ScienceMotions-rails.git
2. cd ScienceMotions-rails
3. yarn && bundle install
4. rake db:create
5. rake db:migrate
6. rails server

if you are having problems creating the db, try 
- rake db:reset
- rake db:create
- rake db:migrate

Live site: https://scimo.herokuapp.com


## Support us on Patreon!

We love you!! <3
https://www.patreon.com/ScienceMotions
