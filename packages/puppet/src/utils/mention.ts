import type { WechatferryAgentChatRoomMember } from '@wcfpeter/agent'

export function mentionTextParser(message: string) {
  const mentionRegex = /@\[mention:([^\]]+)\]/g
  const mentions = message.match(mentionRegex) || []

  const mentionIds = mentions.map((mention) => {
    const match = mention.match(/@\[mention:([^\]]+)\]/)
    return match && match.length > 1 ? match[1] : null
  })

  const text = message.replace(mentionRegex, '').trim()

  return {
    mentions: mentionIds.filter(id => id) as string[],
    message: text,
  }
}

export function getMentionText(mentions: string[] = [], chatroomMembers: WechatferryAgentChatRoomMember[] = []) {
  let mentionText = ''

  if (mentions.length === 0)
    return mentionText

  mentionText = mentions.reduce((acc, mentionId) => {
    chatroomMembers.filter((member) => {
      if (member.userName === mentionId) {
        acc += `@${member.displayName} `
        return true
      }
      return false
    })

    return acc
  }, '')

  return mentionText
}
