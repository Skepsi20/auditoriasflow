export interface answer {
    eventId: string,
    assignedTo: string,
    image?: Array<string>,
    questions: Array<answerDetail>
  }

export interface answerDetail{
  resultId?: string,
  description: string,
  selection?: boolean,
  comments: string,
  image?: Array<string>
}
