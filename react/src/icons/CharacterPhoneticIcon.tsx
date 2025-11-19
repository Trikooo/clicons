import React from 'react';
import config from '../config';

interface CharacterPhoneticIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CharacterPhoneticIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/character-phonetic)
 * @see {@link https://clicons.dev/icon/character-phonetic}
 */
const CharacterPhoneticIcon = React.forwardRef<SVGSVGElement, CharacterPhoneticIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.8265 15.914C21.547 17.6702 20.1625 19.0475 18.3974 19.3257C18.0767 19.3762 17.6935 19.3762 16.9269 19.3762C16.1605 19.3762 15.7772 19.3762 15.4566 19.3257C13.6913 19.0475 12.307 17.6702 12.0274 15.914C11.9766 15.595 11.9766 15.2137 11.9766 14.4511V11.1678M11.9766 11.1678V9.52611C11.9766 8.76355 11.9766 8.38226 12.0274 8.06324C12.307 6.30708 13.6913 4.92975 15.4566 4.65161C15.7772 4.60107 16.1605 4.60107 16.9269 4.60107C17.6935 4.60107 18.0767 4.60107 18.3974 4.65161C20.1625 4.92975 21.547 6.30708 21.8265 8.06324C22.0246 9.30724 22.1236 9.92925 21.735 10.474C21.6818 10.5485 21.604 10.6387 21.538 10.7024C21.0558 11.1678 20.2841 11.1678 18.7406 11.1678H11.9766Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.31275 7.01759C2.73674 6.26621 3.90352 4.92483 5.39093 4.66213C6.87834 4.39943 9.43964 4.26817 10.7078 5.8272C11.976 7.38622 11.976 9.04262 11.976 11.1966M11.976 11.1966C11.976 12.4377 11.9409 12.8351 11.8271 13.6534C11.6924 14.6227 11.6174 16.3942 10.4447 17.6687C9.99537 18.157 9.44783 18.5588 8.85947 18.8657C8.12881 19.2469 7.07561 19.5866 5.96573 19.4788C3.87969 19.2761 2.31274 18.0786 2.03291 15.9582C1.85039 14.5752 2.50517 13.1483 3.20313 12.4377C3.90109 11.727 4.76599 11.1179 6.25587 11.1966C7.63844 11.2697 10.6459 11.2135 11.976 11.1966Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

CharacterPhoneticIcon.displayName = 'CharacterPhoneticIcon';
export default CharacterPhoneticIcon;
