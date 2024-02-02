// import React, { useState } from "react";

// const ProductImageSlider = ({ productData }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNextImage = () => {
//     setCurrentImageIndex(
//       prevIndex => (prevIndex + 1) % productData.prodSubPics.length,
//     );
//   };

//   const handlePrevImage = () => {
//     setCurrentImageIndex(
//       prevIndex =>
//         (prevIndex - 1 + productData.prodSubPics.length) %
//         productData.prodSubPics.length,
//     );
//   };

//   return (
//     <div className="product-image-slider">
//       <div className="image-container">
//         <img
//           src={`/pic/${
//             currentImageIndex === 0
//               ? productData.prodMainPic
//               : productData.prodSubPics[currentImageIndex - 1].prodPics
//           }`}
//           alt="제품 이미지"
//         />
//       </div>
//       <div className="controls">
//         <button onClick={handlePrevImage}>이전</button>
//         <button onClick={handleNextImage}>다음</button>
//       </div>
//     </div>
//   );
// };

// export default ProductImageSlider;
