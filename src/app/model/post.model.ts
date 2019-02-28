export class Post {
  get created_at(): string {
    return this._created_at;
  }

  get title(): string {
    return this._title;
  }

  get url(): string {
    return this._url;
  }

  get author(): string {
    return this._author;
  }

  get points(): number {
    return this._points;
  }

  get story_text(): string {
    return this._story_text;
  }

  get comment_text(): string {
    return this._comment_text;
  }

  get num_comments(): number {
    return this._num_comments;
  }

  get tags(): string[] {
    return this._tags;
  }

  get created_at_i(): string {
    return this._created_at_i;
  }
  private _created_at: string;
  private _title: string;
  private _url: string;
  private _author: string;
  private _points: number;
  private _story_text: string;
  private _comment_text: string;
  private _num_comments: number;
  private _tags: string[];
  private _created_at_i: string;

  constructor(obj: any) {
    this._created_at = obj.created_at;
    this._title = obj.title;
    this._url = obj.url;
    this._author = obj.author;
    this._points = obj.points;
    this._story_text = obj.story_text;
    this._comment_text = obj.comment_text;
    this._num_comments = obj.num_comments;
    this._tags = obj.tags;
    this._created_at_i = obj.created_at_i;
  }
}

