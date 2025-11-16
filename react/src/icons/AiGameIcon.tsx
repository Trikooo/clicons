import React from 'react';
import config from '../config';

interface AiGameIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiGameIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-game)
 * @see {@link https://clicons.dev/icon/ai-game}
 */
const AiGameIcon = React.forwardRef<SVGSVGElement, AiGameIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.00195 7.5C5.12645 7.64253 4.48184 7.90465 3.95937 8.3867C2.81421 9.44326 2.65433 11.1887 2.33456 14.6797L2.00778 18.2473C1.88378 20.0049 3.25864 21.5 4.99899 21.5H5.74567C6.97191 21.5 8.0746 20.7441 8.53002 19.5913L9.27241 17.7121C9.51592 17.0956 9.63768 16.7874 9.89165 16.6134C10.1456 16.4393 10.4736 16.4393 11.1295 16.4393H12.8705C13.5264 16.4393 13.8544 16.4393 14.1084 16.6134C14.3623 16.7874 14.4841 17.0956 14.7276 17.7121L15.47 19.5913C15.9254 20.7441 17.0281 21.5 18.2543 21.5H19.001C20.7414 21.5 22.1162 20.0049 21.9922 18.2473L21.6685 14.6855C21.351 11.192 21.1922 9.44521 20.0468 8.38767C19.5241 7.905 18.8789 7.64263 18.0024 7.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.9998 12.5H17.0088'
    }
  ],
  [
    'path',
    {
      d: 'M6.99981 12.5H7.00879'
    }
  ],
  [
    'path',
    {
      d: 'M11.998 2.5L12.256 3.19703C12.5942 4.11102 12.7633 4.56802 13.0967 4.90139C13.43 5.23477 13.887 5.40387 14.801 5.74208L15.498 6L14.801 6.25792C13.887 6.59613 13.43 6.76524 13.0967 7.09861C12.7633 7.43198 12.5942 7.88898 12.256 8.80297L11.998 9.5L11.7401 8.80297C11.4019 7.88898 11.2328 7.43198 10.8994 7.09861C10.5661 6.76523 10.1091 6.59613 9.19507 6.25792L8.49805 6L9.19507 5.74208C10.1091 5.40387 10.5661 5.23477 10.8994 4.90139C11.2328 4.56802 11.4019 4.11102 11.7401 3.19703L11.998 2.5Z'
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

AiGameIcon.displayName = 'AiGameIcon';
export default AiGameIcon;
