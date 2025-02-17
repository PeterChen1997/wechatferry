import type { WechatferryAgentEventMessage } from '@wcfpeter/agent'
import type { WechatferryPuppet } from '../puppet'
import type { EventPayload } from './events'

export async function messageParser(_puppet: WechatferryPuppet, message: WechatferryAgentEventMessage): Promise<EventPayload> {
  return message
}
