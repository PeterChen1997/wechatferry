import type { WechatferryAgentEventMessage } from '@wcfpeter/agent'
import { WechatMessageType } from '@wcfpeter/core'
import type * as PUPPET from 'wechaty-puppet'
import type { WechatferryPuppet } from '../puppet'
import type { EventPayload } from './events'

export async function postParser(_puppet: WechatferryPuppet, message: WechatferryAgentEventMessage): Promise<EventPayload> {
  if (message.type === WechatMessageType.Moment) {
    return {
      postId: message.id,
    } as PUPPET.payloads.EventPost
  }

  return null
}
