export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
    public attack: number,
    public defense: number,
  ) {}

   get imageUrl (): string {
    return `https:pokemon.images.com/${this.id}`;
   }
}
