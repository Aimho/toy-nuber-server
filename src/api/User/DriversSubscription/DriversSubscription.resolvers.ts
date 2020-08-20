const resolvers = {
  Subscription: {
    DriversSubscription: {
      subscribe: (_, __, { pubSub }) => pubSub.asyncIterator('driverUpdate'),
    },
  },
};

export default resolvers;
