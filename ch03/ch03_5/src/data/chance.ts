import Chance from 'chance'
const chance = new Chance()

export const randomUUID = (): string => chance.guid()
export const randomName = (): string => chance.name()
export const randomEmail = (): string => chance.email()
export const randomId = (): string => chance.fbid()
export const randomJobTitle = (): string => chance.profession()
export const randomCompany = (): string => chance.company()
export const randomSentence = (words = 5): string => chance.sentence({words})
export const randomTitleText = (words = 3) => chance.sentence({words})
export const randomParagraph = (sentences = 3): string => chance.paragraph({sentences})
