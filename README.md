# rock-paper-scissors
A simple web app for playing rock, paper, scissors

## Instalation
### API
1. `cd` to `api/rock-paper-scissors`
2. `npm install`
3. Create a database manually in postgres with the extension for uuid_4 activated. You can activate the extension with `CREATE EXTENSION "uuid-ossp"`. The database name, host and port can be configured in `api/rock-paper-scissors/ormconfig.json`.
4. run migrations with `npm migration:run`
5. `npm start` to serve locally on port `8000`

### client
1. `cd` to `api/rock-paper-scissors`
2. `npm install`
3. `npm start` to serve locally on port `3000`

## Status
### Database
All the database tables are created in the file under `api/rock-paper-scissors/migrations`

### Endpoints
The planned endpoints are:
#### `POST game` 
For creating a new game and players that will participate.

It's suppose to create the players only if they are not already in the database, but this is not working at the moment.

#### `GET game/:id` 
Show all the information related to the game: players, rounds with moves, and total rounds

NOT IMPLEMENTED.

#### `POST game/:id/round`
To submit a new round where the players made their moves
NOT IMPLEMENTED

#### `GET player`
To index all the users with their numbers of wins. Should be paginated and can be sort by number of wins

### Style
NOT IMPLEMENTED




