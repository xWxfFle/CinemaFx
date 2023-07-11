type Professions = 'actor' | 'director'
type AgeRating = 'G' | 'PG' | 'PG13' | 'R' | 'NC17'

interface Country {
  name: string
  code: string
  code2: string
  id: number
}

export interface FilmPerson {
  id: string
  professions: Professions[]
  fullName: string
}

export interface Film {
  id: string
  name: string
  originalName: string
  description: string
  releaseDate: string
  actors: FilmPerson[]
  directors: FilmPerson[]
  runtime: number
  ageRating: AgeRating
  genres: string[]
  userRating: { kinopois: string; imdn: string }
  img: string
  country: Country
}
