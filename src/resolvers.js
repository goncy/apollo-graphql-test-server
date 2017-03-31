import {channels, creator} from './mockedData'

let nextId = 3

const resolvers = {
  Query: {
    channels: () => channels,
    creator: () => creator
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = {
        id: nextId++,
        name: args.name
      }
      channels.push(newChannel)
      return newChannel
    }
  }
}

export default resolvers
