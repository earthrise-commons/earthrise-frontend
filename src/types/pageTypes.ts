export interface Page {
  uuid: string;
  id: string;
  location: object;
}

export interface LessonPage extends Page {
  author: PersonPage;
}

export interface PersonPage extends Page {
  displayname: string;
  bio: string;
  relatedPages: Page[];
}
