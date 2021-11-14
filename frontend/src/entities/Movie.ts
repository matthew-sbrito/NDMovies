class Movie {
  id?: string;
  idimdb: string;
  title!: string;
  description!: string;
  image!: string;

  constructor({ idimdb, title, description, image }: Movie) {
    this.idimdb = idimdb?.replace("/title/", "").replace("/", "");
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

export { Movie };
