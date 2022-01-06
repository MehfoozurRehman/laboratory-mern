import React from "react";

export default function Card({
  heading,
  infoHeading,
  infoContent,
  children,
  contentHeading,
  contentInfo,
}) {
  return (
    <div className="panel__card">
      <div className="panel__card__heading__row">
        <div className="panel__card__heading">{heading}</div>
        <div className="panel__card__about">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 7.916">
            <g
              id="Group_510"
              data-name="Group 510"
              transform="translate(-635.314 -692.446)"
            >
              <rect
                id="Rectangle_33"
                data-name="Rectangle 33"
                width="1"
                height="5.629"
                transform="translate(635.314 694.733)"
                fill="#b3b8bd"
              />
              <rect
                id="Rectangle_34"
                data-name="Rectangle 34"
                width="1"
                height="1.172"
                transform="translate(635.314 692.446)"
                fill="#b3b8bd"
              />
            </g>
          </svg>
          <div className="panel__card__info">
            <div className="panel__card__info__heading">{infoHeading}</div>
            <div className="panel__card__info__content">{infoContent}</div>
          </div>
        </div>
      </div>
      <div className="panel__card__content__row">
        {contentHeading ? (
          <div className="panel__card__content__heading__row">
            <div className="panel__card__content__heading">
              {contentHeading}
            </div>
            <div className="panel__card__content__info">{contentInfo}</div>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
