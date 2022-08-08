export type UserReview = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string
}

export type ReviewType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: UserReview
};

export type ReviewsType = ReviewType[];
