export type ReviewUserType = {
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
  user: ReviewUserType,
};

export type ReviewsType = ReviewType[];

export type ReviewDataType = {
  id: number,
  rating: number,
  comment: string,
};
