import { mastodonentities } from './entities'

export namespace cuckoostore {

  export interface stateInfo {
    OAuthInfo: OAuthInfo
    mastodonServerUri: string
    currentUserAccount: mastodonentities.Account

    timelines: {
      home: Array<mastodonentities.Status>
      public: Array<mastodonentities.Status>
      direct: Array<mastodonentities.Status>
    }

    contexts: {
      [statusId: string]: mastodonentities.Context
    }
  }

  export interface OAuthInfo {
    clientId: string
    clientSecret: string
    accessToken: string
    code: string
  }

}
