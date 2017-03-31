import {channels, creator} from './mockedData'

const resolvers = {
  Query: {
    channels: () => channels,
    creator: () => creator
  }
}

export default resolvers
