import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
var GraphQLDate = require('graphql-date');

export const emergencyAlert = new GraphQLObjectType({
  name: 'alert',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      patientUserName: {
        type: GraphQLString
      },
      message: {
        type: GraphQLString
      }
    }
  }
});

export const dailyInfo = new GraphQLObjectType({
  name: 'patientDailyInfo',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      patientUserName: {
        type: GraphQLString
      },
      temperature: {
        type: GraphQLString
      },
      heartRate: {
        type: GraphQLString
      },
      weight: {
        type: GraphQLString
      },
      bloodPressure: {
        type: GraphQLString
      },
      respiratoryRate: {
        type: GraphQLString
      },
      measuredDate: {
        type: GraphQLDate
      }
    }
  }
});
