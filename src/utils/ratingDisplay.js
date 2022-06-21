import gRating from "../__ASSETS__/classification-g-square.png";
import pgRating from "../__ASSETS__/classification-pg-square.png";
import mRating from "../__ASSETS__/classification-m-square.png";
import m15Rating from "../__ASSETS__/classification-ma15-square.png";
import r18Rating from "../__ASSETS__/classification-r18-square.png";
import x18Rating from "../__ASSETS__/classification-x18-square.png";
import ctcRating from "../__ASSETS__/classification-ctc-square.png";

const ratingDisplay = (a, b) => {
  const rating = a || b;
  if (rating === "G") {
    return gRating;
  } else if (rating === "PG") {
    return pgRating;
  } else if (rating === "PG-13") {
    return mRating;
  } else if (rating === "M-15") {
    return m15Rating;
  } else if (rating === "R-18") {
    return r18Rating;
  } else if (rating === "X-18") {
    return x18Rating;
  } else {
    return ctcRating;
  }
};

export default ratingDisplay;
