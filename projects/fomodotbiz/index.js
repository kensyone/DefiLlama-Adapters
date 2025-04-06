const { getUniTVL } = require('../helper/unknownTokens')
 
 module.exports = {
   misrepresentedTokens: true,
   tara: {
     tvl: getUniTVL({
       fetchBalances: true,
       useDefaultCoreAssets: true,
       factory: '0x4a0Ff253BcE0CB539faC23517FFD968308220C5B',
     })
   }
 }