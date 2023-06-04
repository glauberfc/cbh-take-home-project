const { deterministicPartitionKey } = require('./dpk')

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey()
    expect(trivialKey).toBe('0')
  })

  it("Returns a new partition key when input doesn't have a partition key", () => {
    const event = {}
    const trivialKey = deterministicPartitionKey(event)
    expect(trivialKey).toHaveLength(128)
  })

  it('Returns the event partition key converted to string when input has one with other type', () => {
    const event = {
      partitionKey: 123456,
    }
    const trivialKey = deterministicPartitionKey(event)
    expect(trivialKey).toBe(JSON.stringify(event.partitionKey))
  })

  it('Returns a new partition key when input has one with string type and with length greater than the max key length', () => {
    const event = {
      partitionKey:
        '123456123456123456123456123456123456112345612345623456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456123456',
    }
    const trivialKey = deterministicPartitionKey(event)
    expect(trivialKey).not.toBe(JSON.stringify(event.partitionKey))
    expect(trivialKey).toHaveLength(128)
  })

  it('Returns the event partition key when it is a string with length less than the max key length', () => {
    const event = {
      partitionKey:
        'a69f73cca23a9ac5c8b567dc185a756e97c982164fe25859e0d1dcc1475c80a615b2123af1f5f94c11e3e9402c3ac558f500199d95b6d3e301758586281dcd26',
    }
    const trivialKey = deterministicPartitionKey(event)
    expect(trivialKey).toBe(event.partitionKey)
  })
})
