import React from 'react';
import config from '../config';

interface LaurelWreathRight3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LaurelWreathRight3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/laurel-wreath-right3)
 * @see {@link https://clicons.dev/icon/laurel-wreath-right3}
 */
const LaurelWreathRight3Icon = React.forwardRef<SVGSVGElement, LaurelWreathRight3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.0111 6.5C13.0111 6.5 11.179 6.4339 10.3382 4.9339C9.4975 3.4339 10.4889 2 10.4889 2C10.4889 2 12.321 2.0661 13.1618 3.5661C14.0025 5.0661 13.0111 6.5 13.0111 6.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.8171 6.5C14.2805 8.59896 16.1341 13.475 11.8415 16.1875C6.47567 19.5781 5.9878 20.5469 5.5 22'
    }
  ],
  [
    'path',
    {
      d: 'M7.9679 18.5C7.9679 18.5 11.5403 17.1364 9.49877 13.5C9.49877 13.5 5.41625 14.8636 7.9679 18.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 19.0001C8 19.0001 10.3674 15.9252 13.5 19.105C13.5 19.105 10.9923 22.6818 8 19.0001Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5094 12.9391C14.5094 12.9391 14.1124 8.85377 18.4701 9.00405C18.4701 9.00405 19.1061 13.5764 14.5094 12.9391Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.4906 12.5001C14.4906 12.5001 14.8876 8.41481 10.5299 8.56508C10.5299 8.56508 9.89393 13.1374 14.4906 12.5001Z'
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

LaurelWreathRight3Icon.displayName = 'LaurelWreathRight3Icon';
export default LaurelWreathRight3Icon;
