const RetroCompatResolver = require('resolvers/RetroCompatResolver.js');

//override
//const overrideMapping = require('./class-extends');
const overrideMapping = require('./tests/units/class-extends.js');

//petet inutile
getBaseDir(){
    return '/home/david/Workspace/PrestaShop/poc-extends-qa';
}

let retroCompatResolver = RetroCompatResolver('177');
expect(retroCompatResolver.getRequire('youpi.js')).to.equal('youpi.js');
expect(retroCompatResolver.getRequire('tralala.js')).to.equal('tralala-override.js');

let retroCompatResolver = RetroCompatResolver('178');
expect(retroCompatResolver.getRequire('youpi.js')).to.equal('youpi.js');
expect(retroCompatResolver.getRequire('tralala.js')).to.equal('tralala.js');
