import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { staticImages } from "../../utils/images";
import { ImageType } from "../../utils/commonType";

const ProductPreviewWrapper = styled.div`
  grid-template-columns: 72px auto;
  gap: 24px;

  @media (max-width: ${breakpoints.xl}) {
    gap: 16px;
  }

  @media (max-width: ${breakpoints.sm}) {
    gap: 12px;
    grid-template-columns: 42px auto;
  }

  @media (max-width: ${breakpoints.xs}) {
    grid-template-columns: 100%;
  }

  .preview-items {
    @media (max-width: ${breakpoints.xs}) {
      width: 80%;
      margin-right: auto;
      margin-left: auto;
      order: 2;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }
  }

  .preview-item {
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    transition: ${defaultTheme.default_transition};

    @media (max-width: ${breakpoints.sm}) {
      width: 40px;
      height: 40px;
    }

    &:hover {
      opacity: 0.9;
      outline: 1px solid ${defaultTheme.color_gray};
    }

    &-wrapper {
      padding-top: 4px;
      padding-bottom: 4px;

      @media (max-width: ${breakpoints.xs}) {
        display: flex;
        justify-content: center;
      }
    }
  }

  .preview-display {
    height: 600px;
    overflow: hidden;

    @media (max-width: ${breakpoints.md}) {
      height: 520px;
    }

    @media (max-width: ${breakpoints.sm}) {
      height: 400px;
    }

    @media (max-width: ${breakpoints.xs}) {
      height: 320px;
    }
  }
`;

const ProductPreview: React.FC<{
  previewImages: ImageType[];
}> = ({ previewImages }) => {
  const [activePreviewImage, setActivePreviewImage] = useState<string>(
    staticImages.ground_football
  );

  useEffect(() => {
    if (previewImages?.length > 0) {
      setActivePreviewImage(previewImages[0]?.url)
    }
  }, [previewImages])

  const handlePreviewImageChange = (previewImage: string) => {
    setActivePreviewImage(previewImage);
  };

  return (
    <ProductPreviewWrapper className="grid items-center">
      <div className="preview-items w-full">
        {previewImages?.map((previewImage) => {
          return (
            <div
              className="preview-item-wrapper"
              key={previewImage.id}
              onClick={() => handlePreviewImageChange(previewImage.url)}
            >
              <div className="preview-item">
                <img
                  src={previewImage.url}
                  alt=""
                  className="object-fit-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="preview-display">
        <img src={activePreviewImage} className="object-fit-cover" alt="" />
      </div>
    </ProductPreviewWrapper>
  );
};

export default ProductPreview;

