export class AnnouncementArticle {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public date: Date,
    public img: string
  ) {}
}
