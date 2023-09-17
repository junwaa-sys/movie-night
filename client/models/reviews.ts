export interface Reviews {
  id: number
  movie_id: string
  user_id: string
  body: string
  created_at: string
}

export type NewReview = Partial<Reviews>
