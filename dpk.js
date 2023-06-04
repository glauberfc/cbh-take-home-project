const crypto = require('crypto')

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256

  const partitionKey = getPartitionKey(event)
  const candidate = getCandidate(partitionKey)

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash('sha3-512').update(candidate).digest('hex')
  }

  return candidate
}

function getPartitionKey(event) {
  if (event?.partitionKey) {
    return event.partitionKey
  }

  if (event) {
    const data = JSON.stringify(event)
    return crypto.createHash('sha3-512').update(data).digest('hex')
  }

  return undefined
}

function getCandidate(candidate) {
  const TRIVIAL_PARTITION_KEY = '0'

  if (candidate && typeof candidate !== 'string') {
    return JSON.stringify(candidate)
  }

  if (candidate && typeof candidate === 'string') {
    return candidate
  }

  return TRIVIAL_PARTITION_KEY
}
