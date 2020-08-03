'use strict'

const { withTimeoutOption } = require('ipfs/src/core/utils')

module.exports = ({ bitswap }) => {
  return withTimeoutOption(async function ledgerForPeer (peerId) { // eslint-disable-line require-await
    const ledger = bitswap.ledgerForPeer(peerId)

    return ledger
  })
}
