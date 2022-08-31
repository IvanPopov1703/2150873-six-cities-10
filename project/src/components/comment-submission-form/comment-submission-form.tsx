import {ChangeEvent, FormEvent, useState} from 'react';
import {RATING_VALUES} from '../../const';
import FormRatingInput from '../form-rating-input/form-rating-input';
import {ReviewDataType} from '../../types/reviews';
import {useAppDispatch} from '../../hooks';
import {postReviewAction} from '../../store/api-actions';

type CommentSubmissionFormProps = {
  offerId: number
};

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

function CommentSubmissionForm({offerId}: CommentSubmissionFormProps): JSX.Element {

  const [formData, setFormData] = useState({
    review: '',
    rating: 0,
    isValid: false,
  });

  const dispatch = useAppDispatch();

  const handleTextareaAndInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = event.target;
    const isValid = value.length >= MIN_REVIEW_LENGTH && value.length <= MAX_REVIEW_LENGTH;

    setFormData({
      ...formData,
      [name]: value,
      isValid: isValid
    });
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    onSubmit({
      id: offerId,
      rating: Number(formData.rating),
      comment: formData.review,
    });

    setFormData({
      review: '',
      rating: 0,
      isValid: false,
    });
  };

  const onSubmit = (reviewData: ReviewDataType) => {
    dispatch(postReviewAction(reviewData));
  };

  return (
    <form className="reviews__form form" onSubmit={handleFormSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_VALUES.map((item) => <FormRatingInput key={item} value={item} onInputChange={handleTextareaAndInputChange} />)}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaAndInputChange}
        value={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={!formData.review || !formData.rating || !formData.isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentSubmissionForm;
