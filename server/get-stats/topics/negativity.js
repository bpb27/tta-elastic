const { wrapper } = require('./utils');

const name = 'negativity';

const search = 'disaster* | dishonest* | dope* | fool* | hater* | horr* | incompeten* | loser* | awful | bad | boring | clown | desperate | disgusting | dumb | dummy | enemy | overrated | pathetic | sick | stupid | terrible | weak';

const body = wrapper(builder => (
  builder
    .orFilter('wildcard', 'text', 'disaster*')
    .orFilter('wildcard', 'text', 'dishonest*')
    .orFilter('wildcard', 'text', 'dope*')
    .orFilter('wildcard', 'text', 'fool*')
    .orFilter('wildcard', 'text', 'hater*')
    .orFilter('wildcard', 'text', 'horr*')
    .orFilter('wildcard', 'text', 'incompeten*')
    .orFilter('wildcard', 'text', 'loser*')
    .orFilter('match', 'text', 'awful')
    .orFilter('match', 'text', 'bad')
    .orFilter('match', 'text', 'boring')
    .orFilter('match', 'text', 'clown')
    .orFilter('match', 'text', 'desperate')
    .orFilter('match', 'text', 'disgusting')
    .orFilter('match', 'text', 'dumb')
    .orFilter('match', 'text', 'dummy')
    .orFilter('match', 'text', 'enemy')
    .orFilter('match', 'text', 'overrated')
    .orFilter('match', 'text', 'pathetic')
    .orFilter('match', 'text', 'sick')
    .orFilter('match', 'text', 'stupid')
    .orFilter('match', 'text', 'terrible')
    .orFilter('match', 'text', 'weak')
));

module.exports = { body, name, search };
