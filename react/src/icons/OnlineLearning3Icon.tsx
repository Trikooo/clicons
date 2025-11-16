import React from 'react';
import config from '../config';

interface OnlineLearning3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name OnlineLearning3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/online-learning3)
 * @see {@link https://clicons.dev/icon/online-learning3}
 */
const OnlineLearning3Icon = React.forwardRef<SVGSVGElement, OnlineLearning3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.5 19H8.51'
    }
  ],
  [
    'path',
    {
      d: 'M13 5H18M13 8H15.5'
    }
  ],
  [
    'path',
    {
      d: 'M14 15.999V16.9992C14 19.3566 14 20.5353 13.2678 21.2676C12.5355 22 11.357 22 9 22H8C5.64298 22 4.46447 22 3.73223 21.2676C3 20.5353 3 19.3566 3 16.9992V10.9982C3 8.6408 3 7.4621 3.73223 6.72974C4.35264 6.10923 5.29344 6.01447 7 6'
    }
  ],
  [
    'path',
    {
      d: 'M10 6V7C10 8.88562 10 9.82843 10.5858 10.4142C11.1716 11 12.1144 11 14 11V13L17 11C18.8856 11 19.8284 11 20.4142 10.4142C21 9.82843 21 8.88562 21 7V6C21 4.11438 21 3.17157 20.4142 2.58579C19.8284 2 18.8856 2 17 2H14C12.1144 2 11.1716 2 10.5858 2.58579C10 3.17157 10 4.11438 10 6Z'
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

OnlineLearning3Icon.displayName = 'OnlineLearning3Icon';
export default OnlineLearning3Icon;
