import { gql } from '@apollo/client'

export const GET_SUBREDDIT_BY_TOPIC = gql`
    getSubredditByTopic(topic: String!) {
        getSubredditByTopic(topic: $topic) {
            id
            topic
            created_at
        }
    }
`
